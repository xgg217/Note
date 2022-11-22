# 重复使⽤已有 Ref

## 概述

+ 如果将⼀个 `ref` 传递给 `ref()` 构造函数，它将会原样将其返回

  ```js
  const foo = ref(1) // Ref<1>

  const bar = ref(foo) // Ref<1>
  foo === bar // true
  ```

  ```ts
  function useFoo(foo: Ref<string> | string) {
    // 不需要额外操作
    const bar = isRef(foo) ? foo : ref(foo)
    // 与上⾯的代码等效
    const bar = ref(foo)
    /*...*/
  }
  ```
