# readonly

## 概述

+ 传入参数：普通对象（例：`{a: 1, b:2, c: { d: 3}}`） 或者 `proxy`

+ 返回值：新的对象代理

+ 作用：只能读取代理对象中的成员，不可修改

## 示例

+ 传入**普通对象**

  ```js
  import { readonly } from "vue";

  const imState = readonly({a:1, b:2, c: { d: 3}})

  window.imState = imState;
  console.log(imState); // 返回 Proxy 代理对象 {a:1, b:2, c: { d: 3}}

  imState.a = 11;
  console.log(imState); // 返回 Proxy 代理对象，重新设置无效 {a:1, b:2, c: { d: 3}}
  ```

+ 传入 `Proxy` 代理对象

  ```js
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

## 实际使用

+ readonly 的用途一般用于一些 hooks 暴露出来的变量，不想外界去修改

  + 封装 hooks：外界只能用变量，但是不能修改变量，这样大大保护了 hooks 内部的逻辑

  ```js
  interface IUser {
    name?: string;
    age?: number;
  }

  export const useExample = () => {
    const user:IUser = reactive({});

    const fetchEnum = async () => {
      // 模拟请求
      const res = await newPromise<IUser>(res => {
        res({name: 'xgg', age: 20})
      });

      user.name = res.name;
      user.age = res.age;
    }

    onMounte(() => {
      fetchEnum();
    })

    return {
      user: readonly(user)
    }
  }
  ```
