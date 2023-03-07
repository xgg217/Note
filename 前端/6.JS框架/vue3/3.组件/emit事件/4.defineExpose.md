# defineExpose

## 概述

+ 父组件访问子组件数据

+ 使用 `<script setup>` 的组件是默认关闭的——即通过模板引用或者 `$parent` 链获取到的组件的公开实例，不会暴露任何在 `<script setup>` 中声明的绑定
+ 可以通过 `defineExpose` 编译器宏来显式指定在 `<script setup>` 组件中要暴露出去的属性

  ```html
  <!-- 子组件 -->
  <script setup>
    import { ref } from 'vue'

    const isContentShown = ref(false)
    const open = () => (isContentShown.value = true)

    // 向父组件暴露方法
    defineExpose({
      open
    })
  </script>
  ```

  ```html
  <!-- 父组件 -->
  <script setup lang="ts">

    import { ref } from 'vue';
    import MyModal from './MyModal.vue'

    // 为组件模板引用标注类型
    // 为了获取 MyModal 的类型，我们首先需要通过 typeof 得到其类型，再使用 TypeScript 内置的 InstanceType 工具类型来获取其实例类型
    const modal = ref<InstanceType<typeof MyModal> | null>(null)

    const openModal = () => {
      modal.value?.open()
    }
  </script>
  ```
