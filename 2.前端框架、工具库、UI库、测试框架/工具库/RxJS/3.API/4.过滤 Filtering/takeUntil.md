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

## 注意点

+ takeUntil 必须放最后

  ```js
  // 错误
  source$.pipe(
    takeUntil(stop$), // 错！
    map(...),
    filter(...)
  )
  ```

  ```js
  source$.pipe(
    map(...),
    filter(...),
    takeUntil(stop$) // 对！
  )
  ```

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

+ 组件销毁时取消订阅（防内存泄漏）

  ```js
  import { Component, OnDestroy } from '@angular/core';
  import { Subject, takeUntil } from 'rxjs';

  @Component({
    selector: 'app-test',
    template: ''
  })
  export class TestComponent implements OnDestroy {
    // 1. 创建停止信号（固定写法）
    private destroy$ = new Subject<void>();

    constructor() {
      // 订阅任何流都套上 takeUntil
      someObservable$.pipe(
        takeUntil(this.destroy$)
      ).subscribe();
    }

    // 2. 组件销毁时自动触发
    ngOnDestroy() {
      // 发信号 → 所有订阅全部自动取消
      this.destroy$.next();
      this.destroy$.complete();
    }
  }
  ```
