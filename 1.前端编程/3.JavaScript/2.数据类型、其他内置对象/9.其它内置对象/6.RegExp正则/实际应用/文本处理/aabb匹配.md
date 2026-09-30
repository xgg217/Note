# aabb匹配

## 概述

+ 匹配 `aabb` 样式数据。`\1` 表示引用第一个子表达式配备的内容, `\2` 表示引用第二个子表达式配备的内容

  ```js
  const str = 'abab';
  const reg = /(\w)\1(\w)\2/g;

  console.log(reg.exec(str)) // [ 'aabb', 'a', 'b', index: 0, input: 'aabbabcd' ]
  console.log(str.match(reg)); // [ 'aabb' ]
  ```

  ```js
  const str = 'aaaa';
  const reg = /(\a)\1/g;

  console.log(reg.exec(str)) // [ 'aa', 'a', index: 0, input: 'aaaa' ]
  console.log(str.match(reg)); // [ 'aa', 'aa' ]
  ```
