# 解析数据

## .parse

+ 对于任何 Zod 模式，使用 .parse 来验证输入
+ 如果有效，Zod 将返回输入的强类型深度克隆

  ```js
  Player.parse({ username: "billie", xp: 100 });
  // => returns { username: "billie", xp: 100 }
  ```

## 异步 .parseAsync()

+ 异步 API，例如 async、refinements 或 transforms，则需要改用 .parseAsync() 方法

  ```js
  await Player.parseAsync({ username: "billie", xp: 100 });
  ```
