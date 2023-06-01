# 联合类型

## 联合类型含有 unknown

+ 如果联合类型中有 `unknown` ，那么最终得到的都是 `unknown` 类型

  ```js
  type U1 = unknown | null;
  type U2 = unknown | string;
  type U3 = unknown | number;

  // 类型别名 U1,U2,U3 都是 unknown 类型
  ```
