# setInterval

## 作用

- `setInterval` 函数的用法与 `setTimeout` 完全一致，区别仅仅在于 `setInterval` 指定某个任务每隔一段时间就执行一次，也就是无限次的定时执行

    ```js
    var timer = setInterval(function() {
      console.log(2);
    }, 1000);
    ```
