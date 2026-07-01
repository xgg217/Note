# 在window对象上显式设置属性

## 显式设置属性

+ JS

  ```js
  indow.MyNamespace = window.MyNamespace || {};
  ```

+ TS

  ```js
  // 报错 Property 'MyNamespace' does not exist on type 'Window & typeof globalThis'.(2339)
  // Window & typeof globalThis 交叉类型上不存在 MyNamespace 属性
  window.MyNamespace = window.MyNamespace || {};
  ```

+ 解决办法

  ```js
  // 方法1
  (window as any).MyNamespace = {};
  ```

  ```js
  // 方法2 推荐使用
  // 在一个单独的文件中添加以下内容
  export {};

  declare global {
    interface Window {
      myProperty: string;
    }
  }

  // 在另一个地方使用
  window.myProperty = "Hello World!";
  ```
