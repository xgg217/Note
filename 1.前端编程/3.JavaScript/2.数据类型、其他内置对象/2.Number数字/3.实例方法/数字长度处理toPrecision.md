# Number.prototype.toPrecision()

## API

+ 语法

  ```js
  toPrecision()
  toPrecision(precision)
  ```

  + 参数

    + precision (可选) 一个指定有效位数的整数

  + 返回值

    + 一个以定点表示法或指数表示法表示 `Number` 对象的字符串，该字符串四舍五入到 `precision` 个有效数字
    + 如果 `precision` 参数被省略，则与 `Number.prototype.toString()` 行为相同
    + 如果 `precision` 参数不是整数，则将其四舍五入到最近的整数

  ```js
  let numObj = 5.123456;

  numObj.toPrecision(); // 输出 '5.123456'
  numObj.toPrecision(5); // 输出 '5.1235'
  numObj.toPrecision(2); // 输出 '5.1'
  numObj.toPrecision(1); // 输出 '5'

  numObj = 0.000123;

  numObj.toPrecision(); // 输出 '0.000123'
  numObj.toPrecision(5); // 输出 '0.00012300'
  numObj.toPrecision(2); // 输出 '0.00012'
  numObj.toPrecision(1); // 输出 '0.0001'

  // 请注意，在某些情况下可能会返回指数表示法字符串
  (1234.5).toPrecision(2); // 输出 '1.2e+3'
  ```
