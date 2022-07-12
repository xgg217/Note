# includes、startsWith、endsWith

## includes()

*   用于判断一个字符串是否包含在另一个字符串中，根据情况返回 `true` 或 `false`

*   升级版 `String.indexOf`

*   区分大小写

*   语法： `str.includes(searchString[, position])`

    *   `searchString` 要在此字符串中搜索的字符串。

    *   `position` : 可选。从当前字符串的哪个索引位置开始搜寻子字符串，默认值为0。

    *   返回值： 如果当前字符串包含被搜寻的字符串，就返回 true；否则返回 `false`

*   示例1

    ```javascript
    // 区分大小写
    'Blue Whale'.includes('blue'); // returns false
    ```

*   示例2

    ```javascript
    var str = 'To be, or not to be, that is the question.';

    console.log(str.includes('To be'));       // true
    console.log(str.includes('question'));    // true
    console.log(str.includes('nonexistent')); // false
    console.log(str.includes('To be', 1));    // false
    console.log(str.includes('TO BE'));       // false
    ```

## startsWith()

*   用来判断当前字符串是否是以另外一个给定的子字符串“开头”的，根据判断结果返回 `true` 或 `false`

*   语法： `str.startsWith(searchString[, position])`

    *   `searchString` :要搜索的子字符串。

    *   `position`: 在 str 中搜索 searchString 的开始位置，默认值为 0，也就是真正的字符串开头处。

*   示例1

    ```javascript
    var str = "To be, or not to be, that is the question.";

    alert(str.startsWith("To be"));         // true
    alert(str.startsWith("not to be"));     // false
    alert(str.startsWith("not to be", 10)); // true
    ```

## endsWith()

*   方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 `true` 或 `false`

*   示例

    ```javascript
    var str = "To be, or not to be, that is the question.";

    alert( str.endsWith("question.") );  // true
    alert( str.endsWith("to be") );      // false
    alert( str.endsWith("to be", 19) );  // true
    ```
