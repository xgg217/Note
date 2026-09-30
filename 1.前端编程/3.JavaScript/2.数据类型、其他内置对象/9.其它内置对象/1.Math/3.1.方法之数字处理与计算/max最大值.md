# Math.max

## Math.max()

+ `Math.max()`
+ `Math.max(value0)`
+ `Math.max(value0, value1)`
+ `Math.max(value0, value1, /* … ,*/ valueN)`

  + 参数

    + value1, value2, … , valueN : 0 个或多个数字，将在其中选择，并返回最大的值

  + 返回值 给定数值中最大的数

    + 如果给定的参数中**至少**有一个参数**无法**被转换成数字，则会返回 `NaN`
    + 如果没有提供参数，返回 `-Infinity`

  ```js
  const a1 = Math.max(10, 20,30); // 30
  const a2 = Math.max.call(null,100, 20,30); // 100
  const a3 = Math.max.apply(null,[101, 200,30]); // 200

  var arr = [1, 2, 3];
  var max = Math.max(...arr); // 3

  Math.max(true, 0) // 1
  Math.max(true, '2', null) // 2
  Math.max(1, undefined) // NaN
  Math.max(1, {}) // NaN

  const arr = [1, 2, 3];
  const max = Math.max(...arr);
  ```
