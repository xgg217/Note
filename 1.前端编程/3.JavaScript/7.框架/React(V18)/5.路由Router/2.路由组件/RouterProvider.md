# RouterProvider

## 概述

+ 作为一个组件渲染
+ 并且传入 createBrowserRouter 执行之后生成 router 实例

  ```jsx
  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import { createBrowserRouter, RouterProvider } from "react-router-dom";
  import App from './App.tsx'

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

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )

  ```
