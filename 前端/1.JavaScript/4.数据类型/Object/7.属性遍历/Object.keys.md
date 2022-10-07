# Object.keys

## 作用

  - ES5 引入了 `Object.keys` 方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（ `enumerable` ）属性的键名

    ```js
    var obj = { foo: 'bar', baz: 42 };
    Object.keys(obj)
    // ["foo", "baz"]
    ```

  - 返回值：一个表示给定对象的所有可枚举属性的字符串数组

## 返回值的顺序

  - 返回的属性顺序与 `for in` 一样

## 详细使用

  - ES2017 引入了跟 `Object.keys` 配套的 `Object.values` 和 `Object.entries`，作为遍历一个对象的补充手段，供 `for...of` 循环使用

    ```js
    let {keys, values, entries} = Object;
    let obj = { a: 1, b: 2, c: 3 };

    for (let key of keys(obj)) {
      console.log(key); // 'a', 'b', 'c'
    }

    for (let value of values(obj)) {
      console.log(value); // 1, 2, 3
    }

    for (let [key, value] of entries(obj)) {
      console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
    }
    ```
