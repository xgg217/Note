# NonNullable

## NonNullable<T>

+ 从 T 中剔出 `null` 和 `undefined`

## 源码

+ 源码

 ```ts
  type NonNullable<T> = T extends null | undefined ? never : T;
  ```
