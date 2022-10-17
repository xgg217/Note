# Map与数组

## Map 转为 数组

- `Map` 转为数组最方便的方法，就是使用扩展运算符（`...`）

    ```js
    const m2 = new Map([[2,2], ['sd', 'sdf'], [1]]);
    console.log([...m2]); // [[2,2], ['sd', 'sdf'], [1]]
    ```

## 数组 转为 Map

- 将数组传入 `Map` 构造函数，就可以转为 `Map`

    ```js
    new Map([
      [true, 7],
      [{foo: 3}, ['abc']]
    ])

    // Map {
    //   true => 7,
    //   Object {foo: 3} => ['abc']
    // }
    ```
