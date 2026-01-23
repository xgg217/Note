# Iterator.prototype.take()

## 概述

+ Iterator 实例的 take() 方法返回一个新的迭代器辅助方法，该迭代器辅助方法生成此迭代器中给定数量的元素，然后终止

## 语法

+ `take(limit)`

+ 参数

  + limit 要从迭代器的开头获取的元素数量

+ 返回值

  + 一个新的迭代器辅助方法。返回的迭代器辅助方法逐个生成原始迭代器中的元素，并在生成 `limit` 个元素后（或原始迭代器耗尽时）完成（next() 方法产生 `{ value: undefined, done: true }` ）

## 示例

+ 示例1：创建了一个生成斐波那契数列中的项的迭代器，然后打印前三个项

  ```js
  function* fibonacci() {
    let current = 1;
    let next = 1;
    while (true) {
      yield current;
      [current, next] = [next, current + next];
    }
  }

  const seq = fibonacci().take(3);
  console.log(seq.next().value); // 1
  console.log(seq.next().value); // 1
  console.log(seq.next().value); // 2
  console.log(seq.next().value); // undefined
  ```

+ 示例2：在 for...of 循环中使用 take()

  ```js
  for (const n of fibonacci().take(5)) {
    console.log(n);
  }

  // 输出：
  // 1
  // 1
  // 2
  // 3
  // 5
  ```

+ 示例3：可以将 take() 与 Iterator.prototype.drop() 结合使用来获取迭代器的切片

  ```js
  for (const n of fibonacci().drop(2).take(5)) {
    // 丢弃第一个元素，然后取接下来的五个元素
    console.log(n);
  }
  // 输出：
  // 2
  // 3
  // 5
  // 8
  // 13

  for (const n of fibonacci().take(5).drop(2)) {
    // 取前五个元素，然后丢弃其中的前两个元素
    console.log(n);
  }
  // 输出：
  // 2
  // 3
  // 5
  ```
