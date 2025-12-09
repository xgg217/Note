# vite自动生成路由

## 概述

+ 路由需要的信息

  ```js
  {
    path: "xxx",
    name: "xxx",
    component () => import("xxx/xxx.vue"),
    meta: {
      title: "首页",
      menuOrder: 1
    }
  }
  ```

+ meta中的信息可以新建一个 page.js 文件

  ```js
  export default {
    title: "首页",
    menuOrder: 1
  }
  ```

+ 路由 routes.js

  ```js
  import {createRouter,createWebHistory} from "vue-router";

  // 编译时读取views目录下所有page.js的内容结构
  const pages = import.meta.glob("../views/**/page.js", { eager: true, import: "default" });

  const comps = import.meta.glob("../views/**/index.vue");

  const routes = Object.entries(pages).map(([path, page]) => {
    const compPath = path.replace("page.js", "index.vue");

    path = path.replace("../views", "").replace("/page.js", "") || "/";

    // a/b/c 显示路由为 a-b-c
    const name = path.split("/").filter(Boolean).join("-") || "index";

    return {
      path,
      name,
      component comps[compPath],
      meta
    }
  })

  export const router = createRouter({
    history: createWebHistory(),
    routes
  })
  ```

+ 编译时读取目录结构

  + webpack 使用 `require.context`
  + vite 使用 `import.meta.glob`
