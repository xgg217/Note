# split

## 概述

- 靠正则来分割使结果中包含分隔块

    ```js
    var myString = "Hello 1 word. Sentence number 2.";
    var splits = myString.split(/(\d)/);

    console.log(splits); // [ "Hello ", "1", " word. Sentence number ", "2", "." ]
    ```

## 注意点

- 它可以有第二个参数，表示结果数组的最大长度

    ```js
    var string = "html,css,javascript";
    console.log( string.split(/,/, 2) );
    // =>["html", "css"]
    ```

- 正则使用分组时，结果数组中是包含分隔符的。解决办法 使用 `?:`

    ```js
    var string = "html,css,javascript";
    console.log( string.split(/(,)/) );
    // =>["html", ",", "css", ",", "javascript"]

    // 解决办法
    console.log( string.split(/(?:,)/) );
    // =>["html", "css", "javascript"]
    ```
