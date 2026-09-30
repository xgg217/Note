# reverse 与 toReversed 反转数组

## reverse 作用

+ `reverse` 方法用于颠倒数组中元素的顺序，返回改变后的数组

  ```js
  var a = ['a', 'b', 'c'];

  a.reverse() // ["c", "b", "a"]
  a // ["c", "b", "a"]
  ```

## reverse 注意

+ 会改变原数组

## toReversed

+ 不会改变原数组：`toReversed()` 是 `reverse()` 方法的非破坏性版本

  ```js
  const arr = ['a', 'b', 'c'];

  const result = arr.toReversed();
  console.log(result); // ['c', 'b', 'a']
  console.log(arr);    // ['a', 'b', 'c']
  ```
