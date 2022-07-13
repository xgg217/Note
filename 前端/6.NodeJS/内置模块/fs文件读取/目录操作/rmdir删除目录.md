# rmdir删除目录

## fsPromises.rmdir(path\[, options])

*   删除目录

*   参数

    *   path

    *   options

*   返回: `<Promise>` 成功时将使用 `undefined` 履行

*   在文件（而不是目录）上使用 `fsPromises.rmdir()` 会导致 `promise` 被拒绝

*   如果文件夹非空，执行则会报错

    ```javascript
    const fsPromises = require('fs/promises');

    // 删除 c 目录
    fsPromises.rmdir('./a/b/c').then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    });
    ```

## fsPromises.rm(path\[, options])

*   删除文件和目录

*   参数

    *   path

    *   options `options`

        *   `recursive` `<boolean>` 如果为 `true`，则执行递归目录删除。 在递归模式下，操作将在失败时重试。 默认值: `false`

*   返回值 `<Promise>` 成功时将使用 `undefined` 履行
