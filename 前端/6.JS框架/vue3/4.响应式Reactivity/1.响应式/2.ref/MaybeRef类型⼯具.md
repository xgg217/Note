# MaybeRef 类型⼯具

## 代码

+ 代码

  ```js
  import type { Ref } from 'vue'

  type MaybeRef<T> = Ref<T> | T
  ```

## 实际使用

+ 示例1

  ```js
  export function useTimeAgo(
    time: Date | number | string | Ref<Date | number | string>,
  ) {
    return computed(() => someFormating(unref(time)))
  }
  ```

+ 示例2

  ```js
  import { computed, unref, Ref } from 'vue'

  type MaybeRef<T> = Ref<T> | T

  export function useTimeAgo(
    time: MaybeRef<Date | number | string>,
  ) {
    return computed(() => someFormating(unref(time)))
  }
  ```

## `ref` 与 `unref`

+ `MaybeRef<T>` 可以很好的配合 `ref` 和 `unref` 进⾏使⽤
+ 使⽤ `ref()` 当你想要想要将其标准化为 Ref
+ 使⽤ `unref()` 当你想要获得其值

  ```js
  type MaybeRef<T> = Ref<T> | T

  function useBala<T>(arg: MaybeRef<T>) {
    const reference = ref(arg) // 得到 ref
    const value = unref(arg) // 得到值
  }
  ```
