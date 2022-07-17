# 箭头函数的arguments

## 概述

*   箭头函数的 `this` 指向全局，使用 `arguments` 会报未声明的错误

    ```javascript
    let b = () => {
      console.log(arguments);
    };

    b(1, 2, 3, 4); // Uncaught ReferenceError: arguments is not defined
    ```

*   箭头函数的 `this` 指向普通函数时,它的 `argumens` 继承于该普通函数

    ```javascript
    function bar() {
      console.log(arguments); // ['外层第二个普通函数的参数']
      bb('外层第一个普通函数的参数');
      function bb() {
        console.log(arguments); // ["外层第一个普通函数的参数"]
        let a = () => {
          console.log(arguments, 'arguments继承this指向的那个普通函数'); // ["外层第一个普通函数的参数"]
        };
        a('箭头函数的参数'); // this指向bb
      }
    }

    bar('外层第二个普通函数的参数');
    ```

## rest

*   ES6 rest 参数获取函数的多余参数

    ```javascript
    let a = (first, ...abc) => {
      console.log(first, abc); // 1 [2, 3, 4]
    };

    a(1, 2, 3, 4);
    ```
