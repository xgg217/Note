## object、Object 以及 {}

  - `Object`
  - `object`
  - `{}`

## Object

  - 在 TypeScript 中就表现为 Object 包含了所有的类型

    ```typescript
    // 对于 undefined、null、void 0 ，需要关闭 strictNullChecks
    const tmp1: Object = undefined;
    const tmp2: Object = null;
    const tmp3: Object = void 0;

    const tmp4: Object = 'linbudu';
    const tmp5: Object = 599;
    const tmp6: Object = { name: 'linbudu' };
    const tmp7: Object = () => {};
    const tmp8: Object = [];
    ```

  - 不建议使用

## object

  - object 的引入就是为了解决对 Object 类型的错误使用，它代表所有非原始类型的类型，即数组、对象与函数类型这些

    ```typescript
    const tmp17: object = undefined;
    const tmp18: object = null;
    const tmp19: object = void 0;

    const tmp20: object = 'linbudu';  // X 不成立，值为原始类型
    const tmp21: object = 599; // X 不成立，值为原始类型

    const tmp22: object = { name: 'linbudu' };
    const tmp23: object = () => {};
    const tmp24: object = [];
    ```

## {}

