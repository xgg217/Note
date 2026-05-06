# createGlobalState

## 作用

+ 将状态保存在全局范围内，以便跨 Vue 实例重复使用
+ 内部逻辑只会执行一次，无论你调用多少次

## vueUse 中的 createGlobalState

+ 基本使用

  ```js
  // store.js
  import { computed, ref } from 'vue'
  import { createGlobalState } from '@vueuse/core'

  export const useGlobalState = createGlobalState(
    () => {
      // state
      const count = ref(0)

      // getters
      const doubleCount = computed(() => count.value * 2)

      // actions
      function increment() {
        count.value++
      }

      return { count, doubleCount, increment }
    }
  )
  ```

  ```js
  // 使用
  // component.js
  import { useGlobalState } from './store'

  export default defineComponent({
    setup() {
      const state = useGlobalState()
      return { state }
    },
  })
  ```

## 源码

+ [源码](https://github.com/vueuse/vueuse/blob/main/packages/shared/createGlobalState/index.ts)

  ```js
  import { effectScope } from 'vue'

  /**
  * Keep states in the global scope to be reusable across Vue instances.
  *
  * @see https://vueuse.org/createGlobalState
  * @param stateFactory A factory function to create the state
  */
  export function createGlobalState<Fn extends  (...args: any[]) => any>(
    stateFactory: Fn,
  ): Fn {
    let initialized = false
    let state: any
    const scope = effectScope(true)

    return ((...args: any[]) => {
      if (!initialized) {
        state = scope.run(() => stateFactory(...args))!
        initialized = true
      }
      return state
    }) as Fn
  }
  ```
