# 重复repeat

## String.prototype.repeat()

- 语法: `str.repeat(count);`

  - `count` : 介于0和正无穷大之间的整数 : \[0, +∞) 。表示在新构造的字符串中重复了多少遍原字符串

  - 返回值: 包含指定字符串的指定数量副本的新字符串

- 示例

    ```js
    "abc".repeat(0)      // ""
    "abc".repeat(1)      // "abc"
    "abc".repeat(2)      // "abcabc"
    "abc".repeat(3.5)    // "abcabcabc" 参数count将会被自动转换成整数.
    ```
