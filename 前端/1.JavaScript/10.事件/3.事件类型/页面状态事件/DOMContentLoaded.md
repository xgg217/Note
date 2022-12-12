# DOMContentLoaded

## DOMContentLoaded

- 当HTML文档下载并解析完成以后，就会在 `document` 对象上触发 `DOMContentLoaded` 事件

    ```js
    document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM生成");
    });
    ```

- 网页的JavaScript脚本是同步执行的，所以定义 `DOMContentLoaded` 事件的监听函数，应该放在所有脚本的最前面。否则脚本一旦发生堵塞，将推迟触发 `DOMContentLoaded` 事件
