# scan

## 示例

+ `scan` 的快速演示——做一个点击计数器

  ```html
  <!doctype html>
  <html lang="zh-CN">
    <head>
      <meta charset="UTF-8" />
      <script src="https://cdn.jsdelivr.net/npm/rxjs@7.8.2/dist/bundles/rxjs.umd.min.js"></script>
    </head>
    <body>
      <button id="btn">点我</button>
      <p>点击次数：<span id="count">0</span></p>
      <script>
        const fromEvent = rxjs.fromEvent;
        const scan = rxjs.operators.scan;

        fromEvent(document.querySelector("#btn"), "click")
          .pipe(
            scan(function (total) { return total + 1; }, 0)
          )
          .subscribe(function (count) {
            document.querySelector("#count").textContent = count;
          });
      </script>
    </body>
  </html>
  ```

+ `scan` 像一个内置的 Redux reducer——每次来一个事件，基于当前累积值算出新值，并且**每一步都往下发**（不像 `reduce` 只发最终结果）
