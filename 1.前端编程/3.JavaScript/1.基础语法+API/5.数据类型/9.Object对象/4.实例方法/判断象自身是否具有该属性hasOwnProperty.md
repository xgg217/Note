# Object.prototype.hasOwnProperty()

## 注意

+ 不推荐使用
+ 建议使用 `Object.hasOwn()`

## 作用

+ `Object.prototype.hasOwnProperty` 方法接受一个字符串作为参数，返回一个布尔值，表示该实例对象自身是否具有该属性

  ```js
  // 对象obj自身具有p属性，所以返回true
  // toString属性是继承的，所以返回false
  var obj = {
    p: 123
  };

  obj.hasOwnProperty('p') // true
  obj.hasOwnProperty('toString') // false
  ```
