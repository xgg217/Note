# reduce 归约 / 叠加

## 语法

+ 语法 `reduce(fun, 迭代器[, 初始值])`

  ```py
  arr1 = [-1, 1, 4, 9, 16]

  reduce(lambda x, y: x + y, arr1)  # 29
  ```

