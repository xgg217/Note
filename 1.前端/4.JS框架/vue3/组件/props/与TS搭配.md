# 与TS搭配

## Props标注类型

*   当使用 `<script setup>` 时，这个 `defineProps()` 宏函数支持从它的参数中推导类型

    ```vue
    <script setup lang="ts">
    const props = defineProps({
      foo: { type: String, required: true },
      bar: Number
    })

    props.foo // string
    props.bar // number | undefined
    </script>
    ```

*   通过泛型参数来定义 prop 的类型通常更直接

    ```vue
    <script setup lang="ts">
    const props = defineProps<{
      foo: string
      bar?: number
    }>()
    </script>

    // 或者 将 prop 的类型移入一个单独的接口中
    <script setup lang="ts">
    interface Props {
      foo: string
      bar?: number
    }

    const props = defineProps<Props>()
    </script>

    ```

## 语法限制

*   接口或对象字面类型可以包含从其他文件导入的类型引用，但是，传递给 `defineProps` 的泛型参数本身**不能**是一个导入的类型：

    ```typescript
    import type { Props } from './other-file'

    // 不支持！报错--vue后续说会解决
    defineProps<Props>()
    // type argument passed to defineProps() must be a literal type, or a reference to an interface or literal type.
    ```

## 默认值

*   使用 `withDefaults`

    ```vue
    interface Props {
      msg?: string
      labels?: string[]
    }

    const props = withDefaults(defineProps<Props>(), {
      msg: 'hello',
      labels: () => ['one', 'two']
    })
    ```

*   当使用基于类型的声明时，我们失去了对 prop 定义默认值的能力。这可以通过目前实验性的[响应性语法糖](https://staging-cn.vuejs.org/guide/extras/reactivity-transform.html#reactive-props-destructure "响应性语法糖")来解决

    ```vue
    <script setup lang="ts">
      interface Props {
        msg: string
        count?: number
        foo?: string
      }

      const {
        msg,
        // 默认值正常可用
        count = 1,
        // 解构时命别名也可用
        // 这里我们就将 `props.foo` 命别名为 `bar`
        foo: bar
      } = defineProps<Props>()

      watchEffect(() => {
        // 会在 props 变化时打印
        console.log(msg, count, bar)
      })
    </script>
    ```
