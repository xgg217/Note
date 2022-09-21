# time、timeEnd

## time()，timeEnd()

  - 这两个方法用于计时，可以算出一个操作所花费的准确时间。

    ```javascript
    console.time('Array initialize');

    var array= new Array(1000000);
    for (var i = array.length - 1; i >= 0; i--) {
        array[i] = new Object();
    };

    console.timeEnd('Array initialize');
    // Array initialize: 1914.481ms
    ```

  - `time` 方法表示计时开始，`timeEnd` 方法表示计时结束。

  - 它们的参数是计时器的名称。

  - 调用 `timeEnd` 方法之后，`console` 窗口会显示“计时器名称: 所耗费的时间”
