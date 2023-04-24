# Object.hasOwn

## 概述

+ 如果指定的对象具有指定的属性作为其自己的属性，则 `Object.hasOwn()` 静态方法返回 `true`。如果属性被继承或不存在，则该方法返回 `false`

+ 新的静态方法 —ES2022

  ```js
  let object = { foo: false }
  Object.hasOwn(object, "foo") // true

  let object2 = Object.create({ foo: true })
  Object.hasOwn(object2, "foo") // false

  let object3 = Object.create(null)
  Object.hasOwn(object3, "foo") // false
  ```
