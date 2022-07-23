# isAbsolute

## path.isAbsolute(path) 判断是否为绝对路径

  - `path.isAbsolute()` 方法确定 path 是否为绝对路径。

  - 参数

      - path `<string>`

  - 返回值 `<boolean>`

    ```javascript
    path.isAbsolute('//server');    // true
    path.isAbsolute('\\\\server');  // true
    path.isAbsolute('C:/foo/..');   // true
    path.isAbsolute('C:\\foo\\..'); // true
    path.isAbsolute('bar\\baz');    // false
    path.isAbsolute('bar/baz');     // false
    path.isAbsolute('.');           // false
    ```
