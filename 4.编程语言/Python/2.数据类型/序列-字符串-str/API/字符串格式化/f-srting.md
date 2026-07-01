# f-srting

## 概述

+ f-string 3.6版本新功能
+ `str.format()` 的方便版本

## 语法

+ 语法：与 `str.format()` 语法一样

  ```py
  name = '1'
  age = 18
  sla = 1992.21

  print(f'我是{name}，年龄{age}，薪水{sla}') # 我是1，年龄18，薪水1992.2
  print(f'我是{name:.2s}，年龄{age:010d}，薪水{sla:,.2f}')  # 我是1，年龄0000000018，薪水1,992.21
  ```

+ 支持函数调用

  ```py
  def a1():
      return 10

  print(f'函数值{a1()}')  # 函数10
  ```
