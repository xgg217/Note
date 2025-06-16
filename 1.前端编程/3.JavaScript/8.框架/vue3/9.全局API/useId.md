# useId

## 概述

+ 在 Vue3.5 版本

+ `useId()` 是一个 API，可用于生成每个应用程序的唯一 ID，这些 ID 保证在服务器和客户端渲染中保持稳定
+ 它们可用于生成表单元素和辅助功能属性的 ID，并且可以在 SSR 应用程序中使用，而不会导致激活不匹配

  ```html
  <script setup>
  import { useId } from 'vue'

  const id = useId()
  </script>

  <template>
    <form>
      <label :for="id">Name:</label>
      <input :id="id" type="text" />
    </form>
  </template>
  ```

## 原理

+ 就是调用 `getCurrentInstance` 这个，这个 API 会返回当前 Vue 实例的信息对象，而这个信息对象身上有一个 ids 的数组，而 useId 就是根据这个数组去生成唯一 ID 的

+ `appContext.config.idPrefix` ： 这是可全局配置的 ID 前缀，如果你不配置，那就默认是 `v`
+ `ids[0] + ids[1]++` ： 由唯一的 `ids[0]` 和递增的 `ids[1]` 来实现同实例内与不同实例时间的唯一性

  ```js
  export function userId():string {
    const i = getCurrentInstance();

    if(i) {
      return (i.appContext.config.idPrefix || 'v' + '-' + i.ids[0] + i.ids[1]++)
    } else if(__DEV__) {
      warn(`useId() is called when there is no active component` + `instance to be associated with.`);
    }
  }
  ```

+ 想要设置 appContext.config.idPrefix 可以在 main.ts 中去设置

  ```js
  const app = createApp(APP);

  app.config.idPrefix = "myIDPrefix";
  ```
## 使用场景

+ v-for 唯一 key

  ```js
  const data = new Array(100).fill(0).map((_, index) => {
    return {
      label: `文本${index}`,
      value: useId() // 生成唯一id
    }
  })
  ```


