# Math.hypot()

## Math.hypot 与 Math.sqrt

+ `Math.hypot()` 函数比 `Math.sqrt()` 更简单也更快，你只需要调用 `Math.hypot(v1, v2)` 或 `Math.hypot(v1, v2, v3, v4, ...)`

## API

+ `Math.hypot([value1[,value2, ...]])`

  + 参数

    + `value1, value2, ...` 任意个数字
    + 如果只传入一个参数，`Math.hypot(x)` 等同于 `Math.abs(x)`

  + 返回值

    + 将所提供的参数求平方和后开平方根
    + 如果参数列表中有至少一个参数不能被转换为数字，则返回 `NaN`

  ```js
  Math.hypot(3, 4); // 5
  Math.hypot(3, 4, 5); // 7.0710678118654755
  Math.hypot(); // 0
  Math.hypot(NaN); // NaN
  Math.hypot(3, 4, "foo"); // NaN, +'foo' => NaN
  Math.hypot(3, 4, "5"); // 7.0710678118654755, +'5' => 5
  Math.hypot(-3); // 3, the same as Math.abs(-3)
  ```

## 示例

+ 计算两点距离

  ```js
  Math.hypot(x1 - x0, y1 - y0)
  ```
