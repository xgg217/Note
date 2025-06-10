# 并集或合集

## 概述

+ 创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用[SameValueZero](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero "SameValueZero")做等值比较。（注： `arrays`（数组）的并集，按顺序返回，返回数组的元素是唯一的

## union 并集

+ union 返回一个新的联合数组

  ```js
  _.union([2], [1, 2]);
  // => [2, 1]
  ```

## unionBy

+ 根据某个字段来计算合集

  ```js
  _.unionBy([{ 'x': 1, 'y': 5 }], [{ 'x': 2, 'y': 3 }, { 'x': 1, 'y': 6 }], 'x');
  // => [{ 'x': 1, 'y': 5 }, { 'x': 2, 'y': 3 }]
  ```

## unionWith

+ 根据某个条件函数来计算合集

  ```js
  var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
  var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
  _.unionWith(objects, others, _.isEqual);  // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
  ```
