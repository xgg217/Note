# v-show

## 概述

+ `v-show` 的切换靠的是 CSS 的 `display` 属性，当值为 `false` 的时候，会将 `display` 属性设置为 `none`

  ```html
  <template>
  <div v-if="isShow">使用 v-if 来做条件渲染</div>
    <div v-show="isShow">使用 v-show 来做条件渲染</div>
  </template>

  <script setup>
  import { ref } from 'vue'
  const isShow = ref(true)
  setTimeout(() => {
    isShow.value = false
  }, 2000)
  </script>
  ```
