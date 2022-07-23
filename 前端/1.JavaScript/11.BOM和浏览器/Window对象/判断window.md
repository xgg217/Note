# 判断window

## 判断是否是 window 对象

  - 代码

    ```javascript
    function isWindow( obj ) {
      return obj != null && obj === obj.window;
    }
    ```
