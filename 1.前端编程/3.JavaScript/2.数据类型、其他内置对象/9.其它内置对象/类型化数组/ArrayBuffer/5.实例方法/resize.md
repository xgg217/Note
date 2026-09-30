# ArrayBuffer.prototype.resize()

## 概述

+ `resize()` 方法将 `ArrayBuffer` 调整为 `newLength` 参数指定的大小，前提是该 `ArrayBuffer` 是可调整大小的并且新的大小小于或等于该 `ArrayBuffer` 的 `maxByteLength` 。新字节被初始化为 0

+ 请注意，你可以使用 `resize()` 来缩小和增大 `ArrayBuffer` ——即使 `newLength` 小于 `ArrayBuffer` 的当前 `byteLength`

+ 参数

  + `newLength`

    +  `ArrayBuffer` 要调整到的新的长度，以字节为单位

+ 返回值 无

+ 异常

  + `TypeError`

    + 如果 `ArrayBuffer` 已分离或不可调整大小，则抛出该错误

  + `RangeError`

    + 如果 `newLength` 大于该 `ArrayBuffer` 的 `maxByteLength` ，则抛出该错误

## 示例

+ 创建一个 8 字节缓冲区，该缓冲区可调整大小到的最大长度是 16 字节，然后检查其 resizable 属性，如果 resizable 返回 true 则调整其大小

  ```js
  const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

  if (buffer.resizable) {
    console.log("缓冲区大小是可调整的！");
    buffer.resize(12);
  }
  ```


