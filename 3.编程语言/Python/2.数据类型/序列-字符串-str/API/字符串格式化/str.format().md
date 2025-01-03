# str.format()

## 语法

+ 语法 `{[index][:[[fill]align][sign][#][m][,][.n][type]]}`

  + `index` 参数的序号 或 键
  + `fill` 填充的字符
  + `align` 对齐方式

    + `<` 左对齐 默认
    + `>` 右对齐
    + `^` 居中对齐
    + `=` 右对齐符号再最左侧，需要配合占位宽度使用

  + `sign` 符合选项

    + `+` 正数正号，负数负号
    + `-` 正好不变 负数负号 默认
    + `''` 空格，正数加空格，负数负号

  + `#` 16进制前面加 `0x` ，8进制前面加 `0o`， 二进制数前面加 `0b`
  + `,` 千分位
  + `m` 占位宽度
  + `.n` 小数位数
  + `type` 格式化字符类型

    + s 字符串
    + d 10进制
    + b 2进制
    + x 16进制
    + o 8进制
    + f 浮点数

|数字|格式|输出|描述|
|:-|:-|:-|:-|
| 3.1415926  | {:.2f}  | 3.14      | 保留小数点后两位              |
| 3.1415926  | {:+.2f} | +3.14     |  带符号保留小数点后两位       |
| -1         | {:+.2f} | -1.00     |  带符号保留小数点后两位       |
| 2.71828    | {:.0f}  | 3         |  不带小数                     |
| 5          | {:0>2d} | 05        |  数字补零 (填充左边, 宽度为2) |
| 5          | {:x<4d} | 5xxx      |   数字补x (填充右边, 宽度为4) |
| 10         | {:x<4d} | 10xx      |  数字补x (填充右边, 宽度为4)  |
| 1000000    | {:,}    | 1,000,000 |   以逗号分隔的数字格式        |
| 0.25       | {:.2%}  | 25.00%    |  百分比格式                   |
| 1000000000 | {:.2e}  | 1.00e+09  |  指数记法                     |
| 13         | {:>10d} | 空格*8 13 |  右对齐 (默认, 宽度为10)      |
| 13         | {:<10d} | 13        |  左对齐 (宽度为10)            |
| 13         | {:^10d} | 13        |  中间对齐 (宽度为10)          |

## 示例

+ `index` 参数：索引、键

  ```py
  # 索引
  a = "名字是:{}，年龄是:{}"
  a1 = "名字是:{0}，年龄是:{1}"
  a2 = "名字是:{1}，年龄是:{0}"

  a.format('小刚刚', 18)  # '名字是:小刚刚，年龄是:18'
  a1.format('小刚刚', 18)  # '名字是:小刚刚，年龄是:18'
  a2.format('小刚刚', 18)  # '名字是:18，年龄是:小刚刚'
  ```

  ```py
  # 键
  a = "名字是:{name}，年龄是:{age}"

  a.format(age=18,name='小刚刚')  # '名字是:小刚刚，年龄是:18'
  ```
