# for 循环

## 概述

+ for 循环通常用于可迭代对象的遍历

## 语法

+ 语法

  ```py
  for 变量 in 可迭代对象:
    循环体语句
  ```

+ 示例

  ```py
  for x in (20,30,4):
    print(x)

  # 20
  # 30
  # 4
  ```

## 扩展模式 for/else

+ `else` 子句在循环正常完成时执行，这意味着循环没有遇到任何 `break` 语句

  ```py
  for <循环变量> in <遍历结构>:
      <语句块1>
  else:
      <语句块2>
  ```

+ 示例

  ```py
  # 找出 2 到 10 之间因数
  for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print( n, 'equals', x, '*', n/x)
            break
    else:
        # loop fell through without finding a factor
        print(n, 'is a prime number')

  # 2 is a prime number
  # 3 is a prime number
  # 4 equals 2 * 2.0
  # 5 is a prime number
  # 6 equals 2 * 3.0
  # 7 is a prime number
  # 8 equals 2 * 4.0
  # 9 equals 3 * 3.0
  ```

## 遍历字符串

+ 遍历字符串

  ```py
  for x in 'xgg':
    print(x)

  # x
  # g
  # g
  ```

## 遍历字典

+ 遍历字典所有的 key

  ```py
  d={'name':'gaoqi','age':18,'address': '地址'}

  for x in d:
      print(x)

  # 'name'
  # 'age'
  # 'address'
  ```

+ 遍历字典所有的 `key`

  ```py
  d={'name':'gaoqi','age':18,'address': '地址'}

  for x in d.keys():
      print(x)

  # 'name'
  # 'age'
  # 'address'
  ```

+ 遍历字典所有的 `value`

  ```py
  d={'name':'gaoqi','age':18,'address': '地址'}

  for x in d.keys():
      print(x)

  # 'name'
  # 'age'
  # 'address'
  ```

+ 遍历字典所有的 `key-value`
