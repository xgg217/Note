# String.prototype.at()

## 概述

+ at() 方法接受一个整数值，并返回一个新的 String，该字符串由位于指定偏移量处的单个 UTF-16 码元组成
+ 该方法允许正整数和负整数
+ 负整数从字符串中的最后一个字符开始倒数

## 语法

+ `at(index)`

  + 参数

    + index

      + 要返回的字符串字符的索引（位置）。
      + 传递负数时，支持从字符串末端开始的相对索引；也就是说，如果使用负数，返回的字符将从字符串的末端开始倒数

  + 返回值

    + 由位于指定位置的单个 UTF-16 码元组成的 String
    + 如果找不到指定的索引，则返回 `undefined`

  ```js
  const str = "myinvoice01";
  str.at(-1); // '1'
  ```
