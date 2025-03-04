# Object.getOwnPropertySymbols

## 概述

+ `Object.getOwnPropertySymbols()` 静态方法返回一个包含给定对象所有自有 Symbol 属性的数组

  ```js
  const obj = {};
  const a = Symbol("a");
  const b = Symbol.for("b");

  obj[a] = "localSymbol";
  obj[b] = "globalSymbol";

  const objectSymbols = Object.getOwnPropertySymbols(obj);

  console.log(objectSymbols.length); // 2
  console.log(objectSymbols); // [Symbol(a), Symbol(b)]
  console.log(objectSymbols[0]); // Symbol(a)

  ```

## 语法

+ `Object.getOwnPropertySymbols(obj)`

  + 参数

    + obj 要返回 Symbol 属性的对象

  + 返回值

    + 在给定对象找到的所有自有 Symbol 属性的数组

## 注意点

+ 与 `Object.getOwnPropertyNames()` 类似，你可以将给定对象的所有符号属性作为 Symbol 数组获取
+ 请注意 `Object.getOwnPropertyNames()` 本身不包含对象的 Symbol 属性，只包含字符串属性

+ 因为所有的对象在初始化的时候不会包含任何自有的 Symbol 属性，除非你在对象上分配了 Symbol 属性，否则 `Object.getOwnPropertySymbols()` 只会返回一个空的数组
