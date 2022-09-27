# API

## cpus()

  - 返回一个对象数组，其中包含有关每个逻辑 CPU 内核的信息

  - 返回: `<Object[]>`

## tmpdir()

  - 以字符串的形式返回操作系统的默认临时文件目录

  - 返回: `<string>`

    ```javascript
    console.log(os.tmpdir()); // C:\Users\小刚刚\AppData\Local\Temp
    ```

## EOL

  - 操作系统特定的行末标志

  - 返回值 `<string>`

      - 在 POSIX 上是 `\n`

      - 在 Windows 上是 `\r\n`

    ```javascript
    const os = require("os")
    console.log(os.EOL);
    ```

## arch()

  - 返回为其编译 Node.js 二进制文件的操作系统的 CPU 架构

  - 返回: `<string>`

    ```javascript
    const os = require("os")
    console.log(os.arch()); // x64
    ```

## freeman()

  - 以整数的形式返回空闲的系统内存量（以字节为单位）

  - 返回: `<integer>`

    ```javascript
    const os = require("os")
    console.log(os.freemem()); // 10604224512
    ```

## homedir()

  - 返回当前用户的主目录的字符串路径

  - 返回: `<string>`

    ```javascript
    console.log(os.homedir()); // C:\Users\小刚刚
    ```

## hostname()

  - 字符串的形式返回操作系统的主机名

  - 返回: `<string>`

  - 相当于桌面--> 右键 --> 属性 --> 计算机名

    ```javascript
    console.log(os.hostname()); // DESKTOP-KIV8P4P
    ```
