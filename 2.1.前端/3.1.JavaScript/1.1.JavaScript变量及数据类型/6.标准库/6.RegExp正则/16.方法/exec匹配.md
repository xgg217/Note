# exec

## 概述

+ `RegExp.prototype.exec()`

+ 在一个指定字符串中执行一个搜索匹配

+ 返回一个结果数组或 `null`

+ `exec` 比 `match` 更强大：当正则没有 `g` 时，使用 `match` 返回的信息比较多

  + `input`：整个原字符串

  + `index`：模式匹配成功的开始位置（从0开始计数）

+ 但是有 `g` 后，就没有关键的信息 `index` 了

+ 而 `exec` 方法就能解决这个问题，它能接着上一次匹配后继续匹配

## 语法

+ `regexObj.exec(str)`

+ 返回值：返回一个数组（包含额外的属性 `index` 和 `input` ，参见下方表格），并更新正则表达式对象的 `lastIndex` 属性。完全匹配成功的文本将作为返回数组的第一项，从第二项起，后续每项都对应正则表达式内捕获括号里匹配成功的文本

  ```js
  var r = /a(b+)a/;
  var arr = r.exec('_abbba_aba_');

  arr // ["abbba", "bbb"]

  arr.index // 1
  arr.input // "_abbba_aba_"
  ```

+ 如果 正则表达式中不加 `g` ,则永远匹配第一个

## reg.lastIndex

+ 匹配的游标

+ 可读、可写

  ```js
  var reg = /a/g;
  var str = 'abc_abc_abc'

  var r1 = reg.exec(str);
  r1 // ["a"]
  r1.index // 0
  reg.lastIndex // 1

  var r2 = reg.exec(str);
  r2 // ["a"]
  r2.index // 4
  reg.lastIndex // 5

  var r3 = reg.exec(str);
  r3 // ["a"]
  r3.index // 8
  reg.lastIndex // 9

  var r4 = reg.exec(str);
  r4 // null
  reg.lastIndex // 0
  ```

## exec配合while

+ 在使用 `exec` 时，经常需要配合使用 `while` 循环

  ```js
  const string = "2017.06.27";
  const regex2 = /\b(\d+)\b/g;
  const result;
  while ( result = regex2.exec(string) ) {
    console.log( result, regex2.lastIndex );
  }
  // => ["2017", "2017", index: 0, input: "2017.06.27"] 4
  // => ["06", "06", index: 5, input: "2017.06.27"] 7
  // => ["27", "27", index: 8, input: "2017.06.27"] 10
  ```

## 示例

+ 示例1

  ```js
  const str = 'abababab';
  const reg = /ab/g;

  console.log(reg.lastIndex); // 0
  console.log(reg.exec(str)); // [ 'ab', index: 0, input: 'abababab' ]

  console.log(reg.lastIndex); // 2
  console.log(reg.exec(str)); // [ 'ab', index: 2, input: 'abababab' ]

  console.log(reg.lastIndex); // 4
  console.log(reg.exec(str)); // [ 'ab', index: 4, input: 'abababab' ]

  console.log(reg.lastIndex); // 6
  console.log(reg.exec(str)); // [ 'ab', index: 6, input: 'abababab' ]

  console.log(reg.lastIndex); // 8
  console.log(reg.exec(str)); // null

  console.log(reg.lastIndex); // 0
  console.log(reg.exec(str)); // [ 'ab', index: 0, input: 'abababab' ]
  ```

+ 示例2：获取中文字符的数量

  ```js
  const str = "sfsfs大师傅似的dsfs1564s大水发";
  const reg = /[\u4e00-\u9FA5]/g;

  let ind = 0;
  while(reg.exec(str)) {
    ind += 1;
  }
  console.log(ind); // 8
  ```
