# trunc

## Math.trunc()

  - 用于去除一个数的小数部分，返回整数部分

    ```js
    Math.trunc(4.1) // 4
    Math.trunc(4.9) // 4
    Math.trunc(-4.1) // -4
    Math.trunc(-4.9) // -4
    Math.trunc(-0.1234) // -0
    ```

  - 对于非数值，`Math.trunc` 内部使用 `Number` 方法将其先转为数值

    ```js
    Math.trunc('123.456') // 123
    Math.trunc(true) //1
    Math.trunc(false) // 0
    Math.trunc(null) // 0
    ```

  - 对于空值和无法截取整数的值，返回 `NaN`

    ```js
    Math.trunc(NaN);      // NaN
    Math.trunc('foo');    // NaN
    Math.trunc();         // NaN
    Math.trunc(undefined) // NaN
    ```

## | 运算

  - `|`

    ```js
    console.log(3.75 | 1); // 3
    console.log(-3.75 | 1); // -3
    ```
