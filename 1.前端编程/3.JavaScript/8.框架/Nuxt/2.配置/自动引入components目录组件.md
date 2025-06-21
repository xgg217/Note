# 自动引入components目录组件

## 概述

+ components 目录(存放功能性组件)下第一层组件

  ```js
  // 解决只支持第一层的问题
  // nuxt.fonfig.ts
  export default defineNuxtConfig({
    components: [
      {
        path: "~/components", // 会递归扫描所有的子目录
        pathPrefix: true, // 使用组件的时候是否要添加目录前缀 true需要添加 默认为true
      }
    ]
  });
  ```

  ```js
  // components/user/index.vue

  // 使用的时候 <UserIndex />
  ```
