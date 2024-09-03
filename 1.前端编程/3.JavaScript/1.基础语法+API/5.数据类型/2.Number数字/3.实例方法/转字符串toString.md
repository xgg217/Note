# Number.prototype.toString()

## API

+ Number 值的 `toString()` 方法返回表示该数字值的字符串


  ```js
  toString()
  toString(radix)
  ```

  + 参数

    + radix（可选）： 一个整数，范围在 2 到 36 之间，用于指定表示数字值的基数。默认为 *10*

  + 返回值 一个表示指定数字值的字符串


  + 异常 `RangeError` 如果 radix 小于 2 或大于 36，则抛出该异常

  ```js
  const count = 10;
  console.log(count.toString()); // "10"

  console.log((17).toString()); // "17"
  console.log((17.2).toString()); // "17.2"

  const x = 6;
  console.log(x.toString(2)); // "110"
  console.log((254).toString(16)); // "fe"
  console.log((-10).toString(2)); // "-1010"
  console.log((-0xff).toString(2)); // "-11111111"
  ```

## 描述

+ Number 对象的重写了 Object 的 toString 方法；它不会继承 `Object.prototype.toString()`
+ 对于 `Number` 值， `toString` 方法返回数字值指定基数的字符串表示
