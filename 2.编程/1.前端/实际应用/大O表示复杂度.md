# 大O表示复杂度

## 概述

+ 确定问题规模及含义：数组长度 n
+ 寻找问题规模和代码运行 时间/空间 的关系

+ 代码运行时间随着 n 线性增长

  + 时间复杂度 `O(n)`

+ 代码额外内存开销是固定的

  + 空间复杂度 `O(1)`

  ![alt text](images/常见复杂度.png)

## 示例

+ O(1)

  ```
  function myAlgorithm(arr) {
    return arr[0];
  }
  ```

+ O(n)

  ```js
  function myAlgorithm(arr) {
    arr.forEach(item => {
      console.log(item)
    })
  }
  ```
