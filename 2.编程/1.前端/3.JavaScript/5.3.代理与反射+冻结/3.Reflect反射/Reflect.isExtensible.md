# Reflect.isExtensible()

## 概述

+ 静态方法 `Reflect.isExtensible()` 判断一个对象是否可扩展（即是否能够添加新的属性）
+ 与它 `Object.isExtensible()` 方法相似，但有一些不同，详情可见 与 `Object.isExtensible()` 的不同点

## 与 Object.isExtensible() 的不同点

+ 如果该方法的第一个参数不是一个对象（原始值），那么将造成一个 TypeError 异常
+ 对于 `Object.isExtensible()` ，非对象的第一个参数会被强制转换为一个对象

  ```js
  Reflect.isExtensible(1);
  // TypeError: 1 is not an object

  Object.isExtensible(1);
  // false
  ```

## API


