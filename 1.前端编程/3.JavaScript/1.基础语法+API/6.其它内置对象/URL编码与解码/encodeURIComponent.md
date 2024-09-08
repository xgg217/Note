# encodeURIComponent()

## 概述

+ `encodeURIComponent()` 方法用于转码 URL 的*组成部分*，会转码除了语义字符之外的所有字符，即元字符也会被转码

+ 所以，它不能用于转码整个 `URL`

+ 它接受一个参数，就是 URL 的片段

  ```js
  encodeURIComponent('春节')
  // "%E6%98%A5%E8%8A%82"

  encodeURIComponent('http://www.example.com/q=春节')
  // "http%3A%2F%2Fwww.example.com%2Fq%3D%E6%98%A5%E8%8A%82"
  ```

