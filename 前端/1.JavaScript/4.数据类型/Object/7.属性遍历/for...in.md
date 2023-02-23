# for...in

## 作用

+ 来遍历一个对象的全部属性

    ```js
    var o = {a: 1, b: 2, c: 3};

    for (var i in o) {
      console.log(o[i]);
    }
    // 1
    // 2
    // 3
    ```

## 返回值的顺序

+ Number：&#x20;

  + 负数：不进行排序，当作字符串处理

  + 小数：不进行排序，当作字符串处理

  + 正整数： 大于 0的整数会进行排序返回

+ String: 按照定义的顺序返回

+ Symbol：过滤，不返回

```js
const obj = {
  5: '5',
  b: 'b',
  a: 'a',
  0.2: '0.2',
  '-1': '-1',
  1: 'a',
  [Symbol('c')]: 'Symbol'
};

for (const key in obj) {
  console.log(key); // '1', '5', 'b', 'a', '0.2', '-1'

}
```

## 注意点

1. 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性

2. 它不仅遍历对象自身的属性，还遍历继承的属性。解决办法：使用 `hasOwnProperty` 方法

    ```js
    // name 是 Person 本身的属性
    function Person(name) {
      this.name = name;
    }

    // describe是Person.prototype的属性
    Person.prototype.describe = function () {
      return 'Name: '+this.name;
    };

    var person = new Person('Jane');

    // for...in循环会遍历实例自身的属性（name），
    // 以及继承的属性（describe）
    for (var key in person) {
      console.log(key);
    }
    // name
    // describe
    ```

## hasOwnProperty

+ 如果只想遍历对象本身的属性，可以使用 `hasOwnProperty` 方法，在循环内部判断一下是不是自身的属性

    ```js
    // name 是 Person 本身的属性
    function Person(name) {
      this.name = name;
    }

    // describe是Person.prototype的属性
    Person.prototype.describe = function () {
      return 'Name: '+this.name;
    };

    for (var key in person) {
      if (person.hasOwnProperty(key)) {
        console.log(key);
      }
    }
    // name
    ```
