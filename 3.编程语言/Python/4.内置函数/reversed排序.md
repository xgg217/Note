# reversed

## 语法

+ 语法 `reversed(seq)`

  + seq -- 要转换的序列，可以是 `tuple`, `string`, `list` 或 `range`

+ 返回值：返回一个反转的迭代器

## reversed() 返回迭代器

+ 内置函数 `reversed()` 也支持进行逆序排列
+ 与列表对象 `reverse()` 方法不同的是，内置函数 `reversed()` 不对原列表做任何修改，只是返回一个逆序排列的迭代器对象

  ```py
  a=[9,5,4,8]

  c= reversed(a)
  c # <list_reverseiterator object at 0x00000215876EBFA0>

  list(c)
  ```
