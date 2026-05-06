# 基础

## 基本使用

+ 安装

  ```js
  pnpm add @nuxt/ui-pro
  ```

+ nuxt.config.ts 配置

  ```js
  // nuxt.config.ts
  export default defineNuxtConfig({
    modules: ['@nuxt/ui-pro']
  })
  ```

+ css 配置

  ```js
  // assets/css/main.css
  @import "tailwindcss";
  @import "@nuxt/ui-pro";
  ```

  ```js
  // nuxt.config.ts
  export default defineNuxtConfig({
    modules: ['@nuxt/ui-pro'],
    css: ['~/assets/css/main.css']
  })
  ```

+ 页面

  ```html
  <template>
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </template>
  ```
