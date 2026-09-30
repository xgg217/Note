# String.prototype.charAt()

## 概述

+ String 的 charAt() 方法返回一个由给定索引处的单个 UTF-16 码元构成的新字符串

+ charAt() 方法总是将字符串作为 UTF-16 码元序列进行索引，因此它可能会返回孤项代理
+ 要获取给定索引处的完整 Unicode 码位，请使用 `String.prototype.codePointAt()` 和 `String.fromCodePoint()`

## API

+ `charAt(index)`

  + 参数

    + index

      + 要返回的字符的索引，从零开始
      + 会被转换为整数—— `undefined` 会被转换为 0

  + 返回值

    + 返回一个字符串，该字符串表示指定 index 处的字符（恰好是一个 UTF-16 码元）
    + 如果 index 超出了 `0 – str.length - 1` 的范围， `charAt()` 将返回一个空字符串


## 提示

+ `charAt` 方法返回指定位置的字符，参数是从0开始编号的位置

  ```js
  var s = new String('abc');

  s.charAt(1) // "b"
  s.charAt(s.length - 1) // "c"
  ```

+ 这个方法完全可以用数组下标替代

  ```js
  'abc'.charAt(1) // "b"
  'abc'[1] // "b"
  ```

+ 如果参数为负数，或大于等于字符串的长度，`charAt` 返回空字符串

  ```js
  'abc'.charAt(-1) // ""
  'abc'.charAt(3) // ""
  ```
