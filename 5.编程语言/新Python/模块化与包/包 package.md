# 包 package

## 概述

+ 只要一个目录中包含`__init__.py`模块，Python就会将该目录其视为一个包

  + 首次使用包中的模块时，`__init__.py` 模块会被执行一次

## `__init__.py` 的作用

+ `__init__.py` 是包的初始化文件，它在第一次导入该包的时候会自动运行，你可以：

  1. **组织导出接口** —— 在包级别暴露子模块的成员
  2. **包级别的初始化** —— 连接数据库、加载配置等

  ```python
  # utils/__init__.py

  __all__: list[str] = ["add", "subtract", "to_upper", "reverse"]

  from .math_ops import add, subtract
  from .string_ops import to_upper, reverse
  ```

## 注意

+ 模块中的包名字会产生变化
+ 新名字：`包名.模块名`

## 导入包

1. `import 包名.模块名`
2. `from 包名.模块名 import *`
