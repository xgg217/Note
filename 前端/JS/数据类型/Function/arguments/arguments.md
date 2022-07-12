# arguments

## 作用

*   `arguments` 是一个对应于传递给函数的参数的类数组对象。

## 描述

*   `arguments` 对象是所有（非箭头）函数中都可用的局部变量。

*   可以使用 `arguments` 对象在函数中引用函数的参数。

*   此对象包含传递给函数的每个参数，第一个参数在索引0处。例如，如果一个函数传递了三个参数，你可以以如下方式引用他们：

    ```javascript
    arguments[0]
    arguments[1]
    arguments[2]
    ```

*   参数也可以被设置：

    ```javascript
    arguments[1] = 'new value';
    ```

*   `arguments` 对象不是一个 `Array` 。它**类似**于 `Array`，但除了 `length` 属性和索引元素之外没有任何 `Array` 属性。

*   例如，它没有 `pop` 方法。但是它可以被转换为一个真正的 `Array`

    ```javascript
    var args = Array.prototype.slice.call(arguments);
    var args = [].slice.call(arguments);

    // ES2015
    const args = Array.from(arguments);
    const args = [...arguments];
    ```

## arguments 类数组

*   `arguments` 使用 `typeof` 返回 `'object'`

    ```javascript
    console.log(typeof arguments);  // 'object'

    // arguments 对象只能在函数内使用
    function test(a){
      console.log(a,Object.prototype.toString.call(arguments));  //  1 "[object Arguments]"
      console.log(arguments[0],arguments[1]);  // 1 undefined
      console.log(typeof arguments[0]);  // 'number'
    }

    test(1);
    ```
