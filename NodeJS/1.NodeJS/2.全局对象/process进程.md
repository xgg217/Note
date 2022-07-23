# process进程

## cwd()

  - 返回当前nodejs进程的工作目录(命令行)

  - 和当前文件所在的目录没有关系

  - 绝对路径

    ```javascript
    console.log(process.cwd()); // d:\LX\node\20200511
    ```

## exit()

  - 强制退出当前node进程

  - 可传入退出码

      - 0：表示成功退出。默认为 0

      - 1：表示错误

    ```javascript
    process.exit();

    process.exit(1);

    process.exit(0);
    ```

## argv

  - String\[]

  - 获取命令中的所有参数

    ```javascript
    // 命令
    console.log(process.argv)

    [
      'C:\\Program Files\\nodejs\\node.exe', // node  的绝对命令（环境变量）
      'D:\\LX\\node\\20200807\\index.js', // index.js 的绝对路劲
      'a', // 参数
      'bcd' // 参数
    ]
    ```

## platform&#x20;

  - 获取当前的操作系统

    ```javascript
    console.log(process.platform); // win32
    ```

## kill(pid)

  - 根据进程ID杀死进程

  - pid：任务管理器能看到（每个应用每次启动的 pid 都不一样）

    ```javascript
    process.kill(pid);

    // 例如
    process.kill(1554);
    ```

## env

  - 获取环境变量对象

    ```javascript
    process.env
    ```
