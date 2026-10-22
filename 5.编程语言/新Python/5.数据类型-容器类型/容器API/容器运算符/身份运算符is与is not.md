# 身份运算符

## 身份运算符：`is` / `is not`

+ `is` 用于判断两个变量是否指向**内存中的同一个对象**，即它们的 `id()` 是否相同

  ```py
  a = [1, 2, 3]
  b = a
  c = [1, 2, 3]

  a is b        # True，b 和 a 指向同一个列表对象
  a is c        # False，c 是新创建的另一个对象，尽管内容相同
  a == c        # True，内容相等

  a is not c    # True
  ```

+ 常见使用场景：

  ```python
  # 判断是否为 None（Python 推荐写法）
  value = None
  if value is None:
      print("值为空")

  # 判断单例对象
  x = True
  x is True     # True

  # 小整数缓存（Python 优化）
  a = 100
  b = 100
  a is b        # True（-5 到 256 的整数会被缓存复用）

  x = 1000
  y = 1000
  x is y        # False（通常，取决于解释器实现）
  ```

## 重要区别

+ `==` 问的是"你们长得一样吗？"（值相等）
+ `is` 问的是"你们就是同一个人吗？"（身份相同）
+ 比较 `None` 时，**永远使用 `is`**，而不是 `==`

