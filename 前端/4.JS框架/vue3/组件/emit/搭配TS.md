# 搭配TS

## 标注类型

*   在 `<script setup>` 中，`emit` 函数的类型标注可以通过运行时声明或类型声明进行

    ```vue
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

    ```javascript
    // 父组件
    <Comp @kk="handleClick"/>

    <script lang="ts" setup>
    const handleClick = (data) => {
      console.log(data)
    }
    </script>
    ```
