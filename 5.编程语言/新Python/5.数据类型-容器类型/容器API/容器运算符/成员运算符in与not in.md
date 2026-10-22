# 成员运算符：in 与 not in

## 成员运算符：in 与 not in

+ 判断元素是否存在于容器中：

  ```python
  # 列表
  3 in [1, 2, 3]        # True
  5 not in [1, 2, 3]    # True

  # 元组
  2 in (1, 2, 3)        # True

  # 字符串
  "he" in "hello"       # True —— 检查子串
  "x" not in "hello"    # True

  # 字典 —— 检查的是键，不是值
  "name" in {"name": "Alice", "age": 25}   # True
  "Alice" in {"name": "Alice", "age": 25}  # False

  # 集合
  2 in {1, 2, 3}        # True
  ```
