# lambda 表达式

## 概述

+ lambda 表达式可以用来声明匿名函数
+ lambda 函数是一种简单的、在同一行中定义函数的方法
+ lambda 函数实际生成一个函数对象
+ lambda 表达式只允许包含一个表达式，不能包含复杂语句
+ 该表达式的计算结果就是函数的返回值

## 语法

+ `lambda arg1,arg2... : <表达式>`

  + arg1,arg2 为函数参数
  + <表达式> 相当于函数体
  + 返回值：表达式的运算结果

  ```py
  f = lambda a, b, c: a + b + c

  print(f)  # <function <lambda> at 0x000001DA7D55D3A0>

  print(f(1, 2, 3))  # 6
  ```

