# RouterView

## 概述

+ 称之为视图或路由出口

+ RouterView 组件暴露了一个插槽（作用域插槽），这个插槽可以用来获取当前匹配的路由组件

  ```html
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  ```

+ 主要就是为了方便扩展一些其他的功能

## KeepAlive & Transition

+ 当在处理 KeepAlive 组件时，我们通常想要保持对应的路由组件活跃，而不是 RouterView 本身
+ 为了实现这个目的，我们可以将 KeepAlive 组件放置在插槽内

  ```html
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  ```

+ 类似地，插槽允许我们使用一个 Transition 组件来实现在路由组件之间切换时实现过渡效果

  ```html
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
  ```

+ 两者结合后的嵌套顺序：

  ```html
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
  ```

## 模板引用

+ 使用插槽可以让我们直接将模板引用放置在路由组件上

  ```html
  <router-view v-slot="{ Component }">
    <!-- 我现在要引用组件内部的模板 -->
    <component :is="Component" ref="mainContent"/>
  </router-view>
  ```

+ 如果将 ref 挂在 router-view 上面，那么最终拿到的是 router-view 的引用，而非所匹配的组件本身
