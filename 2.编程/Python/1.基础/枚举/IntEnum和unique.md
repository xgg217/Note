# IntEnum 和 @unique

## IntEnum

+ 枚举必须为整数类型

  ```py
  from enum import IntEnum


  # 定义 值必须为 整数
  class COLOR(IntEnum):
      RED = 1
      RED1 = '12' # 报错
      BLUE = 4
  ```

## @unique

+ 设置值也不能重复

  ```py
  from enum import Enum,unique


  # 定义
  @unique # 设置 value 不能重复
  class COLOR(Enum):
      RED = 1
      RED1 = 1  # 重复报错
      BLUE = 4
  ```

