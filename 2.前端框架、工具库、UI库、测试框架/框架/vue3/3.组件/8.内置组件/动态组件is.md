# is 动态组件

## 语法

+ 使用 `<component :is="组件"></component>`

+ 被传给 `:is` 的值可以是以下几种

  + 被注册的组件名
  + 导入的组件对象

  ```html
  <script setup>
  import Home from './Home.vue'
  import Posts from './Posts.vue'
  import Archive from './Archive.vue'

  const currentTab = ref('Home');

  const tabs = {
    Home,
    Posts,
    Archive
  }
  </script>

  <template>
    <div class="demo">
      <button
        v-for="(_, tab) in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
      <component :is="tabs[currentTab]" class="tab"></component>
    </div>
  </template>
  ```

+ 当使用 `<component :is="...">` 来在多个组件间作切换时，被切换掉的组件会被卸载
+ 我们可以通过 `<KeepAlive>` 组件强制被切换掉的组件仍然保持“存活”的状态
