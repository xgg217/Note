# 循环

## 循环方法

+ for 方法

  ```js
  for(valr i = 0; i < 5; i++) {
    console.log(5)
  }
  ```

+ 使用数组和 apply方法

  ```js
  Array.apply(null,Array(5)).forEach(() => {

  })
  ```

+ lodash

  ```js
  _.times(5, (a) => {
    console.log(a)
  });
  ```

## times

+ `_.times(n, [iteratee=_.identity])` 调用 iteratee n 次，每次调用返回的结果存入到数组中。 iteratee 调用入1个参数： (index)

  + 参数

    + n (number): 调用 iteratee 的次数。
    + `[iteratee=_.identity]` (Function): 每次迭代调用的函数

  + 返回值 (Array): 返回调用结果的数组

  ```js
  const arr = _.times(5, (a) => {
    console.log(a)
    return [1]
  });
  // log 0,1,2,3,4
  // arr  [1, 1, 1, 1, 1]

  _.times(3, String);
  // => ['0', '1', '2']

  _.times(4, _.constant(0));
  // => [0, 0, 0, 0]
  ```

+ js 原生方法

  ```js
  _.times(5, (a) => {
    console.log(a)
  });

  // 等于
  for(valr i = 0; i < 5; i++) {
    console.log(5)
  }

  ```
