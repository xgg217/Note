# nextTick

## 概述

+ 等待下一次 DOM 更新刷新的工具方法

+ 当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个“tick”才一起执行
+ 这样是为了确保每个组件无论发生多少状态改变，都仅执行一次更新

+ `nextTick()` 可以在状态改变后立即使用，以等待 DOM 更新完成
+ 你可以传递一个回调函数作为参数，或者 `await` 返回的 `Promise`

  ```html
  <script setup>
  import { ref, nextTick } from 'vue'

  const count = ref(0)

  async function increment() {
    count.value++

    // DOM 还未更新
    console.log(document.getElementById('counter').textContent) // 0

    await nextTick()
    // DOM 此时已经更新
    console.log(document.getElementById('counter').textContent) // 1
  }
  </script>

  <template>
    <button id="counter" @click="increment">{{ count }}</button>
  </template>
  ```

+ 如果不用 async await，那么就是通过回调的形式

  ```js
  setTimeout(() => {
    count.value = 2 // 修改响应式状态
    // 等待下一个 DOM 更新周期
    nextTick(() => {
      // 这个时候再打印就是最新的值了
      console.log('第二次打印：', container.innerText)
    })
  }, 2000)
  ```

## TS类型

+ 类型

  ```js
  function nextTick(callback?: () => void): Promise<void>
  ```
