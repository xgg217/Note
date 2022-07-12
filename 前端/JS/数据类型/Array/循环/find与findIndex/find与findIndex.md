# find与findIndex

## find()

*   数组实例的 `find` 方法，用于找出第一个符合条件的数组成员

*   它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为 `true` 的成员，然后返回该成员

*   如果没有符合条件的成员，则返回 `undefined`

    ```javascript
    [1, 4, -5, 10].find((n) => n < 0)
    // -5
    ```

*   上面代码中，`find` 方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组

    ```javascript
    [1, 5, 10, 15].find(function(value, index, arr) {
      return value > 9;
    }) // 10
    ```

    ```javascript
    const arr = [
      { loginId: "xmt", pwd: "123" },
      { loginId: "xh", pwd: "123" },
      { loginId: "xgg", pwd: "123" }
    ];

    function aa (id, pwd) {
      return arr.find(item => {
        return (item.loginId === id) && (pwd === item.pwd)
      })
      return a
    }

    const a = aa("xh", "123");
    console.log(a); // { loginId: "xh", pwd: "123" }
    ```

## findIndex()

*   数组实例的 `findIndex` 方法的用法与 `find` 方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回 `-1`

    ```javascript
    [1, 5, 10, 15].findIndex(function(value, index, arr) {
      return value > 9;
    }) // 2
    ```

## 源码

*   代码

    ```javascript
    /**
     * 在list中逐项查找，返回第一个通过predicate迭代函数真值检测的元素值，
     *    如果没有元素通过检测则返回 undefined。
     *    如果找到匹配的元素，函数将立即返回，不会遍历整个list。
     * @param {*} arr 
     * @param {*} funCb 
     * @param {*} thatThis 
     */
    const find = function(arr, funCb, thatThis) {
      const len = arr.length;
      for(let i = 0; i < len; i++) {
        if(funCb.call(thatThis, arr[i], i, arr)) {
          return arr[i]
        }
      }
      return undefined
    }
    ```
