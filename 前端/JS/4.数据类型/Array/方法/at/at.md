# at

## 语法

*   at(index)

    ```javascript
    const cart = ['apple', 'banana', 'pear'];
    arr.at(-1); // pear'
    arr.at(-2); // banana'
    arr.at(0); // apple'
    arr.at(Infinity); // undefined
    ```

## 作用

*   取出数组中的倒数某个值，或者字符串中的后数几个字符

## 解决的问题

*   取出数组中的倒数某个值，或者字符串中的后数几个字符，在 JavaScript 中一直是比较麻烦的事情，比如 `arr[arr.length - 1]` 或者 `arr.slice(-1)[0]`
