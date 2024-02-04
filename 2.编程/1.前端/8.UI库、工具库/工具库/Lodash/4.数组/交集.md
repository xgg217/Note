# 交集

## 概述

+ 创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用[SameValueZero](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero "SameValueZero")进行相等性比较。（注：可以理解为给定数组的交集）

## intersection

+ 回一个包含所有传入数组交集元素的新数组。

  ```js
  _.intersection([2, 1], [4, 2], [1, 2]);
  // => [2]
  ```

## intersectionBy

+ 根据某个字段来进行计算交集

  ```js
  _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');  // => [{ 'x': 1 }]
  ```

## intersectionWith

+ 根据某个条件函数来计算交集，比如使用isEqual

  ```js
  var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
  var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
  _.intersectionWith(objects, others, _.isEqual);  // => [{ 'x': 1, 'y': 2 }]
  ```
