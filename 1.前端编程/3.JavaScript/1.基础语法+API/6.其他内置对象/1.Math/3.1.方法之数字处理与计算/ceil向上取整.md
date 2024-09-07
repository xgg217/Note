# Math.ceil

## Math.ceil(x)

+ `Math.ceil(x)` 向上取整

  + 参数

    + x 一个数值

  + 返回值 大于等于 x 的最小整数。它的值与 -Math.floor(-x) 相同

  ```js
  Math.ceil(-Infinity); // -Infinity
  Math.ceil(-7.004); // -7
  Math.ceil(-4); // -4
  Math.ceil(-0.95); // -0
  Math.ceil(-0); // -0
  Math.ceil(0); // 0
  Math.ceil(0.95); // 1
  Math.ceil(4); // 4
  Math.ceil(7.004); // 8
  Math.ceil(Infinity); // Infinity
  ```
