# some

## 语法

*   `arr.some(callback(element[, index[, array]])[, thisArg])`

*   `some` 为数组中的每一个元素执行一次 `callback` 函数，直到找到一个使得 `callback` 返回一个“真值”（即可转换为布尔值 `true` 的值）

*   如果该函数 **任何一项(只要有一项)** 返回 `true`，则返回 `true`

*   如果找到了这样一个值，`some` 将会立即返回 `true` ，否则返回 `false`

## 注意

*   `some` 被调用时不会改变原数组

## 示例

*   示例：检测在数组中是否有元素大于 10

    ```javascript
    function isBiggerThan10(element, index, array) {
      return element > 10;
    }

    [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
    [12, 5, 8, 1, 4].some(isBiggerThan10); // true

    ```

*   示例：判断数组元素中是否存在某个值

    ```javascript
    var fruits = ['apple', 'banana', 'mango', 'guava'];
    function checkAvailability(arr, val) {
      return arr.some(function(arrVal) {
        return val === arrVal;
      });
    }
    checkAvailability(fruits, 'kela');   // false
    checkAvailability(fruits, 'banana'); // true
    ```

## 源码

*   代码

    ```javascript
    const some = function(arr, funCb, thatThis) {
      const len = arr.length;
      for(let i = 0; i < len; i++) {
        if(funCb.call(thatThis, arr[i], i, arr)) {
          return true
        }
      }
      return false
    }
    ```
