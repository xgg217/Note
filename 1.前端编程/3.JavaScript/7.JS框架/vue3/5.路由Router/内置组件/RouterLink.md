# RouterLink

## 作用

+ `router-link` 通过一个作用域插槽暴露底层的定制能力
+ 相当于 a 标签
+ to 路由 path

## 插槽 prop

+ `href`：解析后的 URL。将会作为一个 a 元素的 `href attribute`

+ `route`：解析后的规范化的地址

+ `navigate`：触发导航的函数。会在必要时自动阻止事件，和 `router-link` 同理

+ `isActive`：如果需要应用激活的 `class` 则为 `true`。允许应用一个任意的 `class`

+ `isExactActive`：如果需要应用精确激活的 `class` 则为 `true`。允许应用一个任意的 `class`

  ```html
  <RouterLink
    to="/foo"
    v-slot="{ href, route, navigate, isActive, isExactActive }"
  >
    <li
      :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
    >
      <a :href="href" @click="navigate">{{ route.fullPath }}</a>
    </li>
  </RouterLink>
  ```

## 2个样式类

+ activeClass：当链接所指向的路径匹配当前路由路径时，应用于该链接的 CSS 类，默认类名为 linkActiveClass

  + 当前路径是 /about：会应用 my-active 样式类
  + 当前路径是 /about/team：会应用 my-active 样式类

  ```html
  <RouterLink to="/about" activeClass="my-active">About</RouterLink>
  ```

+ exactActiveClass：当链接所指向的路径精确匹配当前路由路径时，应用于该链接的 CSS 类，默认类名为 linkExactActiveClass

  + 当前路径是 /about：会应用 my-exact-active 样式类
  + 当前路径是 /about/team：不会应用 my-exact-active 样式类

  ```html
  <RouterLink to="/about" exactActiveClass="my-exact-active">About</RouterLink>
  ```
