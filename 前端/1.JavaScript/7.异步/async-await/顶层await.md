# 顶层await

## 介绍

  - 根据语法规格，`await` 命令只能出现在 `async` 函数内部，否则都会报错

    ```js
    // 报错
    const data = await fetch('https://api.example.com');
    ```
