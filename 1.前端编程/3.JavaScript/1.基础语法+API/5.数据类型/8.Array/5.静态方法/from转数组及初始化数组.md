# Array.from

## 概述

+ 从可迭代或类数组对象创建一个新的浅拷贝的数组实例

## API

+ API

  ```js
  Array.from(arrayLike)
  Array.from(arrayLike, mapFn)
  Array.from(arrayLike, mapFn, thisArg)
  ```

+ 参数

  + arrayLike 想要转换成数组的类数组或可迭代对象

    + 类数组（带有 length 属性和索引元素的对象）
    + 可迭代对象（例如 Map 和 Set 对象）

  + mapFn `[可选]` 调用数组每个元素的函数。如果提供，每个将要添加到数组中的值首先会传递给该函数，然后将 mapFn 的返回值增加到数组中。使用以下参数调用该函数

    + element 数组当前正在处理的元素
    + index 数组当前正在处理的元素的索引

      ```js
      let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
      };
      Array.from(arrayLike, x => x * x);
      // 等同于
      Array.from(arrayLike).map(x => x * x);

      Array.from([1, 2, 3], (x) => x * x)
      // [1, 4, 9]
      ```

      ```js
      Array.from({ length: 2 }, () => 'jack')
      // ['jack', 'jack']
      ```

  + thisArg `[可选]` 执行 mapFn 时用作 this 的值

+ 返回值 一个新的数组实例

## 示例

+ 从字符串构建数组

  ```js
  Array.from("foo");
  // [ "f", "o", "o" ]
  ```

+ 从 Set 构建数组

  ```js
  const set = new Set(["foo", "bar", "baz", "foo"]);
  Array.from(set);
  // [ "foo", "bar", "baz" ]
  ```

+ 从 Map 构建数组

  ```js
  const map = new Map([
    [1, 2],
    [2, 4],
    [4, 8],
  ]);
  Array.from(map);
  // [[1, 2], [2, 4], [4, 8]]

  const mapper = new Map([
    ["1", "a"],
    ["2", "b"],
  ]);
  Array.from(mapper.values());
  // ['a', 'b'];

  Array.from(mapper.keys());
  // ['1', '2'];

  ```

+ 快速初始化

  ```js
  const arr = Array.from({ length: 10 }, (x, i) => {
    return i
  });
  console.log(arr); // [0, 1, 2, 3, 4,5, 6, 7, 8, 9]
  ```

+ 类数组 转数组

  ```js
  // 类数组
  let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
  };

  // ES5的写法
  var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

  // ES6的写法
  let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
  ```

  ```js
  function f() {
    return Array.from(arguments);
  }
  f(1, 2, 3);
  // [ 1, 2, 3 ]
  ```
