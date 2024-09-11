# RegExp.prototype.source

## 概述

+ source 属性返回一个值为当前正则表达式对象的模式文本的字符串，该字符串不会包含正则字面量两边的斜杠以及任何的标志字符

  ```js
  var regex = /fooBar/ig;

  console.log(regex.source); // "fooBar"，不包含 /.../ 和 "ig"
  ```
