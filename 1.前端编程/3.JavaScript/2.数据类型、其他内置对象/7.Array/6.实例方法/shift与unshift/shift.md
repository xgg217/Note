# shift

## 作用

+ `shift` 方法用于删除数组的第一个元素，并返回该元素

  ```js
  var a = ['a', 'b', 'c'];

  a.shift() // 'a'
  a // ['b', 'c']
  ```

+ `shift` 方法可以遍历并清空一个数组

  ```js
  var list = [1, 2, 3, 4, 5, 6];
  var item;

  while (item = list.shift()) {
    console.log(item);
  }

  list // []
  ```

## 注意

+ 会改变原数组
