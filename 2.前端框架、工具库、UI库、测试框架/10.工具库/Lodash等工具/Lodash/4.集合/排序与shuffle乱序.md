# 排序 与 乱序

## _.some(collection, [predicate=_.identity])

+ 通过 predicate（断言函数） 检查collection（集合）中的元素是否存在 任意 truthy（真值）的元素，一旦 predicate（断言函数） 返回 truthy（真值），遍历就停止。 predicate 调用3个参数：(value, index|key, collection)

## sortBy 排序

+ `_.sortBy(collection, [iteratees=[_.identity]])` 根据字段或条件 排序

  ```js
  var users = [  { 'user': 'fred', 'age': 48 },  { 'user': 'barney', 'age': 36 },  { 'user': 'fred', 'age': 40 },  { 'user': 'barney', 'age': 34 }  ];
  _.sortBy(users, function(o) { return o.user; });
  // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]    _.sortBy(users, ['user', 'age']);  // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]    _.sortBy(users, 'user', function(o) {  return Math.floor(o.age / 10);  });  // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
  ```

## shuffle 乱序

+ `_.shuffle(collection)` 创建一个被打乱值的集合

  + 参数

    + collection (Array|Object): 要打乱的集合

  + 返回值 (Array): 返回打乱的新数组

  ```js
  _.shuffle([1, 2, 3, 4]);
  // => [4, 1, 3, 2]
  ```
