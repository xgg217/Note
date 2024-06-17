# aaaabbbccccc 变成 abc

## 概述

+ 将 `aaaabbbccccc` 变成 `abc`

  ```js
  const str = 'aaabbbbcc';
  const reg = /(\w)\1*/g;
  console.log(str.replace(reg, function($, $1) {
    console.log($); // aaa bbb cc
    console.log($1); // a b c
    return $1;
  }));
  ```
