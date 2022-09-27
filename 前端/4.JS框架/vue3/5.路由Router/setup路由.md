# setup路由

## 访问路由和当前路由

  - 因为我们在 `setup` 里面没有访问 `this`，所以我们不能再直接访问 `this.$router` 或 `this.$route`

  - 作为替代，我们使用 `useRouter` 函数

    ```javascript
    import { useRouter, useRoute } from 'vue-router'
    export default {
      setup() {
        const router = useRouter()
        const route = useRoute()

        // 获取路由信息
        route.query

        // 路由跳转
        function pushWithQuery(query) {
          router.push({
            name: 'search',
            query: {
              ...route.query,
            },
          })
        }
      },
    }
    ```

  - 请注意，在模板中我们仍然可以访问 `$router` 和 `$route` ，所以不需要在 `setup` 中返回 `router` 或 `route`

## 路由导航守卫

  - 路由导航守卫

    ```javascript
    import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

    // 添加一个导航守卫，在当前组件将要离开时触发
    onBeforeRouteLeave((to, from, next) => {
      next()
    })

    // 添加一个导航守卫，在当前组件更新时触发
    // 在当前路由改变，但是该组件被复用时调用
    onBeforeRouteUpdate((to, from, next) => {
      next()
    })
    ```
