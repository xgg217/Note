# RegExp.lastIndex

## 概述

+ 可读、可写

+ 返回一个整数，表示下一次开始搜索的位置
+ 该属性可读写，但是只在进行连续搜索时有意义

+ 作用：用于规定下次匹配的起始位置。但是只有设置标志 `g` 才能使用

  + 否则 `lastIndex` 固定为0

+ 上次匹配的结果是由方法 `RegExp.exec()` 和 `RegExp.test()` 找到的，它们都以 `lastIndex` 属性所指的位置作为下次检索的起始点。这样，就可以通过反复调用这两个方法来遍历一个字符串中的所有匹配文本

+ 当方法 `exec()` 或 `test()` 再也找不到可以匹配的文本时，它们会自动把 `lastIndex` 属性重置为 0

## 语法

+ `lastIndex = regExpObj.lastIndex;`

  ```js
  var re = /(hi)?/g;
  console.log(re.exec("hi"));
  console.log(re.lastIndex);

  // 手动设置为 0
  re.lastIndex = 0;
  ```
