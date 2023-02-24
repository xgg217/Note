# Object.fromEntries

## 作用

+ `Object.fromEntries()` 方法是 `Object.entries()` 的逆操作，用于将一个键值对数组转为对象

  ```js
  Object.fromEntries([
    ['foo', 'bar'],
    ['baz', 42]
  ])
  // { foo: "bar", baz: 42 }
  ```

## 用途

1. 将键值对的数据结构还原为对象

2. 配合 `URLSearchParams` 对象，将查询字符串转为对象

## 将 Map 结构转为对象

+ 示例1

  ```js
  // 例一
  const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);

  Object.fromEntries(entries)
  // { foo: "bar", baz: 42 }
  ```

+ 示例2

  ```js
  // 例二
  const map = new Map().set('foo', true).set('bar', false);
  Object.fromEntries(map)
  // { foo: true, bar: false }
  ```

## 将查询字符串转为对象

+ 代码

  ```js
  Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))
  // { foo: "bar", baz: "qux" }
  ```
