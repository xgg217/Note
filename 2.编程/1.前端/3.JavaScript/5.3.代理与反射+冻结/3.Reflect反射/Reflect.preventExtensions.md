# Reflect.preventExtensions()

## 概述

+ 静态方法 `Reflect.preventExtensions()` 方法阻止新属性添加到对象 (例如：防止将来对对象的扩展被添加到对象中)

+ 该方法与 `Object.preventExtensions()` 相似，但有一些不同点

## 与 Object.preventExtensions() 不同点

+ 如果该方法的 target 参数不是一个对象（是原始值），那么将造成一个 TypeError 异常
+ 对于 `Object.preventExtensions()` 方法，非对象的 target 参数将被强制转换为对象

  ```js
  Reflect.preventExtensions(1);
  // TypeError: 1 is not an object

  Object.preventExtensions(1);
  // 1
  ```

## API
