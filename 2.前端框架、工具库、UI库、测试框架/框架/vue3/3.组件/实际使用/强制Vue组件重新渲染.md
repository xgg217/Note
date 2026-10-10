# 强制 Vue 组件重新渲染

## 使用场景

+ 使用组件 `key`

  ```html
  <script setup>
    const componentKey = ref(0);
    const forceRender = () => {
      componentKey.value += 1;
    }
  </script>

  <template>
    <MyComponent :key=componentKey />
    <button @click="forceRender">强制重绘</button>
  </template>
  ```
