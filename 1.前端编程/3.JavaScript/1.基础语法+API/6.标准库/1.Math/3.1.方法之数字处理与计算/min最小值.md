# min

## Math.min()

+ `Math.min()`
+ `Math.min(value0)`
+ `Math.min(value0, value1)`
+ `Math.min(value0, value1, /* … ,*/ valueN)`

  + 参数

    + value1, value2, … , valueN : 0 个或多个数字，将在其中选择，并返回最小的值

  + 返回值 给定数值中最小的数

    + 如果给定的参数中**至少**有一个参数**无法**被转换成数字，则会返回 `NaN`
    + 如果没有提供参数，返回 `-Infinity`

## 示例

+ 例找出 x 和 y 的最小值，并把它赋值给 z

  ```js
  const x = 10;
  const y = -20;
  const z = Math.min(x, y); // -20
  ```

+ 使用` Math.min()` 裁剪值

  + Math.min() 经常用于裁剪一个值，以便使其总是小于或等于某个边界值。例如：

  ```js
  let x = f(foo);

  if (x > boundary) {
    x = boundary;
  }
  ```

  ```js
  const x = Math.min(f(foo), boundary);
  ```


