# TS

## 标注类型TS

  - `reactive()` 也会隐式地从它的参数中推导类型

    ```typescript
    import { reactive } from 'vue'

    // 推导得到的类型：{ title: string }
    const book = reactive({ title: 'Vue 3 指引' })
    ```

  - 要显式地标注一个 `reactive` property 的类型，我们可以使用接口

    ```typescript
    import { reactive } from 'vue'

    interface Book {
      title: string
      year?: number
    }

    const book: Book = reactive({ title: 'Vue 3 指引' })
    ```

  - 注意：不推荐使用 `reactive()` 的泛型参数，因为处理了深层次 ref 解包的返回值与泛型参数的类型不同

    ```typescript
    // 不推荐使用
    const book = reactive<Book>({ title: 'Vue 3 指引' });

    ```
