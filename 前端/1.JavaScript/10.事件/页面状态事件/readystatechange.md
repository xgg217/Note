# readystatechange

## readystatechange

  - `readystatechange` 事件发生在 `Document` 对象和 `XMLHttpRequest` 对象，当它们的 `readyState` 属性发生变化时触发

  - 三个状态：`loading` 、 `interactive` 、 `complete`

      - `interactive`：触发 `DOMContentLoaded` 事件

      - `complete`：触发 window 的 load 事件

    ```js
    document.onreadystatechange = function () {
      if (document.readyState == "interactive") {
        // ...
      }
    }
    ```
