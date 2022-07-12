# getOwnPropertyDescriptors

## Object.keys()，Object.getOwnPropertyNames()

*   `Object.keys` 方法和 `Object.getOwnPropertyNames` 方法很相似，一般用来遍历对象的属性。

*   它们的参数都是一个对象，都返回一个数组，该数组的成员都是对象自身的（而不是继承的）所有属性名。

    ```javascript
    var o = {
      p1: 123,
      p2: 456
    };

    Object.keys(o)
    // ["p1", "p2"]

    Object.getOwnPropertyNames(o)
    // ["p1", "p2"]
    ```

*   它们的区别在于，`Object.keys` 方法只返回可枚举的属性（关于可枚举性的详细解释见后文），`Object.getOwnPropertyNames` 方法还返回不可枚举的属性名。

    ```javascript
    var a = ["Hello", "World"];

    Object.keys(a)
    // ["0", "1"]

    Object.getOwnPropertyNames(a)
    // ["0", "1", "length"]
    ```

## 建议

*   一般情况下，几乎总是使用 `Object.keys` 方法，遍历数组的属性。
