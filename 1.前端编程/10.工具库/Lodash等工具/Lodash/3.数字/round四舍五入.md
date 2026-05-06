# round 四舍五入

## round

+ 根据 precision（精度） 四舍五入 number

+ `_.round(number, [precision=0])`

+ 参数

  + number (number): 要四舍五入的数字
  + `[precision=0]` (number): 四舍五入的精度

+ 返回

  + (number): 返回四舍五入的数字

  ```js
  _.round(4.006);
  // => 4

  _.round(4.006, 2);
  // => 4.01

  _.round(4060, -2);
  // => 4100
  ```
