# isNaN

## Number.isNaN()

+ 用来检查一个值是否为 `NaN`

  ```js
  // ES5
  isNaN(NaN) // true
  isNaN("NaN") // true
  ```

+ 如果参数类型不是 `NaN`， `Number.isNaN` 一律返回 `false`

  ```js
  Number.isNaN(NaN) // true
  Number.isNaN("NaN") // false
  Number.isNaN(15) // false
  Number.isNaN('15') // false
  Number.isNaN(true) // false
  Number.isNaN(9/NaN) // true
  Number.isNaN('true' / 0) // true
  Number.isNaN('true' / 'true') // true
  ```
