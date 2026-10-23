# 循环else子句

## 概述

+ 循环可以带有一个`else`子句，当循环**正常结束**（没有被break中断）时执行

  ```py
  # while循环的else
  count = 0
  while count < 3:
      print(count)
      count += 1
  else:
      print("while循环正常完成")

  # 典型用法：查找元素
  num = 1
  while num <= 9:
      if num == 4:
          print("找到: 4")
          break
      num += 2  # 模拟遍历奇数1, 3, 5, 7, 9
  else:
      print("未找到: 4")  # 会执行，因为4不在奇数序列中
  ```

## 重要区别

+ 循环被`break`中断 → **不执行**else
+ 循环正常结束（包括`continue`）→ **执行**else

