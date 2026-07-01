# split() 分割

## 语法

+ 可以基于指定分隔符将字符串分割成多个子字符串（存储到列表中）
+ 如果不指定分隔符，则默认使用空白字符(换行符、空格、制表符)
+ 与 `join()` 作用相反

  ```py
  a = "to be or not to be"

  a.split() # ['to', 'be', 'or', 'not', 'to', 'be']

  a.split("be") # ['to ', ' or not to ', '']
  ```
