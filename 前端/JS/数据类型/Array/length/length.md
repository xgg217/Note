# length

## length属性

    - 数组的 `length` 属性，返回数组的成员数量

        ```javascript
        ['a', 'b', 'c'].length // 3
        ```

    - 只要是数组，就一定有 `length` 属性。

    - 该属性是一个动态的值，等于键名中的最大整数加上1

        ```javascript
        var arr = ['a', 'b'];
        arr.length // 2

        arr[2] = 'c';
        arr.length // 3

        arr[9] = 'd';
        arr.length // 10

        arr[1000] = 'e';
        arr.length // 1001
        ```

## 设置 length属性


    - `length` 属性是可写的

    - 如果人为设置一个小于当前成员个数的值，该数组的成员会自动减少到 `length` 设置的值

    ```javascript
    var arr = [ 'a', 'b', 'c' ];
    arr.length // 3

    arr.length = 2;
    arr // ["a", "b"]
    ```

*   将数组**清空**的一个有效方法，就是将 `length` 属性设为0

    ```javascript
    var arr = [ 'a', 'b', 'c' ];

    arr.length = 0;
    arr // []
    ```

*   当 `length` 属性设为大于数组个数时，读取新增的位置都会返回 `undefined`

    ```javascript
    // 设置负值
    [].length = -1
    // RangeError: Invalid array length

    // 数组元素个数大于等于2的32次方
    [].length = Math.pow(2, 32)
    // RangeError: Invalid array length

    // 设置字符串
    [].length = 'abc'
    // RangeError: Invalid array length
    ```
