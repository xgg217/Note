# includes

## 语法

+ `arr.includes(valueToFind[, fromIndex])`

  + 参数1：`valueToFind` 需要查找的元素值

  + 参数2：`fromIndex` (可选) 从 `fromIndex` 索引处开始查找 `valueToFind`

    + 如果为负值，则按升序从 `array.length + fromIndex` 的索引开始搜 （即使从末尾开始往前跳 `fromIndex` 的绝对值个索引，然后往后搜寻）

        ```js
        // array length is 3
        // fromIndex is -100
        // computed index is 3 + (-100) = -97

        var arr = ['a', 'b', 'c'];

        arr.includes('a', -100); // true
        arr.includes('b', -100); // true
        arr.includes('c', -100); // true
        arr.includes('a', -2); // false
        ```

    + 默认为 0

    + 如果 `fromIndex` 大于等于数组的长度，则会返回 `false`，且该数组不会被搜索

        ```js
        var arr = ['a', 'b', 'c'];

        arr.includes('c', 3);   // false
        arr.includes('c', 100); // false
        ```

  + 返回值：返回一个布尔值 `Boolean` ，如果在数组中找到了（如果传入了 `fromIndex` ，表示在 `fromIndex` 指定的索引范围中找到了）则返回 `true`

## 注意

+ 使用 `includes()` 比较字符串和字符时是区分大小写

+ `includes()` 方法有意设计为通用方法。它不要求 `this` 值是数组对象，所以它可以被用于其他类型的对象 (比如类数组对象)

  ```js
  (function() {
    console.log([].includes.call(arguments, 'a')); // true
    console.log([].includes.call(arguments, 'd')); // false
  })('a','b','c');
  ```

## 示例

+ `includes` 方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的 `includes` 方法类似

  ```js
  [1, 2, 3].includes(2)     // true
  [1, 2, 3].includes(4)     // false
  [1, 2, NaN].includes(NaN) // true
  ```
