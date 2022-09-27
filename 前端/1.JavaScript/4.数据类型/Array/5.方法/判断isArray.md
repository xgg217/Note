# isArray

## 作用

- ES6 新增

- 用来判断一个值**是否为数组**

- 它可以弥补 `typeof` 运算符的不足

    ```javascript
    var a = [1, 2, 3];

    typeof a // "object"
    Array.isArray(a) // true
    ```

    ```javascript
    Array.isArray([]);   // true
    ```

    ```javascript
    Array.isArray([1, 2, 3]); // true

    Array.isArray({foo: 123}); // false

    Array.isArray("foobar"); // false

    Array.isArray(undefined); // false
    ```
