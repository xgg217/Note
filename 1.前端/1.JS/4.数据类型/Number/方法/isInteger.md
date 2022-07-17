# isInteger

## Number.isInteger()

  - 用来判断一个数值是否为整数。

    ```javascript
    Number.isInteger(25) // true
    Number.isInteger(25.1) // false
    ```

  - JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。

    ```javascript
    Number.isInteger(25) // true
    Number.isInteger(25.0) // true
    ```

  - 如果参数不是数值，`Number.isInteger` 返回 `false` 。

    ```javascript
    // 参数不是数值
    Number.isInteger() // false
    Number.isInteger(null) // false
    Number.isInteger('15') // false
    Number.isInteger(true) // false
    ```
