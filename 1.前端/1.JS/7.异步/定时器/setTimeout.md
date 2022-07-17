# setTimeout

## 作用

  - `setTimeout` 函数用来指定某个函数或某段代码，在多少毫秒之后执行。

  - 它返回一个整数，表示定时器的编号，以后可以用来取消这个定时器。

    ```javascript
    var timerId = setTimeout(func|code, delay)
    ```

  - `setTimeout` 函数接受两个参数，第一个参数 `func` | `code` 是将要推迟执行的函数名或者一段代码，第二个参数 `dela` y是推迟执行的毫秒数。

    ```javascript
    console.log(1);
    setTimeout('console.log(2)',1000);
    console.log(3);
    ```
