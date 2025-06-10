# Number()

## 概述

+ 使用 `Number()` 函数，可以将任意类型的值转成数值

## 参数是原始类型的值

+ 参数是 `number`

  ```js
  // 数字：转换后还是原来的值
  Number(324) // 324
  ```

+ 参数是 `string`

  ```js
  // 如果可以被解析为数值，则转换为相应的数值
  Number('123'); // number类型 123
  Number('-123'); // number类型 -123

  // 如果不可以被解析为数值，则返回 NaN
  Number('a'); // number类型 NaN

  // 空字符串转为0
  Number(''); // number类型 0

  Number('123abc'); // number类型 NaN
  ```

+ 参数是 `Boolean`

  ```js
  //  true 转成 1
  Number(true); // number类型 1

  // false 转成 0
  Number(false); // number类型 0
  ```

+ 参数是 `null`

  ```js
  var num = Number(null); // number类型 0
  ```

+ 参数是 `undefined`

  ```js
  Number(undefined); // number类型 NaN
  ```

+ 注意

  + `Number` 函数将字符串转成数值，要比 `parseInt` 函数严格很多。基本上只要有一个字符无法转成数值，整个字符串就会被转成 `NaN`

  + 如果通过 `Number` 函数传入一个字符串，它会试图将其转换成一个整数或浮点数，而且会忽略所有前导的 `0`

## 对象

+ 现象：`Number` 方法的参数是对象时，将返回 `NaN` ，除非是包含单个数值的数值

  ```js
  Number({a: 1}) // NaN
  Number([1,2,3]) // NaN
  Number([5]) // 5
  ```

## `Number` 转换规则

1. 调用对象自身的 `valueOf` 方法。如果返回原始类型的值，则直接对该值使用 `Number` 函数，不在进行后续步骤
2. 如果 `valueOf` 方法返回的还是对象，则改为调用对象自身的 toString 方法。如果 `toString` 方法返回原始类型的值，则对该值使用 `Number` 函数，不在进行后续步骤
3. 如果 `toString` 方法返回的是对象，就报错

  ```js
  const obj = { x: 1 };
  Number(obj) // NaN

  // 等同于
  if(typeof obj.valueOf() === 'object') {
    Number(obj.toString())
  } else {
    Number(obj.valueOf())
  }
  ```
