# createBrowserRouter

## 概述

+ 创建路由实例

  + 在方法中定义路由 path 和组件对应关系

  ```js
  import { createBrowserRouter } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/login",
      element: <div>Hello world!</div>,
    },
  ]);
  ```
