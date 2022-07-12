# URL编码和解码

## 基础

*   网页的 URL 只能包含合法的字符。

*   合法字符分成两类。

    *   URL 元字符：分号（`;`），逗号（`,`），斜杠（`/`），问号（`?`），冒号（`:`），at（`@`），`&`，等号（`=`），加号（`+`），美元符号（`$`），井号（`#`）

    *   语义字符：`a-z`，`A-Z`，`0-9`，连词号（`-`），下划线（`_`），点（`.`），感叹号（`!`），波浪线（`~`），星号（`*`），单引号（`'`），圆括号（`()`）

*   除了以上字符，其他字符出现在 URL 之中都必须**转义**，规则是根据操作系统的默认编码，将每个字节转为百分号（`%`）加上两个大写的十六进制字母。

## URL 的编码/解码方法

*   `encodeURI()`

*   `encodeURIComponent()`

*   `decodeURI()`

*   `decodeURIComponent()`

## encodeURI()

*   `encodeURI()`方法用于转码整个 URL。

*   它的参数是一个字符串，代表整个 `URL`。

*   它会将元字符和语义字符之外的字符，都进行转义

    ```javascript
    encodeURI('http://www.example.com/q=春节')
    // "http://www.example.com/q=%E6%98%A5%E8%8A%82"
    ```

## decodeURI()

*   `decodeURI()` 方法用于整个 URL 的解码。

*   它是 `encodeURI()` 方法的逆运算。

*   它接受一个参数，就是转码后的 URL。

    ```javascript
    decodeURI('http://www.example.com/q=%E6%98%A5%E8%8A%82')
    // "http://www.example.com/q=春节"
    ```

## encodeURIComponent()

*   `encodeURIComponent()` 方法用于转码 URL 的组成部分，会转码除了语义字符之外的所有字符，即元字符也会被转码。

*   所以，它不能用于转码整个 `URL`。

*   它接受一个参数，就是 URL 的片段。

    ```javascript
    encodeURIComponent('春节')
    // "%E6%98%A5%E8%8A%82"

    encodeURIComponent('http://www.example.com/q=春节')
    // "http%3A%2F%2Fwww.example.com%2Fq%3D%E6%98%A5%E8%8A%82"
    ```

## decodeURIComponent()

*   `decodeURIComponent()` 用于URL 片段的解码。

*   它是 `encodeURIComponent()` 方法的逆运算。

*   它接受一个参数，就是转码后的 URL 片段。

    ```javascript
    decodeURIComponent('%E6%98%A5%E8%8A%82')
    // "春节"
    ```
