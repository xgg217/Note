# 数组差异

## difference

+ `_.difference(array, [values])`

+ 参数

  + array (Array): 要检查的数组
  + [values] (...Array): 排除的值

+ 返回值 Array

  + 返回一个过滤值后的新数组

  ```js
  _.difference([3, 2, 1], [4, 2]);
  // => [3, 1]
  ```

  ```js
  const arr1 = [1,2,3,4,5];
  const arr2 = [3,4,5,6,7];
  _.difference(arr1, arr2);
  // => [1, 2]
  ```

+ 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中
+ （注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用SameValueZero做相等比较

  + 结果值的顺序是由第一个数组中的顺序确定

+ 注意: 不像 _.pullAll，这个方法会返回一个新数组

## differenceBy

+ `_.differenceBy(array, [values], [iteratee=_.identity])`

+ 参数

  + array (Array): 要检查的数组
  + [values] (...Array): 排除的值
  + [iteratee=_.identity] (Array|Function|Object|string):   iteratee 调用每个元素

+ 返回值：(Array): 返回一个过滤值后的新数组

  ```js
  _.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
  // => [3.1, 1.3]

  // 用于比较的键名 x
  _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
  // => [{ 'x': 2 }]

  ```

+ 这个方法类似_.difference ，除了它接受一个 iteratee （注：迭代器）， 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（注：首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。

+ 不像_.pullAllBy，这个方法会返回一个新数组。

## differenceWith

+ `_.differenceWith(array, [values], [comparator])`

+ 参数

  + array (Array): 要检查的数组
  + [values] (...Array): 排除的值
  + [comparator] (Function): comparator 调用每个元素

    + 函数必须返回一个布尔值，用于指示两个元素是否相等

+ 返回值(Array): 返回一个过滤值后的新数组

  ```js
  var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

  _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
  // => [{ 'x': 2, 'y': 1 }]
  ```

  ```js
  var array1 = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 3 }, { x: 3, y: 4}];
  var array2 = [{ 'x': 1, 'y': 2 }, { 'x': 4, 'y': 5 }, { x: 5, y: 6}];

  // 包含在 array1 中，但不在 array2 的值
  _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
  ```
