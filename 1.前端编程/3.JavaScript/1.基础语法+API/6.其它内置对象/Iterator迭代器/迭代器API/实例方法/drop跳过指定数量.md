# Iterator.prototype.drop()

## 概述

+ Iterator 实例的 drop() 方法返回一个新的迭代器辅助方法，该迭代器辅助方法会跳过此迭代器的开头的给定数量的元素

## 语法

+ 语法

  ```js
  drop(limit)
  ```

+ 参数

  + limit 要从迭代器的开头丢弃的元素数量

+ 返回值

  + 一个新的迭代器辅助方法
  + 第一次调用返回的迭代器辅助方法的 next() 方法时，当前迭代器立即前进 limit 个元素，然后生成下一个元素（即第 limit+1 个元素）
  + 然后，迭代器辅助方法会逐一生成剩余元素。如果当前迭代器的元素数量少于 limit 个，那么新生成的迭代器辅助方法会在 next() 方法第一次调用时立即完成

## 示例

+ 示例1：创建一个生成斐波那契数列的迭代器，其丢弃前两个元素，并从第 3 个元素之后的元素开始

  ```js
  function* fibonacci() {
    let current = 1;
    let next = 1;
    while (true) {
      yield current;
      [current, next] = [next, current + next];
    }
  }

  const seq = fibonacci().drop(2);
  console.log(seq.next().value); // 2
  console.log(seq.next().value); // 3

  // 等价于：
  const seq = fibonacci();
  seq.next();
  seq.next();
  ```

+ 示例2：在 for...of 循环中使用 drop()

  ```js
  // 当你不想手动快进迭代器时，drop() 是最方便的。因为迭代器也是可迭代的，所以你可以用 for...of 循环来迭代返回的辅助方法
  for (const n of fibonacci().drop(2)) {
    console.log(n);
    if (n > 30) {
      break;
    }
  }

  // 输出：
  // 2
  // 3
  // 5
  // 8
  // 13
  // 21
  // 34
  ```

+ 示例3：drop() 与 take() 结合使用

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

