# useRouter和useRoute

## 概述

+ 在 setup 中没有 this，因此无法像 Vue2 那样通过 `this.router` 或者 `this.route` 来访问路由实例和当前路由

+ 与之替代的就是通过 `useRouter` 和 `useRoute` 这两个内置函数

  ```js
  import { useRouter, useRoute } from 'vue-router'

  const router = useRouter() // 拿到的就是整个路由实例
  const route = useRoute() // 拿到的是当前路由

  function pushWithQuery(query) {
    router.push({
      name: 'search',
      query: {
        ...route.query,
        ...query,
      },
    })
  }
  ```

+ 在模板中可以直接访问 `router` 和 `route` ，所以如果只在模板中使用这些对象的话，那就不需要 `useRouter` 或 `useRoute`
