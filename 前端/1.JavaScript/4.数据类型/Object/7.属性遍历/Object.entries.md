# Object.entries

## 作用

+ `Object.entries()` 方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（ `enumerable` ）属性的键值对数组

    ```js
    const obj = { foo: 'bar', baz: 42 };
    Object.entries(obj)
    // [ ["foo", "bar"], ["baz", 42] ]
    ```

## 用途

1. 遍历对象的属性

2. 将对象转为真正的 `Map` 结构

+ 除了返回值不一样，该方法的行为与 `Object.values` 基本一致

## 属性名为 Symbol

+ 如果原对象的属性名是一个 `Symbol` 值，该属性会被忽略

    ```js
    Object.entries({ [Symbol()]: 123, foo: 'abc' });
    // [ [ 'foo', 'abc' ] ]
    ```

## 遍历对象的属性

+ 遍历对象的属性

    ```js
    let obj = { one: 1, two: 2 };
    for (let [k, v] of Object.entries(obj)) {
      console.log(
        `${JSON.stringify(k)}: ${JSON.stringify(v)}`
      );
    }
    // "one": 1
    // "two": 2
    ```

## 转为 Map

+ 转为 `Map`

    ```js
    const obj = { foo: 'bar', baz: 42 };
    const map = new Map(Object.entries(obj));
    map // Map { foo: "bar", baz: 42 }
    ```
