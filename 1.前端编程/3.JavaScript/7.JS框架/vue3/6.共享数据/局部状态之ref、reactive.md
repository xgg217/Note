# ref、reactive

## 概述

+ 局部状态管理的时候，可以直接使用 `reactive` 、 `ref` 这类 API 来完成

  ```js
  // state.ts 定义
  import {reactive, ref} from "vue";

  // 使用 reactive 或 ref 定义状态
  const reactiveStateExample = reactive({
    name: "xgg",
    age: 18
  });

  const refStateExample = ref(1);

  const updateName = (v:string) => {
    reactiveStateExample.name = v;
  };

  const updateNum = (v: number) => {
    refStateExample.value = v;
  };

  export const useStore = () => {
    return {
      reactiveStateExample,
      refStateExample,
      updateName,
      refStateExample
    }
  }
  ```

  ```html
  <!-- 使用 -->
  <template>
    <div>
      <Button @click="onClick">组件1按钮<Button>
        <div>{{ store.reactiveStateExample.name }}</div>
        <div>{{ store.refStateExample }}</div>
    </div>
  </template>

  <script setup lang="ts">
    import {Button} from "ant-design-vue";
    import {useStore} from "./state";

    const store = useStore();

    const onClick = () => {
      store.updateName('新名字')
    }
  </script>
  ```
