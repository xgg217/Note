# 判断是不是 DOM 元素

## isElement

*   代码

    ```javascript
    isElement = function(obj) {
      return !!(obj && obj.nodeType === 1);
    };
    ```
