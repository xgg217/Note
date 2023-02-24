# includes

## 语法

+ 用于判断一个字符串是否包含在另一个字符串中，根据情况返回 `true` 或 `false`

+ 升级版 `String.indexOf`

+ 区分大小写

+ 语法： `str.includes(searchString[, position])`

  + `searchString` 要在此字符串中搜索的字符串

  + `position` : 可选。从当前字符串的哪个索引位置开始搜寻子字符串，默认值为0

  + 返回值： 如果当前字符串包含被搜寻的字符串，就返回 true；否则返回 `false`

  ```js
  // 区分大小写
  'Blue Whale'.includes('blue'); // returns false
  ```

  ```js
  var str = 'To be, or not to be, that is the question.';

  console.log(str.includes('To be'));       // true
  console.log(str.includes('question'));    // true
  console.log(str.includes('nonexistent')); // false
  console.log(str.includes('To be', 1));    // false
  console.log(str.includes('TO BE'));       // false
  ```
