# Web Share API

## 概述

+ 网页内容如果要分享到其他应用，通常要自己实现分享接口，逐一给出目标应用的连接方式
+ 这样很麻烦，也对网页性能有一定影响
+ Web Share API 就是为了解决这个问题而提出的，允许网页调用操作系统的分享接口，实质是 Web App 与本机的应用程序交换信息的一种方式

## 限制

+ 要求网站必须启用 `HTTPS` 协议，但是本地 `Localhost` 开发可以使用 HTTP 协议
+ 另外，这个 API 不能直接调用，只能用来响应用户的操作（比如 `click` 事件）

## API

+ 该接口部署在 `navigator.share` ，可以用下面的代码检查本机是否支持该接口

  ```js
  if (navigator.share) {
    // 支持
  } else {
    // 不支持
  }
  ```

+ `navigator.share` 是一个函数方法，接受一个配置对象作为参数
+ 配置对象有三个属性，都是可选的，但至少必须指定一个

  + `title` ：分享文档的标题
  + `url` ：分享的 URL
  + `text` ：分享的内容

  ```js
  navigator.share({
    title: 'WebShare API Demo',
    url: 'https://codepen.io/ayoisaiah/pen/YbNazJ',
    text: '我正在看《Web Share API》'
  })
  ```

+ 一般来说，url是当前网页的网址，title是当前网页的标题，可以采用下面的写法获取

  ```js
  const title = document.title;
  const url = document.querySelector('link[rel=canonical]') ?
    document.querySelector('link[rel=canonical]').href :
    document.location.href;
  ```

+ `navigator.share` 的返回值是一个 `Promise` 对象
+ 这个方法调用之后，会立刻弹出系统的分享弹窗，用户操作完毕之后，`Promise` 对象就会变为 `resolved` 状态

  ```js
  navigator.share({
    title: 'WebShare API Demo',
    url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
  }).then(() => {
    console.log('Thanks for sharing!');
  }).catch((error) => {
    console.error('Sharing error', error);
  });
  ```

  ```js
  // 所以也可以使用await命令
  shareButton.addEventListener('click', async () => {
    try {
      await navigator.share({ title: 'Example Page', url: '' });
      console.log('Data was shared successfully');
    } catch (err) {
      console.error('Share failed:', err.message);
    }
  });
  ```

## 分享文件

+ 先使用 `navigator.canShare()` 方法，判断一下目标文件是否可以分享
+ 因为不是所有文件都允许分享的，目前图像，视频，音频和文本文件可以分享

  ```js
  if (navigator.canShare && navigator.canShare({ files: filesArray })) {
    // ...
  }
  ```

+ `navigator.canShare()` 方法的参数对象，就是 `navigator.share()` 方法的参数对象
+ 这里的关键是 `files` 属性，它的值是一个 `FileList` 实例对象

+ `navigator.canShare()` 方法返回一个布尔值，如果为 `true` ，就可以使用 `navigator.share()` 方法分享文件了

  ```js
  if (navigator.canShare && navigator.canShare({ files: filesArray })) {
    navigator.share({
      files: filesArray,
      title: 'Vacation Pictures',
      text: 'Photos from September 27 to October 14.',
    })
    .then(() => console.log('Share was successful.'))
    .catch((error) => console.log('Sharing failed', error));
  }
  ```
