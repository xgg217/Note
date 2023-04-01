# switch case

## 语法

+ 代码

  ```go
  switch time.Now().Weekday() {
  case time.Saturday, time.Sunday:
    fmt.Println("休息日")
  default:
    fmt.Println("工作日")
  }
  ```

## 与JS不一样的地方

1. 不用括号
2. 不加 `break`
3. 一个 case 可以有多个值，用逗号 `,` 隔开
