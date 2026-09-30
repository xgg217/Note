# process进程

## argv

+ 启动node 时的命令行参数

+ `String[]`

  ```js
  // 命令
  console.log(process.argv)

  [
    'C:\\Program Files\\nodejs\\node.exe', // node  的绝对命令（环境变量）
    'D:\\LX\\node\\20200807\\index.js', // index.js 的绝对路劲
    'a', // 参数
    'bcd' // 参数
  ]
  ```

## execArgv

+ node 命令行后的直接参数

## env

+ 获取环境变量对象

  ```js
  process.env.NODE_ENV
  ```

## cwd()

+ 返回当前nodejs进程的工作目录(命令行)

+ 和当前文件所在的目录没有关系

+ 绝对路径

  ```js
  console.log(process.cwd()); // d:\LX\node\20200511
  ```

## exit()

+ 强制退出当前node进程

+ 可传入退出码

  + 0：表示成功退出。默认为 0

  + 1：表示错误

    ```js
    process.exit();

    process.exit(1);

    process.exit(0);
    ```

## stdout和stdin

+ 屏幕输出和输入

  ```js
  process.stdout.write("请输入一个数字")

  process.stdin.on("data",(res) => {
      console.log("data")
      console.log(res.toString())
  })
  ```

## memoryUsage()

+ 获取当前内存使用情况

  ```js
  process.memoryUsage()
  {
      rss: 30572544, // 总的nodeneoclassical
      heapTotal: 6414336, // 总的堆内存
      heapUsed: 5431600, // 现在使用的内存
      external: 421057,
      arrayBuffers: 17378
  }
  ```

## platform

+ 获取当前的操作系统

  ```js
  console.log(process.platform); // win32
  ```

## kill(pid)

+ 根据进程ID杀死进程

+ pid：任务管理器能看到（每个应用每次启动的 pid 都不一样）

  ```js
  process.kill(pid);

  // 例如
  process.kill(1554);
  ```
