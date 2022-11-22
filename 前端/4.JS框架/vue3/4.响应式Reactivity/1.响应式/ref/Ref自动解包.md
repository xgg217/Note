# Ref ⾃动解包

## 概述

+ 在众多情况下，我们可以减少 `.value` 的使⽤

## watch

+ `watch` 直接接受 `Ref` 作为监听对象，并在回调函数中返回解包后的值

  ```js
  const counter = ref(0)

  watch(counter, count => {
  console.log(count) // same as `counter.value`
  })
  ```

## Ref 在模版中⾃动解包

+ 代码

  ```html
  <template>
    <button @click="counter += 1">
      Counter is {{ counter }}
    </button>
  </template>
  ```

## Reactive 解包嵌套的 Ref

+ 代码

  ```js
  import { ref, reactive } from 'vue'

  const foo = ref('bar')
  const data = reactive({ foo, id: 10 })
  data.foo // 'bar'
  ```
