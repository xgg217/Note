# setImmediate

## 介绍

*   异步

*   类似于 setTimeout 0

    ```javascript
    setImmediate(() => {

    }, 0);
    ```

## 执行

*   `setImmediate` 指定的回调函数，总是排在 `setTimeout` 前面
