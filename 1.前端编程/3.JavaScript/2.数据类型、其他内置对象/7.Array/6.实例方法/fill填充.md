# fill

## 语法

+ `fill` 方法使用给定值，填充一个数组

  ```js
  ['a', 'b', 'c'].fill(7)
  // [7, 7, 7]

  new Array(3).fill(7)
  // [7, 7, 7]
  ```

+ `fill` 方法用于空数组的初始化非常方便

+ 数组中已有的元素，会被全部抹去

+ `fill` 方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置

  ```js
  // 从 1 号位开始，向原数组填充 7，到 2 号位之前结束
  ['a', 'b', 'c'].fill(7, 1, 2)
  // ['a', 7, 'c']
  ```

## 注意

+ 如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象

  ```js
  let arr = new Array(3).fill({name: "Mike"});
  arr[0].name = "Ben";
  arr
  // [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

  let arr = new Array(3).fill([]);
  arr[0].push(5);
  arr
  // [[5], [5], [5]]
  ```
