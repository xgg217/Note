# takeUntil

## 概述

+ takeUntil 是 RxJS 里最常用、最重要的操作符之一，专门用来优雅地取消订阅、防止内存泄漏

+ 一句话总结：

  + 让一个 Observable 持续发射数据，直到另一个 Observable 发出信号，就自动停止订阅

## API

+ API

  ```js
  source$.pipe(
    takeUntil(stopSignal$)
  )
  ```

+ 工作流程

  1. 订阅 source$，正常接收数据
  2. 只要 stopSignal$ 不发射，就一直继续
  3.一旦 stopSignal$ 发射了任意值

    → 立刻自动取消订阅 source$
    → 不会再接收任何数据


## 示例

+ 示例

  ```js
  // 1. 每 1s 发射一个数字（数据流）
  const source$ = interval(1000);

  // 2. 停止信号（Subject 专门用来发信号）
  const stop$ = new Subject();

  // 3. 使用 takeUntil
  source$.pipe(
    takeUntil(stop$)
  ).subscribe(num => {
    console.log('接收：', num);
  });

  // 4. 5秒后发送停止信号
  setTimeout(() => {
    stop$.next(); // 发信号 → 立即停止订阅！
  }, 5000);

  // 结果
  plaintext
  0
  1
  2
  3
  4
  （然后自动停止，不再输出）
  ```
