# Object.fromEntries

## 概述

+ 静态方法将键值对列表转换为一个对象

  ```js
  const entries = new Map([
    ["foo", "bar"],
    ["baz", 42],
  ]);

  const obj = Object.fromEntries(entries);

  console.log(obj);
  // Expected output: Object { foo: "bar", baz: 42 }
  ```

+ `Object.fromEntries()` 是 `Object.entries()` 的逆操作，只是 `Object.entries()` 只返回字符串键属性，而 `Object.fromEntries()` 还可以创建符号键属性

## 语法

+ `Object.fromEntries(iterable)`

  参数：

    + iterable:一个包含对象列表的可迭代对象，例如 `Array` 或者 `Map` 每个对象都要有两个属性

      + 0 表示属性键的字符串或者 `Symbol`

      + 1 属性值

  + 返回值:一个新对象，其属性由可迭代对象的条目给定


## 示例之 Map 转换成对象

+ 可以将 `Map` 转换成 `Object`

  ```js
  const map = new Map([
    ["foo", "bar"],
    ["baz", 42],
  ]);
  const obj = Object.fromEntries(map);
  console.log(obj); // { foo: "bar", baz: 42 }
  ```

## 示例之 将 Array 转换成对象

+ 可以将 `Array` 转换成 `Object`

  ```js
  const arr = [
    ["0", "a"],
    ["1", "b"],
    ["2", "c"],
  ];
  const obj = Object.fromEntries(arr);
  console.log(obj); // { 0: "a", 1: "b", 2: "c" }
  ```

## 示例之 对象转换

+ 通过 `Object.fromEntries` 、其逆操作 `Object.entries()` 和数组操作方法，你可以像这样转换对象：

  ```js
  const object1 = { a: 1, b: 2, c: 3 };

  const object2 = Object.fromEntries(
    Object.entries(object1).map(([key, val]) => [key, val * 2]),
  );

  console.log(object2);
  // { a: 2, b: 4, c: 6 }
  ```
