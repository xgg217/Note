# isPlainObject

## 概述

+ 检查给定值是否是一个普通对象

+ 普通对象是基本的 JavaScript 对象，例如 {} 或 { name: 'John', age: 30 }
+ 它不是从类派生的，并且其原型要么是 `Object.prototype` 要么是 `null`
+ 当你使用 toString 方法将其转换为字符串时，它将显示为 `[object Object]`

## API

+ `function isPlainObject(value: unknown): value is Record<PropertyKey, any>;`

+ 参数

  + value (unknown): 要检查的值

+ 返回值

  + (value is Record<PropertyKey, any>): 如果该值是普通对象，则返回 true，否则返回 false

  ```js
  isPlainObject({}); // true
  isPlainObject([]); // false
  isPlainObject(Object.create(null)); // true

  class Foo {}
  isPlainObject(new Foo()); // false
  isPlainObject(new Date()); // false
  isPlainObject(new Set()); // false
  isPlainObject(new Map()); // false
  isPlainObject(Buffer.from('hello, world')); // false
  isPlainObject(Math); // false
  isPlainObject(JSON); // false
  isPlainObject(null); // false
  isPlainObject(1); // false
  ```
