# 分组

## groupBy

+ `_.groupBy(collection,[iteratee])`

  + collection (Array|Object) : 一个用来迭代的集合
  + `[iteratee=_.identity] (Array|Function|Object|string)` : 这个迭代函数用来转换key

  ```js
  _.groupBy([6.1, 4.2, 6.3], Math.floor);
  // => { '4': [4.2], '6': [6.1, 6.3] }

  // The `_.property` iteratee shorthand.
  _.groupBy(['one', 'two', 'three'], 'length');
  // => { '3': ['one', 'two'], '5': ['three'] }
  ```
