# Set与数组

## Set 转 数组

*   `Set` --> `Array`

    ```javascript
    const s = new Set([5,64,5,46]);

    const arr = [...s]; // 转成数组
    ```

## 数组 转 Set

*   `Array` --> `Set`

    ```javascript
    let myArray = ["value1", "value2", "value3"];
    let mySet = new Set(myArray);
    ```

## 数组去重

*   示例

    ```javascript
    const arr = [12, 2, 23, 12, 2]);
    const newArr = [...new Set(arr)];
    console.log(newArr)
    ```
