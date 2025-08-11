# attemptAsync

## 概述

+ 尝试执行异步函数并返回包含结果或错误的元组

## 注意

+ 此函数专为处理异步函数（返回Promise的函数）而设计。 对于同步函数，建议使用attempt函数代替

## API

+ `function attemptAsync<T, E>(func: () => Promise<T>): Promise<[null, T] | [E, null]>;`

+ 参数

  + `func (() => Promise<T>)`: 尝试执行的异步函数

+ 返回值

  + (`Promise<[null, T] | [E, null]>`): 解析为以下元组的Promise:

    + 成功时: `[null, T]` - 第一个元素为null，第二个为结果
    + 出错时: `[E, null]` - 第一个元素为捕获的错误，第二个为 `null`

  ```js
  import { attemptAsync } from 'es-toolkit/util';

  // 成功时返回 [null, 函数返回值] 元组。
  const [error, data] = await attemptAsync(async () => {
    const response = await fetch('https://api.example.com/data');
    return response.json();
  });
  // [null, 响应对象]
  ```

  ```js
  // 出错时返回 [函数抛出的错误, null] 元组。
  const [error, data] = await attemptAsync(async () => {
    throw new Error('网络错误');
  });
  // [Error, null]
  ```

  ```js
  // 使用泛型类型可以指定错误和返回值的类型。
  const [error, users] = await attemptAsync<User[], Error>(async () => {
    const response = await fetch('https://api.example.com/users');
    return response.json();
  });
  // `error` 被推断为 `Error` 类型，`users` 被推断为 `User[]` 类型。
  ```
