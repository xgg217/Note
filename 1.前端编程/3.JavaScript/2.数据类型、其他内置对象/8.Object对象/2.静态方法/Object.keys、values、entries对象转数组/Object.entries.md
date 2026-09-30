# Object.entries

## 概述

+ `Object.entries()` 静态方法返回一个数组，包含给定对象自有的可枚举字符串键属性的键值对

  ```js
  const object1 = {
    a: "somestring",
    b: 42,
  };

  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }

  // "a: somestring"
  // "b: 42
  ```

## 语法

+ `Object.entries()` 返回一个数组，其元素是直接在 object 上找到相应的可枚举字符串键属性的键值对数组
+ 这与使用 `for...in` 循环迭代相同，只是使用 `for...in` 循环也枚举原型链中的属性
+ `Object.entries()` 返回的数组顺序和 `for...in` 循环提供的顺序相同

+ `Object.entries(obj)`

  + 参数

    + obj 一个对象

  + 返回值

    + 一个由给定对象自有的可枚举字符串键属性的键值对组成的数组
    + 每个键值对都是一个包含两个元素的数组：第一个元素是属性的键（始终是字符串），第二个元素是属性值

  ```js
  const obj = { foo: "bar", baz: 42 };
  console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
  ```

  ```js
  // 类数组对象
  const obj = { 0: "a", 1: "b", 2: "c" };
  console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
  ```

  ```js
  // 具有随机键排序的类数组对象
  const anObj = { 100: "a", 2: "b", 7: "c" };
  console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]
  ```

  ```js
  // getFoo 是一个不可枚举的属性
  const myObj = Object.create(
    {},
    {
      getFoo: {
        value() {
          return this.foo;
        },
      },
    },
  );
  myObj.foo = "bar";
  console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]
  ```

## 在基本类型中使用 Object.entries()

+ 非对象参数会强制转换成对象
+ `undefined` 和 `null` 不能被强制转换为对象，会立即抛出 `TypeError`
+ 只有字符串可以有自己的可枚举属性，所有其他基本类型均返回一个空数组

  ```js
  // 字符串具有索引作为可枚举的自有属性
  console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]
  ```

  ```js
  // 其他基本类型（除了 undefined 和 null）没有自有属性
  console.log(Object.entries(100)); // []
  ```

## 将 Object 转换成 Map

+ Map() 构造函数接受一个 entries 可迭代对象。使用 Object.entries，你可以很容易地将 Object 转换成 Map：

  ```js
  const obj = { foo: "bar", baz: 42 };
  const map = new Map(Object.entries(obj));
  console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
  ```

## 遍历对象

+ 使用数组解构语法，你可以很容易地遍历对象

  ```js
  // 使用 for...of 循环
  const obj = { a: 5, b: 7, c: 9 };
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
  }

  // 使用数组方法
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
  });
  ```
