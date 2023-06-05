# Array.of

## Array.of() 语法

+ 用于将一组值，转换为数组

+ 基本上可以用来替代 `Array()` 或 `new Array()`

  ```js
  Array.of(3, 11, 8) // [3,11,8]
  Array.of(3) // [3]
  Array.of(3).length // 1

  Array.of() // []
  Array.of(undefined) // [undefined]
  Array.of(1) // [1]
  Array.of(1, 2) // [1, 2]
  ```

## 作用

+ 是弥补数组构造函数 `Array()` 的不足。因为参数个数的不同，会导致 `Array()` 的行为有差异

  ```js
  Array() // []
  Array(3) // [, , ,]
  Array(3, 11, 8) // [3, 11, 8]
  ```
