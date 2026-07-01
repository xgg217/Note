# vite 手动分包

## 概述

+ code

  ```js
  // vite.config.js

  export default defineConfig({
    plugins: [vue()];
    build: {
      rollupOptions: {
        manualChunks(id) {
          // 第三方库合并到一个包
          if(in.includes("node_modules")) {
            return "vendor"
          }
        }
      }
    }
  })
  ```
