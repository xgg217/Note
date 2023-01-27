# Buffer 编码

## 支持的编码

+ `hex`：将每个字节编码成两个十六进制的字符

+ `ascii`：仅适用于 7 位 ASCII 数据。此编码速度很快，如果设置则会剥离高位

+ `utf8`：多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8。**默认**

+ `utf16le`：2 或 4 个字节，小端序编码的 Unicode 字符

+ `ucs2`：`utf16le` 的别名

+ `base64`：Base64 编码

+ `latin1`：一种将 `Buffer` 编码成单字节编码字符串的方法

+ `binary`：`latin1` 的别名
