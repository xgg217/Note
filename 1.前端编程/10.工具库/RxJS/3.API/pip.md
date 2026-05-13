# pip

## 概述

+ pipe 是 RxJS 中用来组合操作符（operators）的核心方法
+ 它的作用就是：把多个数据处理步骤，按顺序串在一起，让数据流一步步被加工、转换、过滤

+ 你可以把它理解成 工厂流水线：

  1. 源头发出数据（原料）
  2. 经过 pipe 里的一个个操作符（加工机器）
  3. 最后输出处理好的数据（成品）

## 最核心作用

+ 不改变原 Observable（纯函数，无副作用）
+ 按顺序执行 操作符

  ```js
  observable$.pipe( op1(), op2(), op3() )
  ```

+ 代码更清晰、易读、易维护

## 示例

+ 示例

  ```js
  import { of,map,filter } from 'rxjs';

  // 源头数据流
  const source$ = of(1, 2, 3, 4, 5);

  // 使用 pipe 组合操作符
  const result$ = source$.pipe(
    filter(num => num % 2 === 0), // 第一步：只留偶数
    map(num => num * 10)         // 第二步：每个数 ×10
  );

  // 订阅输出
  result$.subscribe(console.log);
  // 结果：20, 40
  ```
