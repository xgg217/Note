# onWatcherCleanup

## 概述

+ onWatcherCleanup 简化清理逻辑

+ 在 Vue 3.5 之前，我们经常需要在 watch 和 onBeforeUnmount 生命周期钩子中重复编写清理逻辑，这不仅增加了代码的冗余，也使得代码的维护变得更加困难。

+ Vue 3.5 引入了 `onWatcherCleanup` 函数，它允许我们在 watch 内部直接指定清理逻辑，从而简化了代码

  ```js
  import { watch, onWatcherCleanup } from 'vue'

  watch(id, (newId) => {
    const { response, cancel } = doAsyncWork(newId)
    // 如果 `id` 变化，则调用 `cancel`，
    // 如果之前的请求未完成，则取消该请求
    onWatcherCleanup(cancel)
  })
  ```
