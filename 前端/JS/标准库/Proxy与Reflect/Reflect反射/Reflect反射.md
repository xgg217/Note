# Reflect反射

## 概述

*   Reflect 是一个内置的 JS 对象，它提供了一些列方法，可以让开发者通过调用这些方法，访问一些 JS 底层功能

*   由于它类似与其他语言的 **反射** ，因此取名 `Reflect`

## 功能

*   使用 `Reflect` 可以实现诸如 属性的赋值与取值、调用普通函数、调用构造函数、判断属性是否存在对象中 等等功能

## Reflect 本质功能

*   这些功能不是已经存在吗？为什么还需要用 `Reflect` 实现一次？

*   在 ES5 就被提出来：减少魔法、让代码更加纯粹。

## API

*   `Reflect.set(target, propertyKey, value[, receiver])` : 将值分配给属性的函数。返回一个 `Boolean` ，如果更新成功，则返回 `true`

*   `Reflect.get(target, propertyKey[, receiver])` : 获取对象身上某个属性的值，类似于 `target[name]`

*   `Reflect.apply(target, thisArgument, argumentsList)` : 对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和 `Function.prototype.apply()` 功能类似
