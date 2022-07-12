# 补全padStart、padEnd

## padStart

*   语法 `str.padStart(targetLength [, padString])`

    *   **targetLength** （可选）`targetLength`指目标字符串长度。如果果`targetLength`设置的长度比字符串本身还要小，则原本的字符串原封不动返回

        ```javascript
        'zhangxinxu'.padStart(5);    
        // 结果还是'zhangxinxu'

        'x'.padStart(5, 'ab') // ababx
        ```

    *   **padString** （可选）  表示用来补全长度的字符串。默认值 空格 `' '`
