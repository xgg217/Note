# sample

## 概述

+ 返回数组中的随机元素

+ 该函数接受一个数组，并从数组中随机选择一个元素

## API

+ `function sample<T>(arr: T[]): T;`

+ 参数

  + arr (T[]): 要从中取样的数组

+ 返回值

  + (T): 数组中的一个随机元素

  ```js
  const array = [1, 2, 3, 4, 5];
  const randomElement = sample(array);
  // randomElement 将会是数组中的某个随机元素。
  ```
