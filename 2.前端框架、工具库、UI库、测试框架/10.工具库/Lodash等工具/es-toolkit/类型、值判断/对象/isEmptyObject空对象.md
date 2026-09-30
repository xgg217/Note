# isEmptyObject

## 概述

+ 检查是否为没有任何属性的纯对象 `{}`

## API

+ `isEmptyObject(value)`

+ 参数

  + value (unknown): 要检查的值

+ 返回值

  + (value is Record<PropertyKey, never>): 如果是没有属性的纯对象则返回 true，否则返回 false

  ```js
  import { isEmptyObject } from 'es-toolkit';

  // 没有属性的纯对象
  isEmptyObject({}); // true
  isEmptyObject(new Object()); // true
  isEmptyObject(Object.create(null)); // true

  // 有属性的对象
  isEmptyObject({ a: 1 }); // false
  isEmptyObject({ key: 'value' }); // false

  // 非纯对象类型
  isEmptyObject([]); // false (数组)
  isEmptyObject(null); // false
  isEmptyObject(new Map()); // false
  isEmptyObject(new Set()); // false
  ```
