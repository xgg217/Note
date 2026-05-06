# drop

## 概述

+ 从数组的开头移除指定数量的元素并返回剩余部分

+ 该函数接受一个数组和一个数字作为参数，返回一个新数组，从开头移除指定数量的元素

## API

+ `function drop<T>(arr: T[], itemsCount: number): T[];`

+ 参数

  + arr (T[]): 要从中移除元素的数组
  + itemsCount (number): 要从数组开头移除的元素数量

+ 返回值

  + (T[]) 一个新数组，从开头移除了指定数量的元素

  ```js
  const array = [1, 2, 3, 4, 5];
  const result = drop(array, 2);
  // 结果将是 [3, 4, 5] 因为前两个元素被移除了。
  ```
