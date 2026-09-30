# Number.parseInt

## API

+ 语法

  ```js
  Number.parseInt(string)
  Number.parseInt(string, radix)
  ```

  + 参数

    + string 要被解析的值，会被强制转化为字符串。字符串开头的空白符将会被忽略
    + radix（可选）

      + 2 到 36 之间的整数，表示 `string` 的基数（数学记数系统中的基）
      + 如果 `radix` 为 `undefined` 或 `0` ，则 radix 将被默认设置为 10，除非该数字以码元对 `0x` 或 `0X` 开头，在这种情况下，radix 将被默认设置为 16

  + 返回值

    + 从给定的 string 中解析出的一个整数
    + 如果 radix 小于 2 或大于 36，或第一个非空白字符不能转换为数字，则返回 `NaN`

  ```js
  // 用于将字符串转为整数
  parseInt('123') // 123

  // 如果字符串头部有空格，空格会被自动去除
  parseInt('   81') // 81

  // 如果 parseInt 的参数不是字符串，则会先转为字符串再转换
  parseInt(1.23) // 1
  // 等同于
  parseInt('1.23') // 1

  //  字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分
  parseInt('8a') // 8
  parseInt('12**') // 12
  parseInt('12.34') // 12
  parseInt('15e2') // 15
  parseInt('15px') // 15

  // 如果字符串的第一个字符不能转化为数字（后面跟着数字的正负号除外），返回 NaN
  parseInt('abc') // NaN
  parseInt('.3') // NaN
  parseInt('') // NaN
  parseInt('+') // NaN
  parseInt('+1') // 1
  ```

## 进制转换

+ `parseInt` 方法还可以接受第二个参数（2到36之间），表示被解析的值的进制，返回该值对应的十进制数

+ 默认情况下，`parseInt` 的第二个参数为10，即默认是十进制转十进制

  ```js
  parseInt('1000') // 1000
  // 等同于
  parseInt('1000', 10) // 1000
  ```

  ```js
  parseInt('1000', 2) // 8
  parseInt('1000', 6) // 216
  parseInt('1000', 8) // 512
  ```

+ 如果第二个参数不是数值，会被自动转为一个整数

+ 这个整数只有在2到36之间，才能得到有意义的结果，超出这个范围，则返回 `NaN`。如果第二个参数是 `0`、`undefined` 和 `null`，则直接忽略

  ```js
  parseInt('10', 37) // NaN
  parseInt('10', 1) // NaN
  parseInt('10', 0) // 10
  parseInt('10', null) // 10
  parseInt('10', undefined) // 10
  ```

+ 如果字符串包含对于指定进制无意义的字符，则从最高位开始，只返回可以转换的数值

+ 如果最高位无法转换，则直接返回 `NaN`

  ```js
  parseInt('1546', 2) // 1
  parseInt('546', 2) // NaN
  ```

## Number.parseInt()

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
