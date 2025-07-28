# random 随机数

## _.random([lower=0], [upper=1], [floating])

+ 产生一个包括 lower 与 upper 之间的数。 如果只提供一个参数返回一个0到提供数之间的数

  + 如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数

+ 参数

  + `[lower=0]` (number): 下限
  + `[upper=1]` (number): 上限
  + `[floating]` (boolean): 指定是否返回浮点数

+ 返回值

  + (number):返回随机数

  ```js
  _.random(0, 5);
  // => an integer between 0 and 5

  _.random(5);
  // => also an integer between 0 and 5

  _.random(5, true);
  // => a floating-point number between 0 and 5

  _.random(1.2, 5.2);
  // => a floating-point number between 1.2 and 5.2
  ```
