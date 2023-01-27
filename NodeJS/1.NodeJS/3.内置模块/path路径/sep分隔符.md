# sep分隔符

## sep

+ 返回: `<string>`

+ 作用：提供平台特定的路径片段分隔符

  + Windows 上是 `\`

  + POSIX 上是 `/`

    ```javascript
    const path = require("path");
    console.log(path.sep); // "\"
    ```
