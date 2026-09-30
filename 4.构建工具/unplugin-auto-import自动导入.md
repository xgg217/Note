# unplugin-auto-import

## vite

+ 安装

  ```shell
  pnpm  add -D unplugin-auto-import
  ```

+ vite.config.ts

  ```js
  import AutoImport from 'unplugin-auto-import/vite' //按需自动加载API插件

  export default defineConfig({
    plugins: [
      vue(),
      VueDevTools(),
      AutoImport({
        imports: ['vue', 'vue-router'],
        // 自定义 导入
        dirs: ['./src/api'],
        dts: './src/auto-imports.d.ts' // 解决使用了ts会出现类型丢失的问题
      })],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
  ```
