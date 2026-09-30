# abs

## Math.abs

+ `Math.abs(x)` 获取一个数字的绝对值

  + 参数
  + 返回值 `x` 的绝对值

    + 如果 `x` 是负数（包括 -0），则返回 `-x`
    + 否则，返回 x

  ```js
  Math.abs(-Infinity); // Infinity
  Math.abs(-1); // 1
  Math.abs(-0); // 0
  Math.abs(0); // 0
  Math.abs(1); // 1
  Math.abs(Infinity); // Infinity
  ```

## 强制转换参数

+ `Math.abs()` 将其参数强制转换为数字
+ 无法强制转换的值将变成 `NaN` ，使 `Math.abs()` 也返回 `NaN`

  ```js
  Math.abs("-1"); // 1
  Math.abs(-2); // 2
  Math.abs(null); // 0
  Math.abs(""); // 0
  Math.abs([]); // 0
  Math.abs([2]); // 2
  Math.abs([1, 2]); // NaN
  Math.abs({}); // NaN
  Math.abs("string"); // NaN
  Math.abs(); // NaN
  ```
