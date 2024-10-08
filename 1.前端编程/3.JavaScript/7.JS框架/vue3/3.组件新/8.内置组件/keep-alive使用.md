# keep-alive使用

## 作用

+ KeepAlive 是一个内置组件，该组件的主要作用是缓存组件的状态

+ 当 使用了 `vue-router` 时，无论路由实际对应的 vue 组件是否发生了实质性的界面更新，只要进行了路由切换，无论是否有用 `keep-alive` 缓存组件，都会触发路由对应 vue 组件的 `onUpdated` 钩子

  ```html
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  ```

## 使用场景

+ 组件缓存和路由缓存
+ 但 `keep-alive` 的缓存清除不怎么方便(因为 `keep-alive` 无法直接控制缓存的释放)

+ 缓存清除方式 `https://free_pan.gitee.io/freepan-blog/articles/05-vue3/vue-router%E4%B8%8Ekeep-alive/keep-alive%E4%BD%BF%E7%94%A8.html`

## 注意事项

+ keep-alive默认情况下是缓存所有组件的，那如果不希望缓存所有组件，就需要使用 `include` (包含) 和 `exclude` (排除) 指定哪些组件要缓存，哪些组件不要缓存

+ 且 `exclude` 的优先级要高于 `include`
+ 如果指定了 `include` 或 `exclude` , keep-alive内部是通过组件 `name` ，判断组件是否需要缓存，而非路由 `name`

+ 这两个 prop 的值都可以是一个以英文逗号分隔的字符串、一个正则表达式，或是包含这两种类型的一个数组

  ```html
  <!-- 以英文逗号分隔的字符串，以英文逗号分隔的时候，注意中间不要添加空格 -->
  <KeepAlive include="a,b">
    <component :is="view" />
  </KeepAlive>

  <!-- 正则表达式 (需使用 v-bind) -->
  <KeepAlive :include="/a|b/">
    <component :is="view" />
  </KeepAlive>

  <!-- 数组 (需使用 v-bind) -->
  <KeepAlive :include="['a', 'b']">
    <component :is="view" />
  </KeepAlive>
  ```

  ```html
  <router-view v-slot="{ Component }">
    <keep-alive include="Counter,Timer">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  ```

+ 还可以接收一个 max 属性，用于指定最大缓存组件数。如果缓存的实例数量即将超过指定的那个最大数量，则最久没有被访问的缓存实例将被销毁，以便为新的实例腾出空间

  ```html
  <router-view v-slot="{ Component }">
    <keep-alive :max="3">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  ```
