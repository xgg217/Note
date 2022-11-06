# TS

## 类型定义

- 类型定义

    ```ts
    function reactive<T extends object>(target: T): UnwrapNestedRefs<T>
    ```

## 标注类型TS 默认推导

- `reactive()` 也会隐式地从它的参数中推导类型

    ```ts
    import { reactive } from 'vue'

    // 推导得到的类型：{ title: string }
    const book = reactive({ title: 'Vue 3 指引' })
    ```

## 标注类型TS 泛型

  1. 直接给声明的变量添加类型 **推荐**

    ```ts
    import { reactive } from 'vue'

    interface User {
      name: string
      age: string | number
    }

    const user:User = reactive({
      name:"前端开发爱好者",
      age:'20'
    })
    ```

      ```ts
      // 不推荐使用
      const book = reactive<Book>({ title: 'Vue 3 指引' });

      ```

  2. 通过泛型参数的形式来给 `reactive()` 增加类型

    - 不推荐使用 `reactive()` 的泛型参数，因为处理了深层次 ref 解包的返回值与泛型参数的类型不同

    ```ts
    import { reactive } from 'vue'

    interface User {
      name: string
      age: string | number
    }

    const user = reactive<User>({
      name:"前端开发爱好者",
      age:'20'
    })
    ```
