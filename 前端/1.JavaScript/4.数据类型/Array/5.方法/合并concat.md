# concat

## 作用

  - `concat` 方法用于多个数组的合并

  - 它将新数组的成员，添加到原数组的尾部，然后返回一个新数组，原数组不变

    ```javascript
    ['hello'].concat(['world'])
    // ["hello", "world"]

    ['hello'].concat(['world'], ['!'])
    // ["hello", "world", "!"]
    ```

    ```javascript
    [1, 2, 3].concat(4, 5, 6)
    // [1, 2, 3, 4, 5, 6]
    ```
