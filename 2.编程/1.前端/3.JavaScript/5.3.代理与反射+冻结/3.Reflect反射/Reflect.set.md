# Reflect.set

## 概述

+ 功能 `Reflect.set` 方法允许你在对象上设置属性
+ [MDN Reflect.set()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set)
+ 语法



## API

+ `Reflect.set(target, propertyKey, value)`
+ `Reflect.set(target, propertyKey, value, receiver)`

  + 参数

    + target 设置属性的目标对象
    + propertyKey 设置的属性的名称
    + value 设置的值
    + receiver 如果遇到 setter，receiver则为setter调用时的this值

  + 返回值

    + 返回一个 Boolean 值表明是否成功设置属性
    + 如果更新成功，则返回 `true`

+ 参考

  ```js
  // Object
  obj.a = 10
  // 等价于
  Reflect.set(obj, 'a', 10); // true
  ```

  ```js
  // Array
  var arr = ["duck", "duck", "duck"];
  Reflect.set(arr, 2, "goose"); // true
  arr[2]; // "goose"
  console.log(arr); //  ['duck', 'duck', 'goose']

  Reflect.set(arr, "length", 1); // true
  arr; // ["duck"];
  ```
