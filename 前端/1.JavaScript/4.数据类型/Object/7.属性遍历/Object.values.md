# Object.values

## 作用

  - `Object.values` 方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值

    ```js
    const obj = { foo: 'bar', baz: 42 };
    Object.values(obj)
    // ["bar", 42]
    ```

## 返回值的顺序

  - 返回的属性顺序与 `for in` 一样

## 只返回对象自身的可遍历属性

  - `Object.values` 只返回对象自身的可遍历属性

    ```js
    const obj = Object.create({}, {p: {value: 42}});
    Object.values(obj) // []
    ```

  - `Object.create` 方法的第二个参数添加的对象属性（属性 `p`），如果不显式声明，默认是不可遍历的，因为p的属性描述对象的 `enumerable` 默认是 `false` ，`Object.values` 不会返回这个属性

  - 只要把 `enumerable` 改成 `true` ，`Object.values` 就会返回属性 `p` 的值

    ```js
    const obj = Object.create({}, {p:
      {
        value: 42,
        enumerable: true
      }
    });
    Object.values(obj) // [42]
    ```

## 属性名为 Symbol

  - `Object.values` 会过滤属性名为 `Symbol` 值的属性

    ```js
    Object.values({ [Symbol()]: 123, foo: 'abc' });
    // ['abc']
    ```
