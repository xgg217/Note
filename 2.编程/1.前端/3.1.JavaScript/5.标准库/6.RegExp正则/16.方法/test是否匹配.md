# test

## 概述

+ `RegExp.prototype.test()`

+ 执行一个检索，用来查看正则表达式与指定的字符串是否匹配

## 语法

+ `regexObj.test(str)`

+ 返回值：如果正则表达式与指定的字符串匹配，返回 `true`；否则 `false`

  ```js
  var r = /x/g;
  var s = '_x_x';

  r.lastIndex // 0
  r.test(s) // true

  r.lastIndex // 2
  r.test(s) // true

  r.lastIndex // 4
  r.test(s) // false
  ```

+ 可以通过正则对象的 `lastIndex` 属性指定开始搜索的位置

  ```js
  var r = /x/g;
  var s = '_x_x';

  r.lastIndex = 4;
  r.test(s) // false

  r.lastIndex // 0
  r.test(s)
  ```

## 注意事项

+ 如果，要整体匹配，正则前后需要添加开头和结尾

  ```js
  console.log( /123/.test("a123b") );
  // => true

  console.log( /^123$/.test("a123b") );
  // => false

  console.log( /^123$/.test("123") );
  // => true
  ```

+ 如果正则模式是一个空字符串(`''`)，则匹配所有字符串.

  ```js
  new RegExp('').test('abc')
  // true
  ```

## 不具有重复性

+ 示例

  ```js
  // 2012-12-12 12:12:12
  var regex = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/g;
  console.log(regex.lastIndex); // 0
  console.log(regex.test("2012-12-12 12:12:12")); // true

  console.log(regex.lastIndex); // 19
  console.log(regex.test("2012-12-12 12:12:12"));// false
  ```

+ 解决办法

  ```js
  // 2012-12-12 12:12:12
  var regex = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/g;

  alert(regex.test("2012-12-12 12:12:12")); // true

  regex.lastIndex = 0;
  alert(regex.test("2012-12-12 12:12:12")); // true
  ```

## 示例

+ 示例1

  ```js
  let str = 'hello world!';
  let result = /^hello/.test(str);
  console.log(result); // true
  ```
