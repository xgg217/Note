# 使用key

## 概述

+ 有些时候会存在这么一种情况，就是不存在元素的进入和离开，仅仅是文本节点的更新，此时就不会发生过渡

+ 要解决这种情况也很简单，添加上 `key` 即可

  ```html
  <template>
    <div>
      <button @click="show = !show">切换</button>
      <Transition name="fade" mode="out-in">
        <p :key="message">{{ message }}</p>
      </Transition>
    </div>
  </template>

  <script setup>
  import { ref, computed } from 'vue'
  const show = ref(true)
  const message = computed(() => {
    return show.value ? 'Hello' : 'World'
  })
  </script>

  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
  </style>
  ```
