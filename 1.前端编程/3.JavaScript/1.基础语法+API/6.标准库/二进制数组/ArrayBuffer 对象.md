# ArrayBuffer 对象

## 概述

+ ArrayBuffer对象代表储存二进制数据的一段内存，它不能直接读写，只能通过视图（ `TypedArray` 视图和 `DataView` 视图)来读写，视图的作用是以指定格式解读二进制数据

## 创建

+ ArrayBuffer也是一个构造函数，可以分配一段可以存放数据的连续内存区域

  ```js
  // 生成了一段 32 字节的内存区域，每个字节的值默认都是 0
  const buf = new ArrayBuffer(32);
  ```

## ArrayBuffer.prototype.byteLength

+ `ArrayBuffer` 实例的 `byteLength` 属性，返回所分配的内存区域的字节长度

  ```js
  const buffer = new ArrayBuffer(32);
  buffer.byteLength // 32
  ```

+ 如果要分配的内存区域很大，有可能分配失败（因为没有那么多的连续空余内存），所以有必要检查是否分配成功

  ```js
  if (buffer.byteLength === n) {
    // 成功
  } else {
    // 失败
  }
  ```

## ArrayBuffer.prototype.slice()

+ 语法 ArrayBuffer 实例的 slice() 方法返回一个新的 ArrayBuffer 实例，其包含原 ArrayBuffer 实例中从 begin 开始（包含）到 end 结束（不含）的所有字节的副本

  + `slice()`
  + `slice(start)`
  + `slice(start, end)`

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

    + 返回值 一个新的 ArrayBuffer 对象

  ```js
  // 拷贝buffer对象的前 3 个字节（从 0 开始，到第 3 个字节前面结束），生成一个新的ArrayBuffer对象
  const buffer = new ArrayBuffer(8);
  const newBuffer = buffer.slice(0, 3);
  ```

  ```js
  // 复制一个 ArrayBuffer
  const buf1 = new ArrayBuffer(8);
  const buf2 = buf1.slice(0);
  ```

+ slice方法其实包含两步

  + 第一步是先分配一段新内存
  + 第二步是将原来那个ArrayBuffer对象拷贝过去




