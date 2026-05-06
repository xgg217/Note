# flow

## 概述

+ 创建一个新的函数，该函数按顺序执行给定的函数

  + 上一个函数的返回值作为参数传递给下一个函数

+ 返回的函数的 this 上下文也会传递给作为参数提供的函数

## API

+ API

  ```js
  function flow<R>(f: () => R): () => R;
  function flow<A extends any[], R>(f1: (...args: A) => R): (...args: A) => R;
  function flow<A extends any[], R1, R2>(f1: (...args: A) => R1, f2: (a: R1) => R2): (...args: A) => R2;
  function flow<A extends any[], R1, R2, R3>(
    f1: (...args: A) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3
  ): (...args: A) => R3;
  function flow<A extends any[], R1, R2, R3, R4>(
    f1: (...args: A) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4
  ): (...args: A) => R4;
  function flow<A extends any[], R1, R2, R3, R4, R5>(
    f1: (...args: A) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5
  ): (...args: A) => R5;
  function flow(...funcs: Array<(...args: any[]) => any>): (...args: any[]) => any;
  ```

+ 参数:

  + funcs (Array<(...args: any[]) => any>): 需要调用的函数

    + flow函数支持最多5个函数的组合，每个重载版本都提供了精确的类型推断

+ 返回值

  + ((...args: any[]) => any): 新的组合函数

  ```js
  import { flow } from 'es-toolkit';

  // 基础使用示例
  const add = (x, y) => x + y;
  const square = n => n * n;
  const double = n => n * 2;

  const processNumbers = flow(add, square, double);
  console.log(processNumbers(1, 2)); // 输出: 18
  ```

    ![alt text](flow函数的执行流程.png)

## 使用场景

+ 组合使用

  ```js
  // TypeScript类型安全示例
  const processWithTypes = flow(
    (a: number, b: number) => a + b,      // 接收两个number参数，返回number
    (n: number) => n.toString(),          // 接收number，返回string
    (s: string) => s.split('')            // 接收string，返回string[]
  );

  const result = processWithTypes(1, 2);  // 类型推断为string[]
  ```

