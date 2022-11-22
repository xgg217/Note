# 由 Ref 组成的对象

## 概述

1. 可以在使⽤可组合的函数式，同时获得 `ref` 和 reactive` 的好处
2. 组合式函数中使用 `ref()` 而不是 `reactive()`

## 优点

+ 可以直接使⽤ ES6 解构其中的 Ref 使⽤
+ 根据使⽤⽅式，当想要⾃动解包的功能时，可以使⽤ `reactive` 将其转换为对象

## 示例

+ 示例1

  ```js
  import { ref, reactive } from 'vue'

  function useMouse() {
    return {
      x: ref(0),
      y: ref(0)
    }
  }

  const { x, y } = useMouse()
  const mouse = reactive(useMouse())
  mouse.x === x.value // true
  ```

+ 示例2

  ```js
  // x 和 y 是两个 ref
  const { x, y } = useMouse()
  ```

  ```js
  function usePos(){
    const pos = reactive({ x:0, y:0 });
    return toRefs(pos); //  {x: refObj, y: refObj}
  }

  function useBooks(){
    const books = ref([]);
    return {
      books // books is refObj
    }
  }

  function useLoginUser(){
    const user = readonly({
      isLogin: false,
      loginId: null
    });
    return toRefs(user); // { isLogin: refObj, loginId: refObj }  all ref is readonly
  }

  setup(){
    // 在setup函数中，尽量保证解构、展开出来的所有响应式数据均是ref
    return {
      ...usePos(),
      ...useBooks(),
      ...useLoginUser()
    }
  }
  ```
