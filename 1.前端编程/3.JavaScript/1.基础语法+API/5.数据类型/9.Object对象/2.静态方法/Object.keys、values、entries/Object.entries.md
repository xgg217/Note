# Object.entries

## 概述

+ Object.entries() 静态方法返回一个数组，包含给定对象自有的可枚举字符串键属性的键值对

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



