# readonly

## 概述

  - 传入参数：普通对象（例：`{a: 1, b:2, c: { d: 3}}`） 或者 `proxy`

  - 返回值：新的对象代理

  - 作用：只能读取代理对象中的成员，不可修改

## 示例

  - 传入**普通对象**

    ```javascript
    import { readonly } from "vue";

    const imState = readonly({a:1, b:2, c: { d: 3}})

    window.imState = imState;
    console.log(imState); // 返回 Proxy 代理对象 {a:1, b:2, c: { d: 3}}

    imState.a = 11;
    console.log(imState); // 返回 Proxy 代理对象，重新设置无效 {a:1, b:2, c: { d: 3}}
    ```

  - 传入 `Proxy` 代理对象

    ```javascript
    import { reactive, readonly } from "vue";

    const state = reactive({a:1, b:2, c: { d: 3}});

    const imState = readonly(state); // 返回新的代理

    console.log(imState === state); // false

    window.imState = imState;
    console.log(imState); // 返回 Proxy 代理对象 {a:1, b:2, c: { d: 3}}

    imState.a = 11;
    console.log(imState); // 返回 Proxy 代理对象，重新设置无效 {a:1, b:2, c: { d: 3}}

    state.c.d = 100;
    console.log(state); // 改变内容 {a:1, b:2, c: { d: 100}}
    console.log(imState); // 也会跟着改变内容 {a:1, b:2, c: { d: 100}}
    ```
