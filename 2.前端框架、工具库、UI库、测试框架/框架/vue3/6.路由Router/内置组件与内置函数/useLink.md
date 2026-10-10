# useLink

## 概述

+ `useLink` 主要用于自定义导航组件的时候使用

  ```js
  const {
    // 解析出来的路由对象
    route,
    // 用在链接里的 href
    href,
    // 布尔类型的 ref 标识链接是否匹配当前路由
    isActive,
    // 布尔类型的 ref 标识链接是否严格匹配当前路由
    isExactActive,
    // 导航至该链接的函数
    navigate
  } = useLink(props) // 这里接收的props类似于RouterLink所有props
  ```

## 示例

+ 示例1

  ```html
  <template>
    <div id="app">
      <nav>
        <!-- 这里使用的是内置组件router-link来做跳转 -->
        <!-- <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/contact">联系</router-link> -->

        <!-- 接下来使用我们自定义的组件NavigationLink来做跳转 -->
        <NavigateLink to="/">首页</NavigateLink>
        <NavigateLink to="/about">关于</NavigateLink>
        <NavigateLink to="/contact">联系</NavigateLink>
      </nav>
      <router-view></router-view>
    </div>
  </template>

  <script setup>
  import NavigateLink from './components/NavigationLink.vue'
  </script>
  ```

  ```html
  <!-- NavigateLink.vue -->
  <template>
    <a :href="link.href" @click.prevent="navigate">
      <slot></slot>
    </a>
  </template>

  <script setup>
  import { useLink } from 'vue-router'

  const props = defineProps({
    to: {
      type: String,
      required: true
    }
  })

  const link = useLink({
    to: props.to
  })

  const navigate = () => {
    if (confirm('你确定要跳转么？')) {
      link.navigate()
    }
  }
  </script>
  ```

