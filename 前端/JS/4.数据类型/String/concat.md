# concat

## 作用

*   `concat` 方法用于连接两个字符串，返回一个新字符串，不改变原字符串。

    ```javascript
    var s1 = 'abc';
    var s2 = 'def';

    s1.concat(s2) // "abcdef"
    s1 // "abc"
    ```

*   多个参数

    ```javascript
    'a'.concat('b', 'c') // "abc"
    ```

*   如果参数不是字符串，`concat` 方法会将其先转为字符串，然后再连接。

    ```javascript
    var one = 1;
    var two = 2;
    var three = '3';

    ''.concat(one, two, three) // "123"
    one + two + three // "33"
    ```

*   `concat` 方法将参数先转成字符串再连接，所以返回的是一个三个字符的字符串。

*   作为对比，加号运算符在两个运算数都是数值时，不会转换类型，所以返回的是一个两个字符的字符串。
