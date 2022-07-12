# Object.getOwnPropertyNames

## 作用

*   `Object.keys` 方法和 `Object.getOwnPropertyNames` 方法都用来遍历对象的属性。

*   `Object.keys` 方法的参数是一个对象，返回一个数组。该数组的成员都是该对象自身的（而不是继承的）所有属性名。

    ```javascript
    // Object.keys
    var obj = {
      p1: 123,
      p2: 456
    };

    Object.keys(obj) // ["p1", "p2"]
    ```

    ```javascript
    // Object.getOwnPropertyNames
    var obj = {
      p1: 123,
      p2: 456
    };

    Object.getOwnPropertyNames(obj) // ["p1", "p2"]
    ```

## 与 Object.keys() 区别

*   对于一般的对象来说，`Object.keys()` 和 `Object.getOwnPropertyNames()` 返回的结果是一样的。

*   只有涉及不可枚举属性时，才会有不一样的结果。

*   `Object.keys` 方法只返回可枚举的属性，`Object.getOwnPropertyNames` 方法还返回不可枚举的属性名。

*   一般情况下，几乎总是使用 `Object.keys` 方法，遍历对象的属性
