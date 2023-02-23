# 原生DOM事件

## TS 标注

+ 原生的 DOM 事件标注类型

    ```ts
    <template>
      <input type="text" @change="handleChange" />
    </template>

    <script setup lang="ts">
    function handleChange(event: Event) {
      console.log((event.target as HTMLInputElement).value)
    }
    </script>
    ```
