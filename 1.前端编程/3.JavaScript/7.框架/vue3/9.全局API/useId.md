# useId

## 概述

+ useId()是一个 API，可用于生成每个应用程序的唯一 ID，这些 ID 保证在服务器和客户端渲染中保持稳定
+ 它们可用于生成表单元素和辅助功能属性的 ID，并且可以在 SSR 应用程序中使用，而不会导致激活不匹配

  ```html
  <script setup>
  import { useId } from 'vue'

  const id = useId()
  </script>

  <template>
    <form>
      <label :for="id">Name:</label>
      <input :id="id" type="text" />
    </form>
  </template>
  ```
