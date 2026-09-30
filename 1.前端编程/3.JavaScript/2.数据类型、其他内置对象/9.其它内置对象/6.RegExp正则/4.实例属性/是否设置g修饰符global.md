# RegExp.prototype.global

## 概述

+ 返回一个布尔值，表示是否设置了 `g` 修饰符

  ```js
  var regex = new RegExp("foo", "g")

  console.log(regex.global) // true
  ```

+ **只读属性**，无法直接更改此属性
