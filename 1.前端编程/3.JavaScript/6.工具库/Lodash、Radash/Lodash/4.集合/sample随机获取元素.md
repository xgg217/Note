# sample 获取元素

## _.sample(collection)

+ 从collection（集合）中获得一个随机元素

+ 参数

  + collection (Array|Object): 要取样的集合

+ 返回值 (*): 返回随机元素

  ```js
  _.sample([1, 2, 3, 4]);
  // => 2
  ```

  ```js
  const obj = {
    a: {a: 1},
    b: {b: 1},
    c: {c: 1}
  }

  _.sample(obj);
  // 随机返回 value 例如 {b: 1}
  ```

## sampleSize

+ `_.sampleSize(collection, [n=1])` 从collection（集合）中获得 n 个随机元素

+ 参数

  + collection (Array|Object): 要取样的集合
  + `[n=1] (number)`: 取样的元素个数

+ 返回值(Array): 返回随机元素

  ```js
  _.sampleSize([1, 2, 3], 2);
  // => [3, 1]

  _.sampleSize([1, 2, 3], 4);
  // => [2, 3, 1]
  ```

  ```js
  const obj = {
    a: {a: 1},
    b: {b: 1},
    c: {c: 1}
  }

  _.sample(obj);
  // 随机返回 value 例如 [{b: 1},{a:1}]
  ```

