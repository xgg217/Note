# $fetch 与 useAsyncData

## 概述

+ 相比 $fetch，useAsyncData 除了能够缓存数据以外，还内置了更多特性，例如错误状态、工具函数等
+ 这是该方法的返回值：

  + data：存储异步数据请求的结果，并且这是一个响应式数据
  + status：表示请求的当前状态
  + error：存储请求过程中发生的错误
  + refresh：是一个函数，用于重新触发数据请求

    + 当数据需要实时更新时，可以调用 `refresh( )` 强制刷新数据

  + clear：是一个函数，用于清除当前数据的缓存

  ![alt text](images/$fetch与useAsyncData.png)

+ 整体来讲，useAsyncData 相比 $fetch 更加方便.

+ 场景示例：从一个 API 获取文章数据并渲染到页面上，同时支持以下功能：

  + 显示加载状态
  + 数据请求完成后展示文章列表
  + 在点击按钮时刷新数据

+ $fetch示例代码

  ```html
  <template>
    <div>
      <button @click="fetchPosts" :disabled="loading">刷新数据</button>
      <div v-if="loading">加载中...</div>
      <ul v-else>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </template>

  <script setup>
  const posts = ref([]) // 存储文章列表
  const loading = ref(false); // 加载的状态

  const fetchPosts = async ()=>{
    loading.value = true;
    try{
      posts.value = await $fetch('/api/posts');
    } finally {
      loading.value = false;
    }
  }
  fetchPosts();
  </script>
  ```

+ useAsyncData示例代码

  ```html
  <template>
    <div>
      <button @click="refresh" :disabled='pending'>刷新数据</button>
      <div v-if="pending">加载中...</div>
      <ul v-else>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </template>

  <script setup>
  const { data: posts, pending, refresh} = await useAsyncData('posts', ()=>$fetch('/api/posts'));
  </script>
  ```

+ 总结：

  + `$fetch`: 方法灵活性高，可以在任何地方使用
  + `useAsyncData`: 为服务端渲染（SSR）或组件挂载之前的数据获取场景设计，返回响应式数据以及一系列工具函数

    + 如果是在组件已经挂载后使用，Nuxt 会给出一个警告：Component is already mounted, please use $fetch instead.