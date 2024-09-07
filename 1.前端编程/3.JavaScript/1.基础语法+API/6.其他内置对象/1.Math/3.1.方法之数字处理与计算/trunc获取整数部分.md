# trunc

## API

+ `Math.trunc(value)`

  + 参数

    + value 任意数字

      + 传入该方法的参数会被*隐式*转换成数字类型

  + 返回值 给定数字的整数部分

+ 不像 Math 的其他三个方法： `Math.floor()` 、 `Math.ceil()` 、 `Math.round()` ， `Math.trunc()` 的执行逻辑很简单，仅仅是删除掉数字的小数部分和小数点，不管参数是正数还是负数

  ```js
  Math.trunc(4.1) // 4
  Math.trunc(4.9) // 4
  Math.trunc(-4.1) // -4
  Math.trunc(-4.9) // -4
  Math.trunc(-0.1234) // -0
  ```

## 细节

+ 对于非数值，`Math.trunc` 内部使用 `Number` 方法将其先转为数值

  ```js
  Math.trunc('123.456') // 123
  Math.trunc(true) //1
  Math.trunc(false) // 0
  Math.trunc(null) // 0
  ```

+ 对于空值和无法截取整数的值，返回 `NaN`

  ```js
  Math.trunc(NaN);      // NaN
  Math.trunc('foo');    // NaN
  Math.trunc();         // NaN
  Math.trunc(undefined) // NaN
  ```

## | 运算

+ `|`

  ```js
  console.log(3.75 | 1); // 3
  console.log(-3.75 | 1); // -3
  ```
