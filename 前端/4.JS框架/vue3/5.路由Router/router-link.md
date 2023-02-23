# router-link

## 作用

+ `router-link` 通过一个作用域插槽暴露底层的定制能力

## 插槽 prop

+ `href`：解析后的 URL。将会作为一个 a 元素的 `href attribute`

+ `route`：解析后的规范化的地址

+ `navigate`：触发导航的函数。会在必要时自动阻止事件，和 `router-link` 同理

+ `isActive`：如果需要应用激活的 `class` 则为 `true`。允许应用一个任意的 `class`

+ `isExactActive`：如果需要应用精确激活的 `class` 则为 `true`。允许应用一个任意的 `class`

    ```html
    <router-link
      to="/foo"
      v-slot="{ href, route, navigate, isActive, isExactActive }"
    >
      <li
        :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
      >
        <a :href="href" @click="navigate">{{ route.fullPath }}</a>
      </li>
    </router-link>
    ```
