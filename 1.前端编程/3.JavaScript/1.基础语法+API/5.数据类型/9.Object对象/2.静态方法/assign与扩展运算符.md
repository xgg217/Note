# 扩展运算符

## 介绍

+ 对象的扩展运算符（`...`）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中

  ```js
  let z = { a: 3, b: 4 };
  let n = { ...z };
  n // { a: 3, b: 4 }
  ```

## 与 Object.assign()

+ 对象的扩展运算符等同于使用 `Object.assign()` 方法

  ```js
  let aClone = { ...a };
  // 等同于
  let aClone = Object.assign({}, a);
  ```
