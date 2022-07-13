# \_\_dirname

## 介绍

*   获取当前模块所在的目录

    ```javascript
    console.log(__dirname); // d:\LX\node\20200511
    ```

*   并非 `global` 属性

    ```javascript
    console.log(global.__dirname); // undefined
    ```
