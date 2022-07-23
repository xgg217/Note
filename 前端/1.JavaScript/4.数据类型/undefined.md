# undefined

## 概述

  - 全局属性 `undefined` 表示原始值 `undefined`。

  - 它是一个JavaScript的 **原始数据类型**

  - `undefined` 是全局对象的一个属性。

  - 它是全局作用域的一个变量。

  - `undefined` 的最初值就是原始数据类型 `undefined`。

  - 自ECMAscript5标准以来 `undefined` 是一个**不能被配置**（non-configurable），**不能被重写**（non-writable）的属性。

## 严格相等和undefined

  - 你可以使用 `undefined` 和严格相等或不相等操作符来决定一个变量是否拥有值。

  - 在下面的代码中，变量x是未定义的，`if` 语句的求值结果将是 `true`

    ```javascript
    var x;

    if (x === undefined) {
    // 执行这些语句
    } else {
    // 这些语句不会被执行
    }
    ```

  - 这里是必须使用严格相等操作符（ `===` ）而不是标准相等操作符（`==`），因为 `x == undefined` 会检查 `x` 是不是 `null`，但是严格相等不会检查

  - 其实 `===` 会严格判断双方的类型、值等是否相等。

  - `null` 不等同于 `undefined`。

## Typeof 操作符和undefined

  - `typeof`

    ```javascript
    var x;
    if(typeof x === 'undefined') {
      // 执行这些语句
    }
    ```

  - 使用 `typeof` 的原因是它不会在一个变量没有被声明的时候抛出一个错误

    ```javascript
    // 这里没有声明y
    if(typeof y === 'undefined') {  // 没有错误，执行结果为true
      console.log("y is " + typeof y )  // y is undefined
    }

    if(y === undefined) {  // ReferenceError: y is not defined

    }
    ```
