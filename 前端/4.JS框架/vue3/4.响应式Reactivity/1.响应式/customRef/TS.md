# TS

## TS类型

- 类型

    ```ts
    function customRef<T>(factory: CustomRefFactory<T>): Ref<T>

    type CustomRefFactory<T> = (
      track: () => void,
      trigger: () => void
    ) => {
      get: () => T
      set: (value: T) => void
    }
    ```
