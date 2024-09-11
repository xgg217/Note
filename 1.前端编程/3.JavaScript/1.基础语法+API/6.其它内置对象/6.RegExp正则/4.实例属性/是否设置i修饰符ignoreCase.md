# RegExp.prototype.ignoreCase

## 概述

+ **只读属性**，无法直接更改此属性

+ 如果使用了 "`i`" 标志，则返回 `true`；否则，返回 `false`

  ```js
  var regex = new RegExp("foo", "i")

  console.log(regex.ignoreCase) // true
  ```

