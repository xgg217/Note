# defineEmits

## 概述

- 为了在声明 `emits` 选项时获得完整的类型推断支持，我们可以使用 `defineEmits` API，它将自动地在 `script setup` 中使用

## 标注类型

  1. `defineEmits()` 标注类型直接推荐泛型形式

    ```ts
    // 子组件
    <script setup lang="ts">
    // 运行时
    const emit = defineEmits(['change', 'update'])

    // 基于类型
    const emit = defineEmits<{
      (e: 'change', id: number): void
      (e: 'update', value: string): void
    }>()
    </script>
    ```

    ```js
    // 父组件
    <Comp @update="handleClick"/>

    <script lang="ts" setup>
    const handleClick = (data) => {
      console.log(data)
    }
    </script>
    ```
