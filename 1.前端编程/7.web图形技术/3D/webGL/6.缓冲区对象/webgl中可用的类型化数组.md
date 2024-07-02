# webgl中可用的类型化数组

## 概述

+ Int8Array
+ UInt8Array
+ Int16Array
+ UInt16Array
+ Int32Array
+ UInt32Array
+ Float32Array
+ Float64Array

## Int8Array

+ 8位整数型 signed char
+ 每个元素所占用字节数 1

## UInt8Array

+ 8位无符号整数型 unsigned char
+ 每个元素所占用字节数 1

## Int16Array

+ 16位整数型 signed short
+ 每个元素所占用字节数 2

## UInt16Array

+ 16位无符号整数型 unsigned short
+ 每个元素所占用字节数 2

## Int32Array

+ 32位整数型 signed int
+ 每个元素所占用字节数 4

## UInt32Array

+ 32位无符号整数型 unsigned int
+ 每个元素所占用字节数 4

## Float32Array 推荐使用

+ 单精度32位浮点数 float
+ 每个元素所占用字节数 4

  ```js
  new Float32Array([
    50,50,
    50,100,
    100,100
  ])
  ```

## Float64Array

+ 双精度64位浮点数 double
+ 每个元素所占用字节数 8


