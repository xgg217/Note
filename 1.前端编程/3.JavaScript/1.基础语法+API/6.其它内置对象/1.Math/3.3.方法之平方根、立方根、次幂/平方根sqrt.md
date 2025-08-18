# Math.sqrt()

## 概述

+ `Math.sqrt()` 函数返回一个数的平方根

  ```js
  Math.sqrt(3 * 3 + 4 * 4); // 5
  ```

## API

+ `Math.sqrt(x)`


  + 参数

    + x 一个数值

      + 如果参数 number 为负值，则 sqrt 返回 `NaN`

  + 返回值 返回一个数的平方根

  ```js
  Math.sqrt(9); // 3
  Math.sqrt(2); // 1.414213562373095

  Math.sqrt(1);  // 1
  Math.sqrt(0);  // 0
  Math.sqrt(-1); // NaN
  Math.sqrt(-0); // -0
  ```

## 示例

+ 计算直角三角形的斜边  推荐使用 `Math.hypot()`

  ```js
  // v1 和 v2 是三角形的两个直角边或复数的实部和虚部
  Math.sqrt(v1*v1 + v2*v2)
  ```
