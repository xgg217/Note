# webgl中可用的类型化数组

## 概述

+ 为了绘制三维图形，WebGL通常需要同时处理大量相同类型的数据，例如顶点的坐标和颜色数据
+ 为了优化性能，WebGL为每种基本数据类型引入了一种特殊的数组（类型化数组）
+ 浏览器事先知道数组中的数据类型，所以处理起来也更加有效率

+ Int8Array
+ UInt8Array
+ Int16Array
+ UInt16Array
+ Int32Array
+ UInt32Array
+ Float32Array
+ Float64Array

## Int8Array

+ C语言中的数据类型： 8位整数型 signed char
+ 每个元素所占用字节数 1

## UInt8Array

+ C语言中的数据类型：8位无符号整数型 unsigned char
+ 每个元素所占用字节数 1

## Int16Array

+ C语言中的数据类型：16位整数型 signed short
+ 每个元素所占用字节数 2

## UInt16Array

+ C语言中的数据类型：16位无符号整数型 unsigned short
+ 每个元素所占用字节数 2

## Int32Array

+ C语言中的数据类型：32位整数型 signed int
+ 每个元素所占用字节数 4

## UInt32Array

+ C语言中的数据类型：32位无符号整数型 unsigned int
+ 每个元素所占用字节数 4

## Float32Array 推荐使用

+ C语言中的数据类型：单精度32位浮点数 float
+ 每个元素所占用字节数 4

## Float64Array

+ C语言中的数据类型：双精度64位浮点数 double
+ 每个元素所占用字节数 8

## 类型化数组的方法、属性和常量

+ 创建

  + 通过 new 运算符调用构造函数并传入数据而被创造出来

    ```js
    const ver = new Float32Array([
      0.0, 0.5, -0.5, -0.5, 0.5, -0.5
    ]);
    ```

  + 也可以通过指定数组元素的个数来创建一个空的类型化数组

    ```js
    const ver = new Float32Array(4);
    ```

+ `get(index)`

  + 获取第 `index` 个元素值

+ `set(index, value)`

  + 设置第 `index` 个元素的值为 `value`

+ `set(array, offset)`

  + 从第 `offset` 个元素开始将数组 array 中的值填充进去

+ `length`

  + 数组的长度

+ `BYTES_PER_ELEMENT`

  + 数组中每个元素所占的字节数

