# 模板引用ref

## 模板引用类型

+ 模板引用需要通过一个显式指定的泛型参数和一个初始值 `null` 来创建

+ 注意为了严格的类型安全，有必要在访问 `el.value` 时使用可选链或类型守卫
+ 这是因为直到组件被挂载前，这个 `ref` 的值都是初始的 `null`，并且在由于 `v-if` 的行为将引用的元素卸载时也可以被设置为 `null`

  ```html
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const el = ref<HTMLInputElement | null>(null)

  onMounted(() => {
    el.value?.focus()
  })
  </script>

  <template>
    <input ref="el" />
  </template>
  ```
