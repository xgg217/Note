# String.fromCharCode()

## 概述

+ `String.fromCharCode()` 静态方法返回由指定的 UTF-16 码元序列创建的字符串

## API

+ 语法

  ```js
  String.fromCharCode(num1)
  String.fromCharCode(num1, num2)
  String.fromCharCode(num1, num2, /* …, */ numN)
  ```

  + 参数

    + numN

      + 一个介于 0 和 65535（0xFFFF）之间的数字，表示一个 UTF-16 码元
      + 大于 0xFFFF 的数字会被截断为最后的 16 位
      + 不进行有效性检查

  + 返回值 一个长度为 N 的字符串，由 N 个指定的 UTF-16 码元组成

  ```js
  String.fromCharCode(65, 66, 67); // 返回 "ABC"
  String.fromCharCode(0x2014); // 返回 "—"
  String.fromCharCode(0x12014); // 也返回 "—"；数字 1 被截断并忽略
  String.fromCharCode(8212); // 也返回 "—"；8212 是 0x2014 的十进制表示
  ```
