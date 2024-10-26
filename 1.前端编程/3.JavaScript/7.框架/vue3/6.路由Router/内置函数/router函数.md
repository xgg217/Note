# vue-router函数

## 概述

+ **在 setup 中没有 this**，因此无法像 Vue2 那样通过 this.$router 或者 this.$route 来访问路由实例和当前路由

+ 与之替代的就是通过 useRouter 和 useRoute 这两个内置函数

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

+ 另外，在模板中可以直接访问 `$router` 和 `$route`  ，所以如果只在模板中使用这些对象的话，那就不需要 `useRouter` 或 `useRoute`

+ 注意

  + `params` 不能与 `path` 一起使用

    ```js
    router.push({ path: '/user', params: { username } }) // -> /user
    ```

  + 解决办法 使用 query

    ```js
    router.push({ path: '/register', query: { plan: 'private' } })
    ```

## push 添加

+ 基本使用

  ```js
  import { useRouter } from "vue-router";

  const router = useRouter();

  // 字符串路径
  router.push('/users/eduardo')

  // 带有路径的对象
  router.push({ path: '/users/eduardo' })

  // 命名的路由，并加上参数，让路由建立 url
  router.push({ name: 'user', params: { username: 'eduardo' } })

  // 带查询参数，结果是 /register?plan=private
  router.push({ path: '/register', query: { plan: 'private' } })

  // 带 hash，结果是 /about#team
  router.push({ path: '/about', hash: '#team' })
  ```

  ```js
  const username = 'eduardo'
  // 我们可以手动建立 url，但我们必须自己处理编码
  router.push(`/user/${username}`) // -> /user/eduardo
  // 同样
  router.push({ path: `/user/${username}` }) // -> /user/eduardo
  // 如果可能的话，使用 `name` 和 `params` 从自动 URL 编码中获益
  router.push({ name: 'user', params: { username } }) // -> /user/eduardo
  // `params` 不能与 `path` 一起使用
  router.push({ path: '/user', params: { username } }) // -> /user
  ```

  ```js
  // 这三种形式是等价的
  router.push('/users/posva#bio')
  router.push({ path: '/users/posva', hash: '#bio' })
  router.push({ name: 'users', params: { username: 'posva' }, hash: '#bio' })
  // 只改变 hash
  router.push({ hash: '#bio' })
  // 只改变 query
  router.push({ query: { page: '2' } })
  // 只改变 param
  router.push({ params: { username: 'jolyne' } })
  ```

+ 当指定 `params` 时，可提供 `string` 或 `number` 参数（或者对于可重复的参数可提供一个数组）。任何其他类型（如 undefined、false 等）都将被自动字符串化。对于可选参数，你可以提供一个空字符串（""）来跳过它

+ 由于属性 `to` 与 `router.push` 接受的对象种类相同，所以两者的规则完全相同

+ `router.push` 和所有其他导航方法都会返回一个 `Promise`，让我们可以等到导航完成后才知道是成功还是失败

## replace 替换

+ 它的作用类似于 `router.push`，唯一不同的是，它在导航时不会向 `history` 添加新记录，正如它的名字所暗示的那样——它取代了当前的条目

  ```js
  // 声明式
  <router-link :to="..." replace>

  // 编程式
  router.replace(...)
  ```

+ 也可以直接在传递给 router.push 的 routeLocation 中增加一个属性 replace: true

  ```js
  router.push({ path: '/home', replace: true })

  // 相当于
  router.replace({ path: '/home' })
  ```

## go 前进后退

+ 该方法采用一个整数作为参数，表示在历史堆栈中前进或后退多少步，类似于 `window.history.go(n)`

  ```js
  // 向前移动一条记录，与 router.forward() 相同
  router.go(1)

  // 返回一条记录，与 router.back() 相同
  router.go(-1)

  // 前进 3 条记录
  router.go(3)

  // 如果没有那么多记录，静默失败
  router.go(-100)
  router.go(100)
  ```

## 使用 router.resolve 查看生成的最终 url

+ 使用 router.resolve 查看生成的最终 url

  ```js
  console.log(router.resolve({ name: 'TestRoute' }))
  ```

## js 文件路由跳转

+ 跳转

  ```js
  import router from '../../router';

  router.push('/login')
  ```
