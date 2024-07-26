# big.js 推荐

## 概述

+ bignumber.js 库 的简单版本 但仅适用于十进制数 仅缩小了 6 KB

  ```shell
  npm install big.js
  ```

  ```js
  import Big from 'big.js';
  ```

+ 使用 运算符操作函数 计算后的结果是个 big 对象,所以需要转换成number类型,可以使用 `.toNumber()` 或者 `Number()` 转为number类型, 由于计算结果是 big 对象,可以使用链式调用进行复杂计算

## 常量定义

+ DP，小数点后位数，默认值是20
+ RM，四舍五入方式，默认为1，代表向最近的整数取整。如果是0.5，那么向下取整
+ NE：在转换为字符串时展示为科学计数法的最小小数位数。默认值是-7，即小数点后第7为才开始不是0
+ PE：在转换为字符串时展示位科学计数法的最小整数位数。默认值是21，即数字长度超过21位
+ strict：默认值为false。设置为true时，构造函数只接受字符串和大数

## 创建数值

+ 创建数值

  ```js
  const number = new Big(.1)
  // 或者
  const number = Big(.1)

  const x = new Big(123.456); // 通过数字创建 Big.js 对象
  const y = new Big('123.456'); // 通过字符串创建 Big.js 对象
  const z = new Big(x); // 通过另一个 Big.js 对象创建 Big.js 对象
  ```

## 加减法运算

+ 加减法运算

  ```js
  const number1 = new Big(.3)
  // 加法
  const number2 = number1.plus(.1) // 0.4

  // 减法
  const number3 = number1.minus(.1) // 0.2
  ```

## push 加法

+ `.plus(n) ⇒ Big`

  + 参数

    + n 数字|字符串|大

  ```js
  0.1 + 0.2                  // 0.30000000000000004
  x = new Big(0.1)
  y = x.plus(0.2)            // '0.3'
  Big(0.7).plus(x).plus(y)   // '1.1'
  ```

## minus 减法

+ `.minus(n) ⇒ Big`

  + 参数

    + n 数字|字符串|大

  ```js
  0.3 - 0.1                  // 0.19999999999999998
  x = new Big(0.3)
  x.minus(0.1)               // '0.2'
  ```


## 乘除法运算

+ 乘除法运算

  ```js
  // 乘法
  const number1 = new Big(.3)
  number1.times(3) // 0.9

  // 除法
  const number2 = new Big(.8)
  number2.div(4) // 0.2
  ```

## mod 取余

+ `.mod(n) ⇒ Big`

  + 参数

    + n 数字|字符串|大

  ```js
  1 % 0.9                    // 0.09999999999999998
  x = new Big(1)
  x.mod(0.9)                 // '0.1'
  ```

## pow 次方


  ```js
  let num23 = new Big(0.2);
  let num24 = new Big(3);
  console.log(Math.pow(0.2, 2)); // 0.04000000000000001
  console.log(num23.pow(2).toNumber()); // 0.04
  console.log(num24.pow(-2).toNumber()); // 0.1111111111111111
  ```

## .abs() 绝对值

+ `.abs() ⇒ Big`
+ 返回一个大数字，其值是绝对值，即 量级，这个大数字

  ```js
  x = new Big(-0.8)
  x.abs() // '0.8'
  ```

## prec

+ `.prec(sd, rm)⇒ Big` 按精度舍入，参数表示整体位数

  ````js
  down = 0
  half_up = 1
  x = new Big('9876.54321')
  x.prec(2)                 // '9900'
  x.prec(7)                 // '9876.543'
  x.prec(20)                // '9876.54321'
  x.prec(1, down)           // '9000'
  x.prec(1, half_up)        // '10000'
  x                         // '9876.54321'
  ```

## round 按精度舍入

+ `.round(dp, rm) ⇒ Big`

  ```js
  x = 123.45
  Math.round(x)                  // 123

  y = new Big(x)
  y.round()                      // '123'
  y.round(2)                     // '123.45'
  y.round(10)                    // '123.45'
  y.round(1, Big.roundDown)      // '123.4'
  y.round(1, Big.roundHalfUp)    // '123.5'
  y.round(1, Big.roundHalfEven)  // '123.4'
  y.round(1, Big.roundUp)        // '123.5'
  y.round(-1, Big.roundDown)     // '120'
  y.round(-2, Big.roundUp)       // '200'
  y                              // '123.45'
  ```

## toFied 补全位数

+ `.toFixed(dp, rm) ⇒ string`

  ```js
  x = 45.6
  y = new Big(x)
  x.toFixed()                // '46'
  y.toFixed()                // '45.6'
  y.toFixed(0)               // '46'
  x.toFixed(3)               // '45.600'
  y.toFixed(3)               // '45.600'
  ```

## toNumber

+ `.toNumber() ⇒ number`

## toString

+ `toString() ⇒ string`

## 比较操作

+ Big.js 允许你对大数字进行比较操作，如相等、大于、小于等

  ```js
  const a = new Big(0.1);
  const b = new Big(0.2);

  const isEqual = a.eq(b); // 判断是否相等 false
  const isGreater = a.gt(b); // 判断是否大于 false
  const isLess = a.lt(b); // 判断是否小于 true
  ```







