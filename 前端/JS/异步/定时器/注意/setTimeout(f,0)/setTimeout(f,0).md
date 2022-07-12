# setTimeout(f,0)

## 含义

*   `setTimeout` 的作用是将代码推迟到指定时间执行，如果指定时间为0，即 `setTimeout(f, 0)`，那么会立刻执行吗？

*   答案是不会。因为上一段说过，必须要等到当前脚本的同步任务和“任务队列”中已有的事件，全部处理完以后，才会执行 `setTimeout` 指定的任务。也就是说，`setTimeout` 的真正作用是，在“消息队列”的现有消息的后面再添加一个消息，规定在指定时间执行某段代码。

*   `setTimeout` 添加的事件，会在下一次 `Event Loop` 执行。

*   `setTimeout(f, 0)` 将第二个参数设为0，作用是让f在现有的任务（脚本的同步任务和“消息队列”指定的任务）一结束就立刻执行。

*   也就是说，`setTimeout(f, 0)` 的作用是，尽可能早地执行指定的任务。

*   而并不是会立刻就执行这个任务。

    ```javascript
    setTimeout(function () {
      console.log('你好！');
    }, 0);
    ```

*   `setTimeout(f, 0)` 指定的任务，最早也要到下一次 `Event Loop` 才会执行

    ```javascript
    setTimeout(function() {
      console.log("Timeout");
    }, 0);

    function a(x) {
      console.log("a() 开始运行");
      b(x);
      console.log("a() 结束运行");
    }

    function b(y) {
      console.log("b() 开始运行");
      console.log("传入的值为" + y);
      console.log("b() 结束运行");
    }

    console.log("当前任务开始");
    a(42);
    console.log("当前任务结束");

    // 当前任务开始
    // a() 开始运行
    // b() 开始运行
    // 传入的值为42
    // b() 结束运行
    // a() 结束运行
    // 当前任务结束
    // Timeout
    ```

## 注意

*   根据HTML 5标准，`setTimeout` 推迟执行的时间，**最少**是4毫秒。

*   如果小于这个值，会被自动增加到4。

*   这是为了防止多个 `setTimeout(f, 0)` 语句连续执行，造成性能问题。
