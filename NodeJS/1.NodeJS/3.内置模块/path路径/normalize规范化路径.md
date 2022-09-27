# normalize规范化路径

## 概述

  - 规范化路径

## normalize(path)

  - path `<string>`

  - 返回: `<string>`

  - `path.normalize()` 方法规范化给定的 `path`，解析 `'..'` 和 `'.'` 片段

    ```javascript
    // 在 POSIX 上
    path.normalize('/foo/bar//baz/asdf/quux/..');
    // 返回: '/foo/bar/baz/asdf'
    ```

    ```javascript
    // 在 Windows 上
    path.normalize('C:\\temp\\\\foo\\bar\\..\\');
    // 返回: 'C:\\temp\\foo\\'
    ```

    ```javascript
    // 由于 Windows 识别多种路径分隔符，因此这些分隔符都将被替换为 Windows 首选的分隔符（\）：
    path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar');
    // 返回: 'C:\\temp\\foo\\bar'
    ```
