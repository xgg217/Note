# Proxy代理

## 概述

+ Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）

## 语法

+ `const p = new Proxy(target, handler)`

+ `target`: 要使用 `Proxy` 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）

+ `handler`：一个通常以函数作为属性的 **对象**，各属性中的函数分别定义了在执行各种操作时代理 p 的行为

## 不足

+ 不幸的是，`Proxy` 的一个限制是目标必须是 `Object`

+ 这意味着我们不能直接使用像 `String` 这样的原语

## handler 对象的方法

+ `handler` 对象是一个容纳一批特定属性的占位符对象。它包含有 `Proxy` 的各个捕获器（trap）

+ 所有的捕捉器是可选的。如果没有定义某个捕捉器，那么就会保留源对象的默认行为

  - `handler.getPrototypeOf()`: Object.getPrototypeOf 方法的捕捉器

  - `handler.setPrototypeOf()`: `Object.setPrototypeOf` 方法的捕捉器

  - `handler.isExtensible()`: `Object.isExtensible` 方法的捕捉器

  - `handler.preventExtensions()`: `Object.preventExtensions` 方法的捕捉器

  - `handler.getOwnPropertyDescriptor()`: `Object.getOwnPropertyDescriptor` 方法的捕捉器

  - `handler.defineProperty()`: `Object.defineProperty` 方法的捕捉器

  - `handler.has()` : `in` 操作符的捕捉器

  - `handler.get()`: 属性读取操作的捕捉器

  - `handler.set()`: 属性设置操作的捕捉器

  - `handler.deleteProperty()`: `delete` 操作符的捕捉器

  - `handler.ownKeys()`:

    - `Object.getOwnPropertyNames`  返回非 `Symbol` 键

    - `Object.getOwnPropertySymbols` 返回 `symbol` 键

    - `Object.keys/values()` 回带有 enumerable 标记的非 `Symbol` 键值对

    - `for..in` 循环遍历所有带有 `enumerable` 标记的非 `Symbol` 键，以及原型对象的键

  - `handler.apply()`:函数调用操作的捕捉器

  - `handler.construct()`: `new` 操作符的捕捉器

## 局限

+ 内置对象:例如 `Map`, `Set`, `Date`, `Promise` 等 `Proxy` 不能拦截

  - 解决办法

        ```js
        let map = new Map();

        let proxy = new Proxy(map, {
          get(target, prop, receiver) {
            let value = Reflect.get(...arguments);
             return typeof value == 'function' ? value.bind(target) : value;
          }
        });

        proxy.set('test', 1);
        console.log(proxy.get('test')); // 1 (works!)
        ```

+ 私有类字段也是如此，因为它们是在内部使用插槽实现的。因此，代理方法的调用必须具有目标对象 `this` 才能访问它们

+ 对象相等性测试 === 不能被拦截

+ 性能：基准测试取决于引擎，但通常使用最简单的代理访问属性所需的时间要长几倍。实际上，这仅对某些“瓶颈”对象重要

## 示例

+ 示例1

    ```js
    const obj = {
      a: 1,
      b: 2
    };

    const p = new Proxy(obj, {
      set: function(target, propertyKey, value) {
        console.log(target);
        console.log(propertyKey);
        console.log(value);
        Reflect.set(target, propertyKey, value);
        return true;
      },
      get(target, propertyKey) {
        if(Reflect.has(target, propertyKey)) {
          return Reflect.get(target, propertyKey)
        }
        console.error(`属性 ${propertyKey} 不存在`);
        return undefined;
      }
    });
    console.log(p); // Proxy {a: 1, b: 2}
    p.a = 10;
    console.log(p); // Proxy {a: 10, b: 2}
    p.c = -1;
    console.log(p); // Proxy {a: 10, b: 2, c: -1}
    console.log(p.d); // undefined
    ```
