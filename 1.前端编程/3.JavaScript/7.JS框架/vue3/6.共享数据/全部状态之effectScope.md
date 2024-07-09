# effectScope

## 概述

+ Vue3 中的api `effectScope`
+ Pinia 的底层原理就是依赖了 effectScope

## 基本使用

+ code

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

## 复制 vueUse 中的源码

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


