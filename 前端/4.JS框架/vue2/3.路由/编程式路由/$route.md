# $route

## $route

  - 只读，路由信息对象。

    ```javascript
    $route = {
      fullPath: "",
      hash: "",
      matched: [],
      meta: {},
      name: "",
      params: {},
      path: "",
      query: {}
    }
    ```

## $route.path

  - 字符串，对应当前路由的路径，总是解析为绝对路径，如 `"/foo/bar"`。

## $route.params

  - 一个 `key/value` 对象，包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象。

## $route.query

  - 一个 `key/value` 对象，表示 URL 查询参数。

  - 例如，对于路径 `/foo?user=1`，则有 `\$route.query.user == 1`，如果没有查询参数，则是个空对象。

## $route.hash

  - 路由的 `hash` 值 (带 #) ，如果没有 `hash` 值，则为空字符串。

## $route.fullPath

  - 完成解析后的 URL，包含查询参数和 hash 的完整路径。

## $route.matched

  - 一个数组，包含当前路由的所有嵌套路径片段的路由记录 。路由记录就是 `routes` 配置数组中的对象副本 (还有在 `children` 数组)。

    ```javascript
    const router = new VueRouter({
      routes: [
        // 下面的对象就是路由记录
        {
          path: '/foo',
          component: Foo,
          children: [
            // 这也是个路由记录
            { path: 'bar', component: Bar }
          ]
        }
      ]
    })
    ```

  - 当 URL 为 `/foo/bar`，`\$route.matched` 将会是一个包含从上到下的所有对象 (副本)。

## $route.name

  - 当前路由的名称，如果有的话

## $route.redirectedFrom

  - 如果存在重定向，即为重定向来源的路由的名字。
