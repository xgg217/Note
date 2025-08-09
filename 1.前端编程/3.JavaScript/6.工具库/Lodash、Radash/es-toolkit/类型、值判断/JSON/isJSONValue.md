# isJSONValue

## 概述

+ 检查给定值是否为有效的JSON值。

+ 一个有效的JSON值可以是：

  + 一个JSON对象 （一个具有字符串键和有效JSON值的对象）
  + 一个JSON数组 （一个有效JSON值的数组）
  + 字符串 (string)
  + 数字 (number)
  + 布尔值 (boolean)
  + null

## API

+ `function isJSONValue(value: unknown): value is Record<string, any> | any[] | string | number | boolean | null;`

+ 参数

  + value (unknown): 要检查的值。

+ 返回值

  + (value is Record<string, any> | any[] | string | number | boolean | null): 如果值是有效的JSON值，则为 true，否则为 false。

  ```js
  console.log(isJSONValue(null)); // true
  console.log(isJSONValue({ key: 'value' })); // true
  console.log(isJSONValue([1, 2, 3])); // true
  console.log(isJSONValue('Hello')); // true
  console.log(isJSONValue(42)); // true
  console.log(isJSONValue(true)); // true
  console.log(isJSONValue(undefined)); // false
  console.log(isJSONValue(() => {})); // false
  ```
