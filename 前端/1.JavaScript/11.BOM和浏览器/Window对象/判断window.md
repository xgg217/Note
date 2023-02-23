# 判断window

## 判断是否是 window 对象

+ 代码

    ```js
    function isWindow( obj ) {
      return obj != null && obj === obj.window;
    }
    ```
