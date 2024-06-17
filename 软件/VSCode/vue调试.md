# vue 调试

## 调试

+ `https://snippet-generator.app/` VSCode 代码片段转换

+ 调试代码

  ```js
  {
    // 使用 IntelliSense 了解相关属性。
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
      {
        "type": "msedge",
        // "type": "pwa-msedge",
        "request": "launch",// launch  attach
        "name": "调试VUE项目",
        "url": "http://localhost:8080",
        "userDataDir": "/fzm/VSCodeDebug/edge",
        "runtimeExecutable": "C:/Program Files (x86)/Microsoft/Edge Beta/Application/msedge.exe", // 设置浏览器路径
        "webRoot": "${workspaceFolder}",
        "sourceMapPathOverrides": {
          "webpack://decorate-erp/src/*": "${workspaceFolder}/src/*"
        }
      }
    ]
  }
  ```
