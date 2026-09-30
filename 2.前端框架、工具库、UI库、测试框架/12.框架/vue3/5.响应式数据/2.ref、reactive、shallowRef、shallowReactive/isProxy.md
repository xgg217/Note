# isProxy

## 概述

+ 检查一个对象是否是由 `reactive()`、`readonly()`、`shallowReactive()` 或 `shallowReadonly()` 创建的代理

## TS类型

+ 类型

  ```js
  function isProxy(value: unknown): boolean
  ```

## 示例

+ 示例

  ```js
  const count = ref(0);
  console.log(isProxy(count)); // false
  ```

  ```js
  const obj1 = reactive({ a:' 张三' });
  console.log(isProxy(obj1)); // true
  ```

  ```js
  const obj2 = readonly({ a:' 张三' });
  console.log(isProxy(obj2)); // true
  ```

  ```js
  const obj3 = { a:' 张三' };
  console.log(isProxy(obj3)); // false
  ```

  ```js
  const obj4 = new Proxy({
    name: 1,
  }, {});
  console.log(isProxy(obj4)); // false
  ```
