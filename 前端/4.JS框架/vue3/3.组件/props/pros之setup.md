# pros之setup

## props

  - 使用 `props` 需要用到 `defineProps` 来定义，具体用法跟之前的 `props` 写法类似

  - 基础用法

    ```js
    <script lang="ts" setup>
    // 不需要引用
    // import { defineProps } from "vue";
    const props = defineProps(['userInfo', 'gameId']);
    </script>
    ```

  - 构造函数进行检查 给props定义类型：

    ```js
    const props = defineProps({
      gameId: Number,
      userInfo: {
          type: Object,
          required: true
      }
    });
    ```

  - 使用类型注解进行检查

    ```js
    defineProps<{
      name: string
      phoneNumber: number
      userInfo: object
      tags: string[]
    }>()
    ```

    ```js
    // 可以先定义好类型：
    interface UserInfo {
      id: number,
      name: string,
      age: number
    }

    defineProps<{
      name: string
      userInfo: UserInfo
    }>()
    ```

  - 使用类型声明时的默认 props 值

    ```js
    interface Props {
      msg?: string
      labels?: string[]
    }

    const props = withDefaults(defineProps<Props>(), {
      msg: 'hello',
      labels: () => ['one', 'two']
    })
    ```
