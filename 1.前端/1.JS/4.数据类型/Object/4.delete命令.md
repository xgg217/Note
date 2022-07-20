# delete命令

## 作用

  - `delete` 命令用于删除对象的属性，删除成功后返回 `true`。

    ```javascript
    var o = {p: 1};
    Object.keys(o) // ["p"]

    delete o.p // true
    o.p // undefined
    Object.keys(o) // []
    ```

  - `delete` 命令会返回 `false`，那就是该属性存在，且不得删除

    ```javascript
    var o = Object.defineProperty({}, 'p', {
      value: 123,
      configurable: false
    });

    o.p // 123
    delete o.p // false
    ```

## 性能问题

  - `delete` 关键字用于从对象中删除属性。这个关键字的性能表现不怎么好，预计它将在未来的更新中修复。

  - 解决方案1：你可以简单地将不需要的属性设置为 `undefined`

    ```javascript
    const object = {name:"Jane Doe", age:43};
    object.age = undefined;
    ```

  - 解决方案2：使用 `Map`  对象

## 注意

  - 删除一个不存在的属性，`delete` 不报错，而且返回 `true`。

    ```javascript
    var o = {};
    delete o.p // true
    ```
