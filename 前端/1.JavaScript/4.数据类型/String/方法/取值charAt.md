# charAt

## 作用

  - `charAt` 方法返回指定位置的字符，参数是从0开始编号的位置。

    ```javascript
    var s = new String('abc');

    s.charAt(1) // "b"
    s.charAt(s.length - 1) // "c"
    ```

  - 这个方法完全可以用数组下标替代。

    ```javascript
    'abc'.charAt(1) // "b"
    'abc'[1] // "b"
    ```

  - 如果参数为负数，或大于等于字符串的长度，`charAt` 返回空字符串。

    ```javascript
    'abc'.charAt(-1) // ""
    'abc'.charAt(3) // ""
    ```
