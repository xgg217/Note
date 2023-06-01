# Extract

## Extract<T, U>

+ 提取 T 中可以赋值给 U 的类型

## 源码

+ 源码

  ```js
  type Extract<T, U> = T extends U ? T : never;
  ```

## 运行逻辑

+ 代码

  ```js
  type AExtractB = Extract<1 | 2 | 3, 1 | 2 | 4>; // 1 | 2

  type _AExtractB =
    | (1 extends 1 | 2 | 4 ? 1 : never) // 1
    | (2 extends 1 | 2 | 4 ? 2 : never) // 2
    | (3 extends 1 | 2 | 4 ? 3 : never); // never
  ```
