# toString

## toString()

*   返回数组的字符串形式

    ```javascript
    var a = [1, 2, 3];
    a.toString() // "1,2,3"
    ```

    ```javascript
    var a = [1, 2,[['a', 'b'],'c'], 3, [4, 5, 6]];
    const b = a.toString();
    console.log(a); // [1, 2,[['a', 'b'],'c'], 3, [4, 5, 6]];
    console.log(b); // 1,2,a,b,c,3,4,5,6
    ```

    ```javascript
    // 存在对象
    var a = [1, 2,[['a', 'b'],'c', { xgg: 'xgg' }], 3, [4, 5, 6]];
    const b = a.toString();
    console.log(a); // [1, 2,[['a', 'b'],'c'], 3, [4, 5, 6]];
    console.log(b); // 1,2,a,b,c,[object Object],3,4,5,6
    ```
