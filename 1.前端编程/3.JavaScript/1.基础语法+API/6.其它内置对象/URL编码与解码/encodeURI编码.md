# encodeURI()

## 概述

+ encodeURI() 函数通过将特定字符的每个实例替换为一个、两个、三或四转义序列来对统一资源标识符 (URI) 进行编码 (该字符的 UTF-8 编码仅为四转义序列) 由两个 "代理" 字符组成)

+ `encodeURI()` 方法用于转码整个 URL

+ 它的参数是一个字符串，代表整个 `URL`

+ 它会将元字符和语义字符之外的字符，都进行转义

  ```js
  encodeURI('http://www.example.com/q=春节')
  // "http://www.example.com/q=%E6%98%A5%E8%8A%82"
  ```

## API







