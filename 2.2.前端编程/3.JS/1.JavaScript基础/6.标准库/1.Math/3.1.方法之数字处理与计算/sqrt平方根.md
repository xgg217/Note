# Math.sqrt()

## 概述

+ `Math.sqrt()` 函数返回一个数的平方根

  ```js
  Math.sqrt(3 * 3 + 4 * 4); // 5
  ```

## API

+ `Math.sqrt(x)`

  + 如果参数 number 为负值，则 sqrt 返回 `NaN`

  ```js
  Math.sqrt(9); // 3
  Math.sqrt(2); // 1.414213562373095

  Math.sqrt(1);  // 1
  Math.sqrt(0);  // 0
  Math.sqrt(-1); // NaN
  Math.sqrt(-0); // -0
  ```
