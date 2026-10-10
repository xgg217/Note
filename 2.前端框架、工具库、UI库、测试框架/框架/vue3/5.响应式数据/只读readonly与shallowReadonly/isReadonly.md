# isReadonly

## 概述

+ 判断某个数据是否是通过 `readonly()` 或 `shallowReadonly()` 创建的

## TS类型

+ 类型

  ```js
  function isReadonly(value: unknown): boolean
  ```

## 示例

+ 示例

  ```js
  const obj2 = readonly({ a:' 张三' });
  console.log(isReadonly(obj2)); // false

  ```

  ```js
  const obj1 = reactive({ a:' 张三' });
  const obj7 = readonly(obj1);
  console.log(isReadonly(obj7)); // true
  ```
