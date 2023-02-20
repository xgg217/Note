# TS

## 概述

+ 接受一个 `getter` 函数，返回一个只读的响应式 ref 对象，即 `getter` 函数的返回值
+ 它也可以接受一个带有 `get` 和 `set` 函数的对象来创建一个可写的 `ref` 对象

## 类型定义

+ 定义

    ```ts
    // 只读
    function computed<T>(
      getter: () => T,
      debuggerOptions?: DebuggerOptions
    ): Readonly<Ref<Readonly<T>>>

    // 可写的
    function computed<T>(
      options: {
        get: () => T
        set: (value: T) => void
      },
      debuggerOptions?: DebuggerOptions
    ): Ref<T>
    ```

## 标注类型TS

1. 方式1：从其计算函数的返回值上推导出类型

  ```ts
  import { ref, computed } from 'vue'

  const count = ref(0)

  // 推导得到的类型：ComputedRef<number>
  const double = computed(() => count.value * 2)

  // => TS Error: Property 'split' does not exist on type 'number'
  const result = double.value.split('')
  ```

2. 方式2：可以通过泛型参数显式指定类型 **推荐**

  ```ts
  const double = computed<number>(() => {
    // 若返回值不是 number 类型则会报错
  })
  ```
