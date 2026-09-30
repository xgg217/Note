# sort 与 toSorted

## sort 语法

+ 默认排序顺序是根据字符串 `Unicode` 码点

+ 返回值：返回排序后的数组。原数组已经被排序后的数组代替

+ 作用：数组的元素进行排序，并返回数组

## sort 注意

+ 改变原数组

## 排序稳定性

+ 先的 ECMAScript 没有规定，`Array.prototype.sort()` 的默认排序算法是否稳定，留给浏览器自己决定，这导致某些实现是不稳定的

+ ES2019 明确规定，`Array.prototype.sort()` 的默认排序算法必须稳定

+ 这个规定已经做到了，现在 JavaScript 各个主要实现的默认排序算法都是稳定的

## sort 示例

+ 示例

  ```js
  var numbers = [4, 2, 5, 1, 3];
  numbers.sort(function(a, b) {
    return a - b;
  });
  console.log(numbers);// [1, 2, 3, 4, 5]
  ```

+ 对象可以按照某个属性排序

  ```js
  var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
  ];

  // 按value大小排序
  items.sort(function (a, b) {
    return (a.value - b.value)
  });

  // 按照 字母
  items.sort(function(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // 按name排序
    return 0;
  });
  ```

+ 给有序数组乱序

  ```js
  var arr =[1,2,3,4,5,6,7,8,9];
  arr.sort(function(a,b) {
    return (Math.random()-0.5);
  });
  ```

## toSorted()

+ `toSorted()` 是 `sort()` 方法的非破坏性版本

  ```js
  const arr = ['c', 'a', 'b'];
  const result = arr.toSorted();
  console.log(result);  // ['a', 'b', 'c']
  console.log(arr);     // ['c', 'a', 'b']
  ```
