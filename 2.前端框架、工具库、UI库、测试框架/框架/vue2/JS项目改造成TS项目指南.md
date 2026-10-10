# JS 项目改造成 TS 项目指南

## 步骤

1. 安装 TS：npm i typescript ts-loader -D
2. 增加 TS 配置文件：tsconfig.json
3. 修改文件后缀名：x.js -> x.ts
4. x.vue 文件增加 lang：<script lang="ts">
5. vite.config.js 配置后缀名
6. 升级依赖，修改本地启动和构建脚本
7. 添加 loader / plugin 等
8. 逐步补充类型声明

## tsconfig.ts

+ 代码

  ```json
  {
    "compilerOptions": {
      "target": "ESNext",
      "useDefineForClassFields": true,
      "module": "ESNext",
      "moduleResolution": "Node",
      "strict": true,
      "jsx": "preserve",
      "sourceMap": true,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "esModuleInterop": true,
      "lib": ["ESNext", "DOM"],
      "skipLibCheck": true
    },
    "include": [
      "src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"
    ]
  }
  ```

+ 配置文件后缀名，增加 .ts 和 .tsx

  ```json
  extensions: ['.js', '.vue', '.json', '.ts', 'tsx'],
  ```

+ 入口文件要由 main.js 改成 main.ts

  ```js
  entry: {
    app: './src/main.ts'
  },
  ```

+ 需要配置下 loader

  ```js
  {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
      appendTsSuffixTo: [/\.vue$/]
    },
    include: [resolve('src')]
  }
  ```

+ 以及 plugin

  ```js
  const { VueLoaderPlugin } = require('vue-loader')

  plugins: [
    new VueLoaderPlugin()
  ],
  ```
