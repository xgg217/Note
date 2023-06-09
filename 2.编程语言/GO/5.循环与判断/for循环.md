# for 循环

## 概述

+ for 接 0 个表达式等于 JS的 while(true)
+ for 接 1 个表达式等于 JS的 while(condition)
+ for 接 3 个表达式等于 JS的 for(初始化，判断，后续)

## for 接 0 个表达式

+ 表达式

  ```go
  k := 1
  for {
    if k > 3 {
      break
    }
    fmt.Println("可能无线循环") // 打印 3次
    k++
  }
  ```

## for 接 1 个表达式

+ 代码

  ```go
  i := 1
  for i <= 3 {
    fmt.Println(i) // 1 2 3
    i++
  }
  ```

## for 接 3 个表达式

+ 表达式

  ```go
  for j := 1; j <= 3; j++ {
    fmt.Println(j) // 1 2 3
  }
  ```
