# ArrayBuffer.prototype.slice()

## 概述

+ `ArrayBuffer` 实例的 `slice()` 方法返回一个新的 `ArrayBuffer` 实例，其包含原 ArrayBuffer 实例中从 `begin` 开始（包含）到 `end` 结束（不含）的所有字节的副本

## API

+ 语法

  ```js
  slice()
  slice(start)
  slice(start, end)
  ```

  + 参数

    + start `[可选]` 从开始提取的位置索引(从0开始)，将被转换为整数

      + 负数索引将会从缓冲区末尾开始计算——如果 `start < 0`，那么将会使用 `start + buffer.length`
      + 如果 `start < -buffer.length` 或省略了 `start` ，则会使用 `0`
      + 如果 `start >= buffer.length` ，则不会提取任何内容

    + end `[可选]` 要结束提取的位置索引（从 0 开始），将被转换为整数。`slice()` 提取到但不包括 `end`

      + 负数索引将会从缓冲区末尾开始计算——如果 `end < 0`，那么将会使用` end + buffer.length`
      + 如果 `end < -buffer.length` ，则会使用 0
      + 如果 `end >= buffer.length` 或省略了 `end` ，则会使用 `buffer.length` ，则会导致直到末尾的所有元素都被提取
      + 如果标准化后的 `end` 位置在 `start` 位置之前，则不会提取任何内容

  + 返回值 一个新的 `ArrayBuffer` 对象

+ `slice` 方法其实包含两步

  + 第一步是先分配一段新内存
  + 第二步是将原来那个 `ArrayBuffer` 对象拷贝过去

## 示例

+ 复制一个 ArrayBuffer

  ```js
  const buf1 = new ArrayBuffer(8);
  const buf2 = buf1.slice(0);
  ```
