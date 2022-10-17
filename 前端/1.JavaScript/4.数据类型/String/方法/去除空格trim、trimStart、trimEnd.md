# trim、trimStart、trimEnd

## trim

- 用于去除字符串两端的空格，返回一个新字符串，不改变原字符串

    ```js
    '  hello world  '.trim()
    // "hello world"
    ```

- 该方法去除的不仅是空格，还包括制表符（`\t`、`\v`）、换行符（`\n`）和回车符（`\r`）

    ```js
    '\r\nabc \t'.trim() // 'abc'
    ```

## trimStart

- 示例

    ```js
    let str = '   foo  ';

    console.log(str.length); // 8

    str = str.trimStart();
    console.log(str.length); // 5
    console.log(str);        // 'foo  '
    ```

## trimEnd
