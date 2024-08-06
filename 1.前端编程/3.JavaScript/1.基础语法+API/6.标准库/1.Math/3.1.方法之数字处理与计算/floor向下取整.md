# Math.floor(x)

## Math.floor(x)

+ `Math.floor(x)` 向上取整

  + 参数

    + x 一个数值

  + 小于等于 x 的最大整数。它的值与 `-Math.ceil(-x)` 相同

  ```js
  Math.floor(-Infinity); // -Infinity
  Math.floor(-45.95); // -46
  Math.floor(-45.05); // -46
  Math.floor(-0); // -0
  Math.floor(0); // 0
  Math.floor(4); //   4
  Math.floor(45.05); //  45
  Math.floor(45.95); //  45
  Math.floor(Infinity); // Infinity
  ```
