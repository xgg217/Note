# css配置

## 概述

+ 在配置文件中有个 css 的配置项，可以配置 css 资源路径：

  ```js
  // nuxt.config.ts
  css: [
    // Load a Node.js module directly (here it's a Sass file).
    'bulma',
    'bootstrap',
    // CSS file in the project
    // ~代表项目根目录
    '~/assets/css/main.css',

    // SCSS file in the project
    // 如果是 scss 或者 less 需要安装对应的 css 预处理器
    '~/assets/css/main.scss'
  ]
  ```
