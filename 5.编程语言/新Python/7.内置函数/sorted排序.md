# sorted

## 语法

+ 语法 `sorted(iterable, key=None, reverse=False)`

  + `iterable` -- 可迭代对象
  + `key` -- 主要是用来进行比较的元素，只有一个参数，具体的函数的参数就是取自于可迭代对象中，指定可迭代对象中的一个元素来进行排序
  + `reverse` -- 排序规则，`reverse = True` 降序 ， `reverse = False` 升序（默认）

+ 返回新列表，不对原列表修改

## 使用

+ 升序排序-默认

  ```py
  a=[9,5,4,8]
  sorted(a) # [4, 5, 8, 9]
  ```

+ 降序排序

  ```py
  a=[9,5,4,8]
  sorted(a, reverse=True) # [9, 8, 5, 4]
  ```

+ 利用 `key` 进行排序

  ```py
  array = [{"age":20,"name":"a"},{"age":25,"name":"b"},{"age":10,"name":"c"}]
  array = sorted(array,key=lambda x:x["age"])
  '''
  [{'age': 10, 'name': 'c'}, {'age': 20, 'name': 'a'}, {'age': 25, 'name': 'b'}]
  '''
  ```
