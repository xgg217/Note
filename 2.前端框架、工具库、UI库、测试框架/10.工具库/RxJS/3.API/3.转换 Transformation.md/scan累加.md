# scan 累加

## 概述

+ `scan` 像一个内置的 Redux reducer——每次来一个事件，基于当前累积值算出新值，并且**每一步都往下发**

  + 不像 `reduce` 只发最终结果

## API

+ `scan<V, A, S>(accumulator: (acc: V | A | S, value: V, index: number) => A, seed?: S): OperatorFunction<V, V | A>`

+ 参数

  + accumulator	(acc: V | A | S, value: V, index: number) => A

    + 一个“约化函数”
    + 在初始状态为 后，每个值都会调用此值 获得

  + seed S 可选。默认是。undefined

    + 初始状态。如果没有提供这个值，源的第一个值将 作为初始状态使用，并且在不经过累加器的情况下发射。所有后续数值 将由累加器函数处理。如果提供这个值，所有值都会通过 累加器功能。

+ 返回值 `OperatorFunction<V, V | A>`

## 示例

+ 提供初始值

  ```js
  const numbers$ = of(1, 2, 3);

  numbers$
    .pipe(
      scan((total, n) => total + n, 10)
    )
    .subscribe(console.log);
  // 输出: 11, 13, 16
  ```

+ 示例

  ```js
  import { of, scan, map } from 'rxjs';

  const numbers$ = of(1, 2, 3);

  numbers$
    .pipe(
      scan((total, n) => total + n), // 累加器 结果 1, 3, 6
      map((sum, index) => sum / (index + 1)) // 结果 1/1, 3/2, 6/3
    )
    .subscribe(console.log); // 1, 1.5, 2
  ```

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


