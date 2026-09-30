# 路由元数据

## 概述

+ 元数据（meta fields）是一种附加到路由配置中的属性，用来存储与路由相关的附加信息

+ 元数据经常用于权限控制、标题设置、面包屑导航、路由过渡之类的效果

## 定义元数据

+ 添加一个 meta 配置项，该配置项对应的是一个对象，对象里面就是你自定义要添加的信息

  ```js
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: HomeView,
        meta: { requiresAuth: true, title: 'Home' }
      },
      {
        path: '/about',
        component: AboutView,
        meta: { requiresAuth: false, title: 'About Us' }
      }
    ]
  });
  ```

## 访问元数据

+ 在导航守卫的回调函数中，会自动传入 `to` 这个参数（你要起哪里），通过 `to.meta` 就可以拿到元数据信息

  ```js
  router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isLoggedIn()) {
      next('/login');
    } else {
      next();
    }
  });
  ```
## 为 meta 字段添加 TS类型

+ 也可以继承来自 vue-router 中的 RouteMeta 来为 meta 字段添加类型：

  ```js
  // 例如 src/types/router.d.ts

  // 这段可以直接添加到你的任何 `.ts` 文件中，例如 `router.ts`
  // 也可以添加到一个 `.d.ts` 文件中。确保这个文件包含在
  // 项目的 `tsconfig.json` 中的 "file" 字段内。
  import 'vue-router'

  // 为了确保这个文件被当作一个模块，添加至少一个 `export` 声明
  export {}

  declare module 'vue-router' {
    interface RouteMeta {
      // 是可选的
      isAdmin?: boolean
      // 每个路由都必须声明
      requiresAuth: boolean
    }
  }
  ```
