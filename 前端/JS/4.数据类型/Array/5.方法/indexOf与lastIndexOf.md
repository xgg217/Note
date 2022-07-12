# indexOf与lastIndexOf

## indexOf

  - `indexOf` 方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回 `-1`

    ```javascript
    var a = ['a', 'b', 'c'];

    a.indexOf('b') // 1
    a.indexOf('y') // -1
    ```

  - indexOf 方法还可以接受第二个参数，表示搜索的开始位置

    ```javascript
    ['a', 'b', 'c'].indexOf('a', 1) // -1
    ```

## lastIndexOf

  - `lastIndexOf` 方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回 `-1`

    ```javascript
    var a = [2, 5, 9, 2];
    a.lastIndexOf(2) // 3
    a.lastIndexOf(7) // -1
    ```

## 注意

  - 如果数组中包含 `NaN`，这两个方法不适用，即无法确定数组成员是否包含 `NaN`

    ```javascript
    [NaN].indexOf(NaN) // -1
    [NaN].lastIndexOf(NaN) // -1
    ```

  - 这是因为这两个方法内部，使用严格相等运算符（`===`）进行比较，而 `NaN` 是唯一一个不等于自身的值
