# Object.assign

## 作用

  - 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象

  - 如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。后来的源的属性将类似地覆盖早先的属性

  - 浅拷贝: `Object.assign()` 拷贝的是属性值。假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值

  - 它将返回目标对象

  - `Object.assign(target, ...sources)`

      - 目标对象(返回值) `target`

      - 源对象 `sources`

  - 示例

    ```javascript
    const object1 = {
      a: 1,
      b: 2,
      c: 3
    };
    const object2 = Object.assign({c: 4, d: 5}, object1);
    console.log(object2); //{ c: 3, d: 5, a: 1, b: 2 }
    ```

    ```javascript
    // 合并对象
    var o1 = { a: 1 };
    var o2 = { b: 2 };
    var o3 = { c: 3 };

    var obj = Object.assign(o1, o2, o3);
    console.log(obj); // { a: 1, b: 2, c: 3 }
    console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变
    ```

    ```javascript
    // 合并具有相同属性的对象
    var o1 = { a: 1, b: 1, c: 1 };
    var o2 = { b: 2, c: 2 };
    var o3 = { c: 3 };

    // 属性被后续参数中具有相同属性的其他对象覆盖
    var obj = Object.assign({}, o1, o2, o3);
    console.log(obj); // { a: 1, b: 2, c: 3 }
    ```
