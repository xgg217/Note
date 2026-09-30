# trim 方法模拟

## 概述

+ `trim` 方法是去掉字符串的开头和结尾的空白符

+ 方法1(效率高)：匹配到开头和结尾的空白符，然后替换成空字符

  ```js
  function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }
  console.log( trim(" foobar ") );
  // => "foobar"
  ```

+ 方法2：匹配整个字符串，然后用引用来提取出相应的数据：

  ```js
  // 使用了惰性匹配 *?，不然也会匹配最后一个空格之前的所有空格的
  function trim (str) {
    return str.replace(/^\s*(.*?)\s*$/g, "$1");
  }
  console.log( trim(" foobar ") );
  // => "foobar"
  ```
