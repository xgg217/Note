# isNaN

## Number.isNaN()

  - 用来检查一个值是否为 `NaN` 。

    ```javascript
    // ES5
    isNaN(NaN) // true
    isNaN("NaN") // true
    ```

  - 如果参数类型不是 `NaN`， `Number.isNaN` 一律返回 `false`。

    ```javascript
    Number.isNaN(NaN) // true
    Number.isNaN("NaN") // false
    Number.isNaN(15) // false
    Number.isNaN('15') // false
    Number.isNaN(true) // false
    Number.isNaN(9/NaN) // true
    Number.isNaN('true' / 0) // true
    Number.isNaN('true' / 'true') // true
    ```
