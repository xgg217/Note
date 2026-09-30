# createInjectionState

## 概述

+ 创建可注入到组件的全局状态

  ```js
  // useCounterStore.ts
  import { computed, ref } from 'vue'
  import { createInjectionState } from '@vueuse/core'

  const [useProvideCounterStore, useCounterStore] = createInjectionState((initialValue: number) => {
    // state
    const count = ref(initialValue)

    // getters
    const double= computed(() => count.value * 2)

    // actions
    const increment = () => count.value++
    const decrement = () => count.value--

    return {
      count,
      double,
      increment,
      decrement,
    }
  })

  export { useProvideCounterStore, useCounterStore }
  ```

  ```html
  // Index.vue
  <script setup lang="ts">
  import Root from './Root.vue'
  import Counter from './Counter.vue'
  import Controls from './Controls.vue'
  </script>

  <template>
    <div>
      <Root>
        <Counter />
        <Controls />
      </Root>
    </div>
  </template>
  ```

  ```html
  // Root.vue
  <script setup lang="ts">
  import { useProvideCounterStore } from './useCounterStore'

  useProvideCounterStore(0)
  </script>

  <template>
    <div>
      <slot />
    </div>
  </template>
  ```

  ```html
  // Counter.vue
  <script lang="ts" setup>
  import { useCounterStore } from './useCounterStore'

  const { count, double } = useCounterStore()!
  </script>

  <template>
    <ul>
      <li>
        count: {{ count }}
      </li>
      <li>
        double: {{ double }}
      </li>
    </ul>
  </template>
  ```

  ```html
  // Controls.vue
  <script setup lang="ts">
  import { useCounterStore } from './useCounterStore'

  const { increment, decrement } = useCounterStore()!
  </script>

  <template>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </template>
  ```
