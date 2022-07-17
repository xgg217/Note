# TS

## 标注类型TS

*   ref 会根据初始化时的值推导其类型

    ```typescript
    import { ref } from 'vue'

    // 推导出的类型：Ref<number>
    const year = ref(2020)

    // 报错 TS Error: Type 'string' is not assignable to type 'number'.
    year.value = '2020'
    ```

*   指定类型

    ```typescript
    import { ref } from 'vue'
    import type { Ref } from 'vue'

    const year: Ref<string | number> = ref('2020')

    year.value = 2020 // 成功！

    ```

    ```typescript
    // 或者使用泛型
    // 得到的类型：Ref<string | number>
    const year = ref<string | number>('2020')

    year.value = 2020 // 成功！
    ```

*   如果你指定了一个泛型参数但没有给出初始值，那么最后得到的就将是一个包含 `undefined` 的联合类型

    ```typescript
    // 推导得到的类型：Ref<number | undefined>
    const n = ref<number>()
    ```

## 类型定义

*   定义

    ```typescript
    interface Ref<T> {
      value: T
    }

    function ref<T>(value: T): Ref<UnwrapRef<T>>

    ```
