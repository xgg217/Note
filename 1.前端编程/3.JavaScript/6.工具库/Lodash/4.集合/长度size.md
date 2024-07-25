# 长度

## size

+ `_.size(collection)`

  + 返回collection（集合）的长度，如果集合是类数组或字符串，返回其 length ；如果集合是对象，返回其可枚举属性的个数

  + 参数

    + collection (Array|Object): 要检查的集合

  + 返回值 (number): 返回集合的长度

  ```js
  _.size([1, 2, 3]);
  // => 3

  _.size({ 'a': 1, 'b': 2 });
  // => 2

  _.size('pebbles');
  // => 7
  ```

