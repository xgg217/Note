# nodemon

## 命令行辅助工具

+ 安装插件

  ```bash
  npm i -D nodemon
  ```

+ 使用

  ```bash
  // 使用 持续监听
  npx nodemon ./index.js
  ```

## 配合文件

+ 在根目录下增加 `nodemon.json` 文件

  ```json
  {
    "ignore": [
        ".git",
        ".svn",
        "node_modules/**/node_modules",
        "public"
    ],
    "watch": [
      "*.js",
      "*.json"
    ],
    "env": {
        "NODE_ENV": "development"
    }
  }
  ```

+ 在 `package.json` 增加配置，并且启动 浏览器 调试 node

  ```json
  "scripts": {
    "dev": "nodemon -x npm run server",
    "server": "node --inspect index.js"
  },
  ```

## 参考代码

[express热更新.7z](file/express热更新_AFvrtEVxTf.7z)
