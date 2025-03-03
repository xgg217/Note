# Object.hasOwn()

## 概述

+ 如果指定的属性是该对象的直接属性 `Object.hasOwn()` 方法返回 `true` ，即使属性值是 `null` 或 `undefined`
+ 如果属性是继承的或者不存在，该方法返回 `false`
+ 它不像 in 运算符，这个方法不检查对象的原型链中的指定属性



## 注意

+ `Object.hasOwn()` 旨在取代 `Object.prototype.hasOwnProperty()`

## 语法

+ `Object.hasOwn(obj, prop)`

  + 参数

    + obj 要测试的 JavaScript 实例对象

    + prop 要测试属性的 `String` 类型的名称或者 `Symbol`

  + 返回值

    + 如果指定的对象中直接定义了指定的属性，则返回 `true` 否则返回 `false`

## 示例

+ 使用 hasOwn 去测试属性是否存在

  ```js
  const example = {};
  Object.hasOwn(example, "prop"); // false——目标对象的属性 'prop' 未被定义

  example.prop = "exists";
  Object.hasOwn(example, "prop"); // true——目标对象的属性 'prop' 已被定义

  example.prop = null;
  Object.hasOwn(example, "prop"); // true——目标对象本身的属性存在，值为 null

  example.prop = undefined;
  Object.hasOwn(example, "prop"); // true——目标对象本身的属性存在，值为 undefined
  ``

+ 直接属性和继承属性

  ```js
  const example = {};
  example.prop = "exists";

  // `hasOwn` 静态方法只会对目标对象的直接属性返回 true：
  Object.hasOwn(example, "prop"); // 返回 true
  Object.hasOwn(example, "toString"); // 返回 false
  Object.hasOwn(example, "hasOwnProperty"); // 返回 false

  // `in` 运算符对目标对象的直接属性或继承属性均会返回 true：
  "prop" in example; // 返回 true
  "toString" in example; // 返回 true
  "hasOwnProperty" in example; // 返回 true
  ```

+ 迭代对象的属性

  ```js
  const example = { foo: true, bar: true };
  for (const name of Object.keys(example)) {
    // …
  }
  ```

  + 但是如果你使用 `for...in` ，你应该使用 `Object.hasOwn()` 跳过继承属性

    ```js
    const example = { foo: true, bar: true };
    for (const name in example) {
      if (Object.hasOwn(example, name)) {
        // …
      }
    }
    ``

+ 检查数组索引是否存在:Array 中的元素被定义为直接属性，所以你可以使用 hasOwn() 方法去检查一个指定的索引是否存在

  ```js
  onst fruits = ["Apple", "Banana", "Watermelon", "Orange"];
  Object.hasOwn(fruits, 3); // true ('Orange')
  Object.hasOwn(fruits, 4); // false——没有定义的
  ```
