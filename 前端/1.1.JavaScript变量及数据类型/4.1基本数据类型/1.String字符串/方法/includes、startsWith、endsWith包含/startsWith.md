# startsWith

## 语法

+ 用来判断当前字符串是否是以另外一个给定的子字符串“开头”的，根据判断结果返回 `true` 或 `false`

+ 语法： `str.startsWith(searchString[, position])`

  + `searchString` :要搜索的子字符串

  + `position`: 在 str 中搜索 searchString 的开始位置，默认值为 0，也就是真正的字符串开头处

  ```js
  var str = "To be, or not to be, that is the question.";

  alert(str.startsWith("To be"));         // true
  alert(str.startsWith("not to be"));     // false
  alert(str.startsWith("not to be", 10)); // true
  ```
