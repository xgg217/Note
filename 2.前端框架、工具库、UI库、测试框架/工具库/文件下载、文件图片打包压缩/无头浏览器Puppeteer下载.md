# 使用 Puppeteer 实现文件下载

## 需求

+ 需要到某合作方网站（某国银行）下载文件，他们只提供了帐号密码，没有提供下载的接口，需要我们自己去分析接口来调用

## 无头浏览器

+ 无头（Headless）浏览器是指没有图形界面的浏览器，可以运行在服务器，和我们常规的浏览器不一样

+ 无头浏览器能够模拟用户的真实操作，比如打开页面、输入账号密码、点击登录、跳转等等。网站也无法分辨当前是真实浏览器访问还是无头浏览器访问

+ 目前比较火的是无头浏览器是 Google 的 Puppeteer，常用于自动化 UI 测试和截图

+ puppeteer 的文档非常详细，可以参考 Puppeteer API。

+ Puppeteer 是基于 Chrome Devtools Protocol 协议的。CDP 协议允许使用工具来检查、调试和分析 Chromium、Chrome 和其他基于 Blink 的浏览器。我们常用的 DevTools 就是基于 CDP 协议实现的

+ 它使用 Websocket，利用 WebSocket 来建立连接 DevTools 和浏览器内核的快速数据通道。

+ 我们熟知的骨架屏也可以利用 Puppeteer 来自动生成，饿了么开源的 page-skeleton-webpack-plugin 就是一个很好的应用场景

## 实现

+ 在开始写代码之前，先思考一下去一个网站下载文件需要进过哪些步骤？

  + 首先，我们打开网站登录页，输入用户名和密码，点击登录按钮
  + 登录后，我们需要模拟用户点击行为来触发 DOM 的 click，从而实现跳转和切换功能
  + 一直到进入下载页面，点击下载按钮，文件会被下载下来。我们获取到文件流之后上传到 S3 服务器就行了

## 登录

+ 首先，我们来启动一个 Puppeteer 的浏览器 Browser
+ 调用 launch 方法启动一个无头浏览器，默认是 headless，如果本地调试可以设置 `headless: false` ，这样在本地会启动一个浏览器

  ```js
  import { launch } from 'puppeteer';
  const browser = await launch({
    timeout: 60 * 1000,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
    ],
    userDataDir: './user_data',
  });
  browser.on('disconnected', startServer); // 如果连接失败，就重新创建
  console.log(`Restart Puppeteer with pid ${browser.process().pid}`);
  ```

+ 浏览器已经启动，如果想访问网页的话，我们还需要创建一个 page，也就是 Chrome 里面的标签页
+ 所以一个 Browser 可以创建多个 page

  ```js
  const page = await browser.newPage();
  ```

+ 然后我们需要创建一个 CDPSession，可以直接与原生的 CDP 进行通信

  + 通过 CDP 会话来设置下载路径

  ```js
  page.setViewport({
    width: 1366,
    height: 768,
  });

  const client = await page.target().createCDPSession();

  client.send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath: '/download'
  });
  ```

+ 然后就可以打开我们想去登录的页面

  ```js
  await page.goto(config.home, {});
  await page.waitFor(1000);

  // 通过 type 实现输入
  await page.type('input[name=usename]', username, {
    delay: 50,
  });

  await page.type('input[name=password]', password, {
    delay: 50,
  });

  // 回车
  await page.keyboard.press('Enter');
  ```

+ 登录成功后，需要跳转到一个网站首页
+ 如果立即去执行 DOM 操作，就会出现页面还没有加载成功的情况
+ 所幸 Puppeteer 提供给了 waitForNavigation 这个 API

  ```js
  await page.waitForNavigation(); // 直到导航完成后
  ```

+ 操作点击 DOM 元素的时候比较保险的一种方式是 waitForSelector，等我们要操作的 DOM 元素出现后再去点

  ```js
  await page.waitForSelector('#nav', { timeout: 10 * 60 * 1000 });
  ```

+ 如果 DOM 查询比较复杂，还可以用 evaluate 方法，在这个方法里面可以使用 document.querySelector 来查询。

  ```js
  await page.evaluate(() => {
    const elements = document.querySelectorAll('.xxx');
    elements.forEach(e => {
      if ((e as any).title === 'yyy') {
        (e as HTMLElement).click();
      }
    });
  });
  ```

## 下载

+ 进入下载页面后，点击下载按钮，这个时候文件下载到了我们提前设置的文件夹里面。那么怎么知道文件是否下载完成呢？

+ 这里有个粗暴的方法，每秒去轮询一次，如果下载成功了，文件后缀就是我们想要的那个格式，比如 .txt, .csv 等等

  ```js
  // check 下载文件
  let isFinish = false;
  let files: string[] = [];
  const now = Date.now();
  while (!isFinish) {
    await wait(1000);
    files = await promisify(readdir)(dir);
    // 如果有文件，且后缀满足我们的要求
    if (files.length > 0 && checkExtname(files[0], extname)) {
      isFinish = true;
    }
    // 如果文件超过10min还没下载成功，就抛出错误
    if (!isFinish && Date.now() - now >= 10 * 60 * 1000) {
      throw new Error('download file timeout');
    }
  }
  // 记录一下耗时
  console.log(`time spend: time=${Date.now() - now}`);
  ```

+ 拿到文件地址后，就去读取这个文件流，上传到 S3 服务器上面

  ```js
  const filename = files[0];
  const filePath = path.resolve(downloadDir, filename);
  // 获取文件可读流
  const stream = createReadStream(filePath);
  // 上传到 S3
  const pathInfo = await uploadS3(stream);
  // 上传成功后记得删除文件
  promisify(unlink)(filePath);
  ```

## 错误处理

+ 由于 Puppeteer 本身也不是特别稳定，如何进行错误捕获呢？怎么通知到开发下载失败了呢？

+ 任何一步都可能出错，有可能点某个 DOM 点不到，有可能文件没下载下来，这些都要通知到开发
+ 所以要在每个可能的地方都进行 `try...catch`

## 发送告警邮件

+ 由于本身就无法保证100%成功率，所以在连续失败三次后发送告警邮件，通知到相关产品、测试和开发人员
+ 使用 nodemailer 可以实现邮件发送

  ```js
  const transporter = nodemailer.createTransport({
    host: 'smtp.xxx.com',
    port: 123,
    secure: true,
  });

  const options = {
    from: 'xxxx@qq.com',
    to: 'yyy@qq.com, zzz@qq.com, www@qq.com',
    subject: `下载失败: ${moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}`
    text: 'xxxxxxx',
  };

  transporter.sendMail(options, (error, info) => {
    if (error) {
      return console.log(`sendMail internal error`, error);
    }
    console.log(`sendMail successfully`);
  });
  ```

## 截图

+ 虽然我们已经发送了告警邮件，但还是无法知道问题出在了哪一步，比如网站可能刚好半夜维护了，或者网站改版了，对这个脚本都是一个致命的打击。

+ 利用 Puppeteer 提供的截图功能，在报错的时候截一张图，把图片一起贴到告警邮件里面。这样收到告警邮件后，我一打开就知道问题出在了哪一步，再也不需要很辛苦的去看日志了

  ```js
  // 实现网页截图
  const base64 = await page.screenshot({
    fullPage: true,
    encoding: 'base64',
  });
  const img = `<img src="data:image/png;base64,${base64}" />`;
  return img;
  ```


