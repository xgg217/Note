# filter 过滤

## 概述

+ 函数用于过滤序列，过滤掉不符合条件的元素，返回一个迭代器对象，如果要转换为列表，可以使用 `list()` 来转换

## 语法

+ 语法 `filter(function, iterable)`

  + function : 判断，然后返回 `True` 或 `False`
  + iterable 可迭代对象

+ 返回值：将返回 `True` 的元素放到新列表中

## 示例

+ 示例

  ```py
  def is_odd(n):
    return n % 2 == 1

  tmplist = filter(is_odd, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  newlist = list(tmplist) # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
  ```
