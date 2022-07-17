# dirname

## 概述

*   返回路径中最后一个部分的上一层目录所在路径

## dirname(path)

*   参数

    *   path `<string>`

*   返回: `<string>`

*   `path.dirname()` 方法返回 path 的目录名

    ```javascript
    path.dirname('/foo/bar/baz/asdf/quux.js'); // '/foo/bar/baz/asdf'

    path.dirname('/foo/bar/baz/asdf/quux/'); // '/foo/bar/baz/asdf'

    path.dirname('/foo/bar/baz/asdf/quux'); // '/foo/bar/baz/asdf'
    ```
