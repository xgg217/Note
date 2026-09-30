# 列表排序

## sort()

+ 只能用于 列表

+ 语法 `list.sort( key=None, reverse=False)`

  + `key` -- 主要是用来进行比较的元素，只有一个参数，具体的函数的参数就是取自于可迭代对象中，指定可迭代对象中的一个元素来进行排序
  + `reverse` -- 排序规则，`reverse = True` 降序， `reverse = False` 升序（默认）

+ 修改原列表，不创建新列表的排序

+ 升序排序-默认

  ```py
  a=[9,5,4,8]
  a.sort()

  a # [4, 5, 8, 9]
  ```

+ 降序排序

  ```py
  a=[9,5,4,8]
  a.sort(reverse=True)

  a # [9, 8, 5, 4]
  ```

+ 指定 key 排序

  ```py
  random = [(2, 2), (3, 4), (4, 1), (1, 3)]

  def takeSecond(elem):
      return elem[1]

  random.sort(key=takeSecond)  # [(4, 1), (2, 2), (1, 3), (3, 4)]
  ```
