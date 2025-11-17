# 条件类型 = 类型层面的 if…else

## 概述

+ 语法

  ```js
  type MyType<T> = T extends SomeCondition ? TrueType : FalseType;
  ```

+ 左边的类型能赋值给右边，就走 `?` 后面的分支，否则走 `:` 后面的分支

  ```js
  type IsString<T> = T extends string ? true : false;

  type A = IsString<'hello'>; // true
  type B = IsString<123>;     // false

  // 有点像 JavaScript 里
  if (typeof x === 'string') { ... }
  ```
