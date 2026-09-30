# with

## 概述

+ `.with()` 方法的使用形式：`.with(index, value)`，它是 `arr[index] = value` 的非破坏性版本

  ```js
  const arr = ['a', 'b', 'c'];
  const result = arr.with(1, 'X');
  console.log(result);  // ['a', 'X', 'c']
  console.log(arr);     // ['a', 'b', 'c']
  ```
