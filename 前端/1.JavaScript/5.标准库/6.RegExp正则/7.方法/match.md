# match

## 概述

- 检索返回一个字符串匹配正则表达式的结果

## 语法

- `str.match(regexp)`

- 返回值

  - 如果使用 `g` 标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组

  - 如果未使用 `g` 标志，则仅返回第一个完整匹配及其相关的捕获组（`Array`）。 在这种情况下，返回的项目将具有如下所述的其他属性

- 附加属性

  - groups: 一个捕获组数组 或 `undefined` （如果没有定义命名捕获组）

  - index: 匹配的结果的开始位置

  - input: 搜索的字符串

    ```js
    const regex = /(\d{4})-(\d{2})-(\d{2})/;
    const string = "2017-06-12";
    console.log( string.match(regex) );
    // => ["2017-06-12", "2017", "06", "12", index: 0, input: "2017-06-12"]
    ```

## 描述

- 如果正则表达式不包含 `g` 标志，`str.match()` 将返回与 `RegExp.exec()` 相同的结果

## 示例

- 示例1

    ```js
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var regexp = /[A-E]/gi;
    var matches_array = str.match(regexp);

    console.log(matches_array);
    // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
    ```
