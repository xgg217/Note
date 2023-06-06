# parseInt

## 基本用法

+ `parseInt` 方法用于将字符串转为整数

  ```js
  parseInt('123') // 123
  ```

+ 如果字符串头部有空格，空格会被自动去除

  ```js
  parseInt('   81') // 81
  ```

+ 如果 `parseInt` 的参数不是字符串，则会先转为字符串再转换

  ```js
  parseInt(1.23) // 1
  // 等同于
  parseInt('1.23') // 1
  ```

+ 字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分

  ```js
  parseInt('8a') // 8
  parseInt('12**') // 12
  parseInt('12.34') // 12
  parseInt('15e2') // 15
  parseInt('15px') // 15
  ```

+ 如果字符串的第一个字符不能转化为数字（后面跟着数字的正负号除外），返回 `NaN`

  ```js
  parseInt('abc') // NaN
  parseInt('.3') // NaN
  parseInt('') // NaN
  parseInt('+') // NaN
  parseInt('+1') // 1
  ```

+ `parseInt` 的返回值只有两种可能，要么是一个 **十进制整数**，要么是 `NaN`

## 进制转换

+ `parseInt` 方法还可以接受第二个参数（2到36之间），表示被解析的值的进制，返回该值对应的十进制数

+ 默认情况下，`parseInt` 的第二个参数为10，即默认是十进制转十进制

  ```js
  parseInt('1000') // 1000
  // 等同于
  parseInt('1000', 10) // 1000
  ```

  ```js
  arseInt('1000', 2) // 8
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
