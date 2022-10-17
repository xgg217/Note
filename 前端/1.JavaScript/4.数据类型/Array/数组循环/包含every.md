# every

## 语法

- `arr.every(callback(element[, index[, array]])[, thisArg])`

- `every` 方法为数组中的每个元素执行一次 `callback` 函数，直到它找到一个使 `callback` 返回 `false`（表示可转换为布尔值 `false` 的值）的元素。如果发现了一个这样的元素，`every` 方法将会立即返回 `false`

- 即：如果该函数对每一项都返回 `true`，则返回 `true`

- 空数组也是返回 `true`。(空数组中所有元素都符合给定的条件，注：因为空数组没有元素)

- `every` 不会改变原数组

## 注意

- 空数组也是返回 `true`。(空数组中所有元素都符合给定的条件，注：因为空数组没有元素)

- `every` 不会改变原数组

## 源码

- 代码

    ```js
    /**
     * 如果list中的所有元素都通过predicate的真值检测就返回true
     * @param {*} arr
     * @param {*} funCb
     * @param {*} thatThis
     */
    const every = function(arr, funCb, thatThis) {
      const len = arr.length;
      for(let i = 0; i < len; i++) {
        if(!funCb.call(thatThis, arr[i], i, arr)) {
          return false
        }
      }
      return true
    }
    ```

## 示例

- 示例1：检测数组中的所有元素是否都大于 10

    ```js
    function isBigEnough(element, index, array) {
      return (element >= 10);
    }
    var passed = [12, 5, 8, 130, 44].every(isBigEnough); // passed is false
    passed = [12, 54, 18, 130, 44].every(isBigEnough); // passed is true
    ```

## 源码

- 代码

    ```js
    /**
     * 如果list中的所有元素都通过predicate的真值检测就返回true
     * @param {*} arr
     * @param {*} funCb
     * @param {*} thatThis
     */
    const every = function(arr, funCb, thatThis) {
      const len = arr.length;
      for(let i = 0; i < len; i++) {
        if(!funCb.call(thatThis, arr[i], i, arr)) {
          return false
        }
      }
      return true
    }
    ```
