# null

## 概述

+ 值 `null` 特指对象的值未设置

+ 它是 JavaScript 基本类型 之一，在**布尔运算**中被认为是`falsy`

## 描述

+ 值 `null` 是一个字面量，不像 `undefined`，它不是全局对象的一个属性

+ `null` 是表示缺少的标识，指示变量未指向任何对象

+ 把 `null` 作为尚未创建的对象，也许更好理解

+ 在 API 中，`null` 常在返回类型应是一个对象，但没有关联的值的地方使用

## null 与 undefined 的不同点

+ 当检测 `null` 或 `undefined` 时，注意相等（`==`）与全等（`===`）两个操作符的区别 ，前者会执行类型转换：

  ```js
  typeof null           // "object" (因为一些以前的原因而不是'null')
  typeof undefined      // "undefined"
  null === undefined    // false
  null  == undefined    // true
  null === null         // true
  null == null          // true
  !null                 //true
  isNaN(1 + null)       // false
  isNaN(1 + undefined)  // true
  ```

## typeof 检测 null

+ 对于 `null` 来说，虽然它是基本类型，但是使用 `typeof` 检测显示 `'object'`，这是一个存在很久了的 Bug

  ```js
  typeof null // 'object'
  ```

+ 为什么会出现这种情况呢？因为在 JS 的最初版本中，使用的是 32 位系统，为了性能考虑使用低位存储了变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object&#x20;

+ 虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来

## 检测 null

+ 使用 `===` 或者 `!==`

  ```js
  const ele = document.getElementById('ele');
  if(ele !== null) {
    // ....
  }
  ```
