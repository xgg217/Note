# isJSONArray

+ 检查给定值是否是有效的 JSON 数组。

+ 有效的 JSON 数组定义为所有项都是有效 JSON 值的数组

## API

+ `function isJSONArray(value: unknown): value is any[];`

+ 参数

  + value (unknown): 要检查的值。

+ 返回值

  + (value is any[]): 如果该值是有效的 JSON 数组则为 true，否则为 false。

  ```js
  console.log(isJSONArray([1, 2, 3])); // true
  console.log(isJSONArray(['string', null, true])); // true
  console.log(isJSONArray([1, 2, () => {}])); // false
  console.log(isJSONArray('not an array')); // false
  ```
