# Iterator.prototype.toArray()

## 概述

+ Iterator 实例的 toArray() 方法创建一个新的 Array 实例，并将迭代器生成的元素填充到该实例中

+ `iterator.toArray()` 等价于` Array.from(iterator)` 和 `[...iterator]` ，但当涉及多个迭代器辅助方法时，链式调用更容易

## 语法

+ `toArray()`

+ 参数 无

+ 返回值

  + 一个新的 Array 实例，其中包含迭代器生成的元素，按生成顺序排列

## 示例

+ 示例：创建一个生成斐波那契数列的迭代器，取前 10 个元素，过滤掉奇数，并将结果转换为数组

  ```js
  function* fibonacci() {
    let current = 1;
    let next = 1;
    while (true) {
      yield current;
      [current, next] = [next, current + next];
    }
  }

  const array = fibonacci()
    .take(10)
    .filter((x) => x % 2 === 0)
    .toArray();

  console.log(array); // [2, 8, 34]
  ```
