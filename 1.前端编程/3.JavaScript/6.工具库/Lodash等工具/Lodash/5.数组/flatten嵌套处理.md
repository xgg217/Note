# 数组嵌套处理

## _.flatten(array)

+ 减少一级array嵌套深度

+ 参数

  + array (Array): 需要减少嵌套层级的数组

+ 返回值

  + (Array): 返回减少嵌套层级后的新数组

  ```js
  _.flatten([1, [2, [3, [4]], 5]]);
  // => [1, 2, [3, [4]], 5]
  ```

## _.flattenDeep(array)

+ 将array递归为一维数组

+ 参数

  + array (Array): 需要处理的数组

+ 返回值

  + (Array): 返回一个的新一维数组

  ```js
  _.flattenDeep([1, [2, [3, [4]], 5]]);
  // => [1, 2, 3, 4, 5]
  ```

## _.flattenDepth(array, [depth=1])

+ 根据 depth 递归减少 array 的嵌套层级

+ 参数

  + array (Array): 需要减少嵌套层级的数组。
  + [depth=1] (number):最多减少的嵌套层级数。

+ 返回值

  + (Array): 返回减少嵌套层级后的新数组


  ```js
  var array = [1, [2, [3, [4]], 5]];

  _.flattenDepth(array, 1);
  // => [1, 2, [3, [4]], 5]

  _.flattenDepth(array, 2);
  // => [1, 2, 3, [4], 5]
  ```
