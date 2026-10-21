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

## 示例

+ 示例1: BMI

  ```text
  编写一个 BMI 计算器程序，要求如下：

  1. **用户输入**：通过 `input()` 函数获取用户的身高（单位：米）和体重（单位：千克）。

  2. **计算 BMI**：使用公式 `BMI = 体重(kg) / 身高(m)²` 计算 BMI 值。

  3. **判断分类**：根据 BMI 值判断身体状况（参考中国成人标准）：
     - BMI < 18.5：偏瘦
     - 18.5 ≤ BMI < 24：正常
     - 24 ≤ BMI < 28：超重
     - BMI ≥ 28：肥胖

  4. **输出结果**：使用 f-string 格式化输出用户的 BMI 值和分类结果。

  5. **健康建议**：根据分类结果给出相应的健康建议，例如：
     - 偏瘦：建议适当增加营养摄入，进行适量运动
     - 正常：保持良好的生活习惯
     - 超重/肥胖：建议控制饮食，增加运动量

  示例输出
  请输入您的身高（米）：1.75
  请输入您的体重（千克）：70
  您的 BMI 值为：22.86
  身体状况：正常
  建议：保持良好的生活习惯，继续保持！
  ```

  ```py
  h_str = input("请输入您的身高（米）")
  z_str = input("请输入您的体重（千克）")

  h = float(h_str)
  z = float(z_str)

  # BMI = 体重(kg) / 身高(m)²
  val = int(z / (h * h))

  print(f"您的 BMI 值为：{val}")

  bmi = ''

  if val >= 28:
      bmi = "肥胖"
  elif val >= 24:
      bmi = "超重"
  elif val >= 18.5:
      bmi = "正常"
  else:
      bmi = "偏瘦"

  print(f"身体状况：{bmi}")
  print("建议：保持良好的生活习惯，继续保持")
  ```

+ 示例2：素数筛选器

  ```py
  """
  **素数（质数）** 是指在大于 1 的自然数中，除了 1 和它本身以外不再有其他因数的数。例如：2、3、5、7、11 都是素数，而 4、6、8、9 则不是。

  编写一个程序，要求如下：

  1. **用户输入**：通过 `input()` 函数获取起始数字和结束数字。

  2. **输入合法性检查**：
    - 输入必须是正整数（大于 0 的整数）
    - 结束数字必须大于起始数字
    - 如果输入不合法，给出相应提示并要求重新输入

  3. **素数判断**：使用循环判断该范围内每个数字是否为素数。

  4. **输出结果**：打印该范围内的所有素数，并统计素数的个数。

  **示例输出**：
  ```
  请输入起始数字：10
  请输入结束数字：50
  10 到 50 之间的素数有：
  11 13 17 19 23 29 31 37 41 43 47
  共计 11 个素数
  ```
  """
  ```

  ```py
  s_str = input("请输入起始数字：")
  e_str = input("请输入起始结束：")

  s = int(s_str)
  e = int(e_str)

  sum_str = ""
  count = 0


  def isPrime(n: int):
      if n < 2:
          return False
      if n == 2:
          return True
      if (n % 2) == 0:
          return False
      i = 3
      while (i * i) <= n:
          if (n % i) == 0:
              return False
          i += 2

      return True
      # for (let i = 3; i * i <= n; i += 2) {
      # if (n % i === 0)
      #     return false;
      # }
      # return true;


  while s <= e:
      is_bool = isPrime(s)
      if is_bool == True:
          sum_str = sum_str + ' ' + str(s)
          count += 1
      s += 1

  print(f"{s_str} 到 {e_str} 之间的素数有：{sum_str},共计 {count} 个素数")
  ```
