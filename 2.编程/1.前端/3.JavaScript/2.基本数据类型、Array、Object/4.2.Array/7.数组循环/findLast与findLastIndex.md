# findLast 与 findLastIndex

## 解决的问题

+ 在 JavaScript 中，通过 `find()` 和 `findIndex()`  查找数组中的值是一种常见做法。不过，这些方法从数组的开始进行遍历

  ```js
  const array = [{v: 1}, {v: 2}, {v: 3}, {v: 4}, {v: 5}];

  array.find(elem => elem.v > 3); // {v: 4}
  array.findIndex(elem => elem.v > 3); // 3
  ```

+ 如果要从数组的末尾开始遍历，就必须反转数组并使用上述方法
+ 这样做就需要一个额外的数组操作
+ `findLast()` 和 `findLastIndex()` 的就解决了这一问题
+ 提出这两个方法的一个重要原因就是：*语义*

## 使用

+ 它们的用法和 `find()`、`findIndex()` 类似，唯一不同的是它们是 *从后向前* 遍历数组，这两个方法适用于 *数组* 和 *类数组*

## findLast

+ 会返回第一个查找到的元素，如果没有找到，就会返回 `undefined`

  ```js
  const array = [{v: 1}, {v: 2}, {v: 3}, {v: 4}, {v: 5}];

  array.findLast(elem => elem.v > 3); // {v: 5}
  ```

## findLastIndex

+ 会返回第一个查找到的元素的索引。如果没有找到，就会返回 `-1`

  ```js
  const array = [{v: 1}, {v: 2}, {v: 3}, {v: 4}, {v: 5}];

  array.findLastIndex(elem => elem.v > 3); // 4
  array.findLastIndex(elem => elem.v > 5); // undefined
  ```
