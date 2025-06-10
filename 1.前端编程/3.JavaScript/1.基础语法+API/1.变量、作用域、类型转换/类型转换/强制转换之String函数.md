# String()

## 概述

+ `String` 函数可以将任意类型的值转成字符串

## 原始类型的值

+ 数值：转为相应的字符串
+ 字符串：转成后还是原来的值
+ 布尔： `true` 转成 `"true"` , `false` 转成字符串 `"false"`
+ `undefined`：转为 `"undefined"`
+ `null`：转为 `"null"`

  ```js
  String(123) // "123"
  String('abc') // "abc"
  String(true) // "true"
  String(undefined) // "undefined"
  String(null) // "null"
  ```

## 对象

+ `String` 方法的参数如果是对象，返回一个类型字符串
+ 如果是数值，则返回该数组的字符串形式

  ```js
  String({ a: 1 }) // "[object Object]"

  String([1,2,3]) // "1,2,3"
  ```

+ 转换规则：与 `Number` 方法基本相同，只是互换了 `valueOf` 方法和 `toString` 方法的执行顺序

  1. 先调用对象自身的 `toString` 方法。如果返回原始类型的值，则对该值使用 `String` 函数，不再进行后续步骤
  2. 如果 `toString` 方法返回的是对象，再调用原对象的 `valueOf` 方法。如果 `valueOf` 方法返回原始类型的值，则对该值使用 String 函数，不再进行后续步骤
  3. 如果 `valueOf` 方法返回的是对象，就报错

    ```js
    String({ a: 1 }) // "[object Object]"

    // 等同于
    String({ a: 1 }.toString()) // "[object Object]"
    ```
