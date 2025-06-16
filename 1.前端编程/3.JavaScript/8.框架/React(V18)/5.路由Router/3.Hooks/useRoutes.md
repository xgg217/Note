# useRoutes

## 使用示例

+ 使用示例

  ```js
  function Router(props) {
    return useRoutes([
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/add",
        element: <AddOrEdit />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/edit/:id",
        element: <AddOrEdit />,
      },
      {
        path: "/",
        element: <Navigate replace to="/home" />
      }
    ]);
  }

  export default Router;
  ```
