# 添加name属性

## 设置方式1

+ 代码

  ```html
  <script lang="ts">
  export default {
    name: "TButton",
  };
  </script>

  <script setup lang="ts">
  ...
  <script>
  ```

## 设置2 插件

+ `unplugin-vue-define-options`

  ```shell
  npm install unplugin-vue-define-options -D
  ```

+ vite.config.ts 配置

  ```js
  import { defineConfig } from 'vite';

  import vue from '@vitejs/plugin-vue';

  import DefineOptions from 'unplugin-vue-define-options/vite';

  // <https://vitejs.dev/config/>
  export default defineConfig({
    plugins: [vue(), DefineOptions()],
  });
  ```

+ 使用

  ```html
  <template>
    <button> </button>
  </template>

  <script lang="ts" setup>
    defineOptions({
      name: 'TButton',
    });
  </script>

  <style scoped></style>
  ```
