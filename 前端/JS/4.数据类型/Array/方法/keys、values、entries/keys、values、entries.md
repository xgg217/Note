# keys、values、entries

## keys()

*   `keys()` 方法返回一个包含数组中每个索引键的Array Iterator对象

    ```javascript
    const array1 = ['a', 'b', 'c'];
    const iterator = array1.keys();

    for (const key of iterator) {
      console.log(key);
    }

    // 0
    // 1
    // 2
    ```

    ```javascript
    // 索引迭代器会包含那些没有对应元素的索引
    var arr = ["a", , "c"];
    var sparseKeys = Object.keys(arr);
    var denseKeys = [...arr.keys()];
    console.log(sparseKeys); // ['0', '2']
    console.log(denseKeys);  // [0, 1, 2]
    ```

## values()

*   `values()` 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值

    ```javascript
    let arr = ['w', 'y', 'k', 'o', 'p'];
    let eArr = arr.values();

    for (let letter of eArr) {
      console.log(letter);
    } /
    ```

## entries()

*   `entries()` 方法返回一个新的 Array Iterator对象，该对象包含数组中每个索引的键/值对

    ```javascript
    const arr = ["a", "b", "c"];
    for(const [index, value] of arr.entries()) {
      console.log(index, value)
    }

    // 0 "a"
    // 1 "b"
    // 2 "c"
    ```
