# 深拷贝 与 浅拷贝

## clone 浅拷贝

+ `_.clone(value)` 创建一个 value 的浅拷贝

  ```js
  const obj1 = [{a: 1 }]
  const obj2 = _.clone(obj1)
  console.log(obj1 === obj2) // falseconsole.log(obj1.a === obj2.a) // true
  ```


## cloneDeep 深拷贝

+ `_.cloneDeep(value)`

  ```js
  var objects = [{ 'a': 1 }, { 'b': 2 }];

  var deep = _.cloneDeep(objects);
  console.log(deep[0] === objects[0]);
  // => false
  ```