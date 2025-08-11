# isJSONObject

+ 检查一个值是否是合法的JSON对象

+ 一个有效的JSON对象是一个具有字符串键和有效JSON值的对象

## API

+ `function isJSONObject(value: unknown): boolean;`

+ 参数

  + value (unknown): 要检查的值

+ 返回值

  + (boolean): 如果该值是JSON对象，则返回 `true` ，否则返回 `false`

  ```js
  console.log(isJSONObject({ nested: { boolean: true, array: [1, 2, 3], string: 'test', null: null } })); // true
  console.log(isJSONObject({})); // true
  console.log(isJSONObject({ regexp: /test/ })); // false
  console.log(isJSONObject(123)); // false
  ```
