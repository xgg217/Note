# 条件渲染

## v-if

+ Vue 中为条件渲染提供了一组内置的指令：

  + `v-if`
  + `v-else`
  + `v-else-if`

  ```html
  <template>
    <div v-if="type === 1">晴天</div>
    <div v-else-if="type === 2">阴天</div>
    <div v-else-if="type === 3">雨天</div>
    <div v-else-if="type === 4">下雪</div>
    <div v-else>不知道什么天气</div>
  </template>

  <script setup>
  import { ref } from 'vue'
  const type = ref(1)
  setInterval(() => {
    type.value = Math.floor(Math.random() * 5 + 1)
  }, 3000)
  </script>
  ```

+ 如果是要切换多个元素，那么可以将多个元素包裹在 template 的标签里面，该标签是不会渲染的

  ```html
  <template>
    <template v-if="type === 1">
      <div>晴天</div>
      <p>要出去旅游</p>
      <p>玩的开心</p>
    </template>
    <template v-else-if="type === 2">
      <div>阴天</div>
      <p>呆在家里吧</p>
      <p>好好看一本书</p>
    </template>
    <template v-else-if="type === 3">
      <div>雨天</div>
      <p>阴天适合睡觉</p>
      <p>好好睡一觉吧</p>
    </template>
    <template v-else-if="type === 4">
      <div>下雪</div>
      <p>下雪啦，我们出去堆雪人吧</p>
      <p>下雪啦，我们出去打雪仗吧</p>
    </template>
    <div v-else>不知道什么天气</div>
  </template>

  <script setup>
  import { ref } from 'vue'
  const type = ref(1)
  setInterval(() => {
    type.value = Math.floor(Math.random() * 5 + 1)
  }, 3000)
  </script>
  ```
