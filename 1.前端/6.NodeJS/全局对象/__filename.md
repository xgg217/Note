# \_\_filename

## 介绍

  - 获取当前模块的文件路径

    ```javascript
    console.log(__filename); // d:\LX\node\20200511\index.js
    ```

  - 并非 `global` 属性

    ```javascript
    console.log(global.__filename); // undefined
    ```
