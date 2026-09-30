# else 语句

## 概述

+ `while` 、 `for` 循环可以附带一个 `else` （可选）语句
+ 如果 `for` 、 `while` 语句没有 `break` 语句结束，则会执行 `else` 子句，负责不执行

## whule else 语句

+ 语法

  ```py
  while 条件表达式:
    循环体
  else:
    语句块
  ```

+ 示例

  ```py
  s="sky"
  index=0

  while index < len(s):
      print("循环进行中"+s[index])
      index += 1
  else:
      s="这句输出是是不满足while条件后输出"
  print(s)

  # 循环进行中s
  # 循环进行中k
  # 循环进行中y
  # 这句输出是是不满足while条件后输出
  ```

## for else 语句

+ 语法

  ```py
  for 变量 in 可迭代对象:
    循环体
  else:
    语句块
  ```

+ 示例

  ```py
  for x in range(5):
      print(x)
  else:
      print('辣鸡')

  # 0
  # 1
  # 2
  # 3
  # 4
  # 辣鸡
  ```
