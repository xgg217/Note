# parseFloat

## API

+ `Number.parseFloat(string)`

  + 参数

    `string` 要解析的值，会被强制转换为字符串。该参数开头的空白会被忽略

  + 返回值

    + 由给定 `string` 解析得到的浮点数
    + 如果第一个非空白字符不能被转换为数字，则返回 `NaN`

  ```js
  // 将一个字符串转为浮点数
  parseFloat('3.14') // 3.14

  // 如果字符串包含不能转为浮点数的字符，则不再进行往后转换，返回已经转好的部分
  parseFloat('3.14more non-digit characters') // 3.14

  // 会自动过滤字符串前导的空格
  parseFloat('\t\v\r12.34\n ') // 12.34
  parseFloat('          14.3') // 14.3

  // 如果参数不是字符串，或者字符串的第一个字符不能转化为浮点数，则返回 NaN
  parseFloat([]) // NaN
  parseFloat('FF2') // NaN
  parseFloat('') // NaN
  ```

## Number.parseFloat() 与 全局parseFloat

+ ES6 将全局方法 `parseInt()` 和 `parseFloat()` ，移植到 `Number` 对象上面，行为完全保持不变

  ```js
  // ES5的写法
  parseInt('12.34') // 12
  parseFloat('123.45#') // 123.45

  // ES6的写法
  Number.parseInt('12.34') // 12
  Number.parseFloat('123.45#') // 123.45
  ```

+ 这样做的目的，是逐步减少全局性方法，使得语言逐步模块化

  ```js
  Number.parseInt === parseInt // true
  Number.parseFloat === parseFloat // true
  ```

## parseFloat 与 Number

+ `parseFloat` 的转换结果不同于 `Number` 函数

  ```js
  parseFloat(true)  // NaN
  Number(true) // 1

  parseFloat(null) // NaN
  Number(null) // 0

  parseFloat('') // NaN
  Number('') // 0

  parseFloat('123.45#') // 123.45
  Number('123.45#') // NaN
  ```
