# median

## 概述

+ 计算一个数字数组的中位数。

+ 中位数是排序数组中的中间值。 如果数组的元素个数为奇数，中位数就是中间的值。 如果数组的元素个数为偶数，则返回两个中间值的平均值。

+ 如果数组为空，此函数返回NaN。

## API

+ `function median(nums: number[]): number;`

+ 参数

  + nums (number[]): 要计算中位数的数字数组。

+ 返回值

  + (number): 数组中所有数字的中位数。


  ```js
  const arrayWithOddNumberOfElements = [1, 2, 3, 4, 5];
  const result = median(arrayWithOddNumberOfElements);
  // result 将会是 3

  const arrayWithEvenNumberOfElements = [1, 2, 3, 4];
  const result = median(arrayWithEvenNumberOfElements);
  // result 将会是 2.5
  ```

