# type

## 概述

+ 传入的数据是由那个类创建出来的

  ```py
  print(type(42))
  # <class 'int'>

  print(type(int))
  # <class 'int'>
  ```

## 返回值

+ 返回值是 类型对象

  ```py
  print(type(42) === int)
  # True
  ```

## 使用

+ 示例

  ```py
  type(3)
  # <class 'int'>
  ```

  ```py
  type(3.6)
  # <class 'float'>
  ```

  ```py
  type(True)
  # <class 'bool'>
  ```

  ```py
  type(None)
  # <class 'NoneType'>
  ```

  ```py
  type("1")
  # <class 'str'>
  ```
