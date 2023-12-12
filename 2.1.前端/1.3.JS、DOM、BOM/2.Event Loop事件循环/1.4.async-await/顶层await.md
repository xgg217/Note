# 顶层await

## 介绍

+ 根据语法规格，`await` 命令只能出现在 `async` 函数内部，否则都会报错

  ```js
  // 报错
  const data = await fetch('https://api.example.com');
  ```

+ 从 ES2022 开始，允许在模块的顶层独立使用 `await` 命令，使得上面那行代码不会报错了
+ 它的主要目的是使用await解决模块异步加载的问题

  ```js
  // a.js
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = resp.json();
  export { users};

  // usingAwait.js
  import {users} from './a.mjs';

  console.log(users);
  console.log('usingAwait module');
  ```
