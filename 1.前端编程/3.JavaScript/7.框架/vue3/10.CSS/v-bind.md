# CSS 中的 v-bind()

## 概述

+ 实际的值会被编译成哈希化的 CSS 自定义属性，因此 CSS 本身仍然是静态的
+ 自定义属性会通过内联样式的方式应用到组件的根元素上，并且在源值变更的时候响应式地更新

+ 单文件组件的 `<style>` 标签支持使用 `v-bind` CSS 函数将 CSS 的值链接到动态的组件状态

  ```html
  <template>
    <div class="text">hello</div>
  </template>

  <script>
  export default {
    data() {
      return {
        color: 'red'
      }
    }
  }
  </script>

  <style>
  .text {
    color: v-bind(color);
  }
  </style>
  ```

+ 这个语法同样也适用于 `<script setup>` ，且支持 JavaScript 表达式 (需要用引号包裹起来)：

  ```html
  <script setup>
  import { ref } from 'vue'
  const theme = ref({
      color: 'red',
  })
  </script>

  <template>
    <p>hello</p>
  </template>

  <style scoped>
  p {
    color: v-bind('theme.color');
  }
  </style>
  ```

## 添加单位

+ 如果需要给 `v-bind()` 值添加单位那么可以通过 `calc`

  ```css
  .v-scroll{
    width : calc(v-bind('a.widthData') * 1px);
  }
  ```
