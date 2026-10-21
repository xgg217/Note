# input输入

## 概述

+ 获取用户输入之前，`input()` 函数可以包含一些提示性的文字

  ```python
  # 接收用户输入，返回字符串类型
  name = input("请输入你的名字: ")
  print("你好,", name)

  # input返回的是字符串
  age_str = input("请输入年龄: ")
  age = int(age_str)  # 需要转换为整数
  print("明年你", age + 1, "岁")
  ```
