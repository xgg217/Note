# dropRight

## 概述

+ 从数组的末尾移除指定数量的元素并返回剩余部分。

+ 该函数接受一个数组和一个数字作为参数，返回一个新数组，从末尾移除指定数量的元素

## API

+ `function dropRight<T>(arr: T[], itemsCount: number): T[];`

+ 参数

  + arr (T[]): 要从中移除元素的数组。
  + itemsCount (number): 要从数组末尾移除的元素数量。

+ 返回值

  + (T[]) 一个新数组，从末尾移除了指定数量的元素

  ```js
  const array = [1, 2, 3, 4, 5];
  const result = dropRight(array, 2);
  // 结果将是 [1, 2, 3] 因为最后两个元素被移除了。
  ```
