# delimiter定界符

## delimiter 定界符

*   返回: `<string>`

*   作用：提供平台特定的路径定界符

    *   `;` 用于 Windows

    *   `:` 用于 POSIX

    ```javascript
    // 在 POSIX 上：
    console.log(process.env.PATH);
    // 打印: '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'

    process.env.PATH.split(path.delimiter);
    // 返回: ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']
    ```

    ```javascript
    // 在 Windows 上
    console.log(process.env.PATH);
    // 打印: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'

    process.env.PATH.split(path.delimiter);
    // 返回: ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']
    ```
