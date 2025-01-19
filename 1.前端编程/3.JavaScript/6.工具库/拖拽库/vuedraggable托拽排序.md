# vuedraggable

## 概述

+ vuedraggable 是一个基于 Sortable.js 的 Vue 组件，用于实现拖拽和排序功能
+ 它可以让你在 Vue 应用中轻松地实现拖拽排序，并提供了丰富的配置选项和事件来控制拖拽行为

+ Vue.Draggable 是基于 Sortable.js 构建的，用于在 Vue 应用中实现这些功能

+ 对 Vue2 支持的比较好

## 基本使用

+ 安装

  ```shell
  npm install vuedraggable@4.0.0
  ```

+ 注意在安装的时候，一定要指定安装的版本为 4.0.0

+ 安装后可以从这个库中导入一个组件：

  ```html
  <template>
    <draggable
      v-model="myArray"
      group="people"
      @start="drag=true"
      @end="drag=false"
      itemKey="id"
    >
      <template #item="{ element }">
        <div class="task">{{ element.name }}</div>
      </template>
    </draggable>
  </template>

  <script setup>
  import draggable from 'vuedraggable'
  </script>
  ```

+ 这是 vuedraggable 的一个标准用法

  1. `v-model="myArray"`：数组包含了需要拖拽排序的元素
  2. `group="people"`：group 属性用于配置分组，相同 `group` 名称的 `draggable` 实例之间允许相互拖拽元素
  3. `@start="drag=true"`：当拖拽操作开始时触发，这里将 `drag` 变量设置为 `true` ，这可以用于在拖拽开始时触发一些行为，比如改变样式或显示一些提示
  4. `@end="drag=false"`：当拖拽操作结束时触发，这里将 `drag` 变量设置为 `false`

## 示例

+ 示例

  ```html
  <template>
    <div class="list-container">
      <div>
        <h2>未完成</h2>
        <!-- 任务：显示未完成的任务，并且可以自由拖拽 -->

        <!-- 这是普通的显示列表内容 -->
        <!-- <div v-for="item in list1" :key="item.id" class="task">
          {{ item.text }}
        </div> -->

        <!-- 使用vuedraggable插件实现拖拽 -->
        <draggable v-model="list1" group="tasks" @start="drag = true" @end="endHandle" itemKey="id">
          <template #item="{ element }">
            <TransitionGroup name="fade" tag="div">
              <div class="task" :key="element.id">{{ element.text }}</div>
            </TransitionGroup>
          </template>
        </draggable>
      </div>
      <div>
        <h2>已完成</h2>
        <!-- 任务：显示已完成的任务，并且可以自由拖拽 -->
        <!-- <div v-for="item in list2" :key="item.id" class="task">
          {{ item.text }}
        </div> -->

        <!-- 使用vuedraggable插件实现拖拽 -->
        <draggable v-model="list2" group="tasks" @start="drag = true" @end="endHandle" itemKey="id">
          <template #item="{ element }">
            <TransitionGroup name="fade" tag="div">
              <div class="task" :key="element.id">{{ element.text }}</div>
            </TransitionGroup>
          </template>
        </draggable>
      </div>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'
  import draggable from 'vuedraggable'

  // 未完成列表
  const list1 = ref([
    { id: 1, text: '学习Vue' },
    { id: 2, text: '书写Draggable案例' },
    { id: 3, text: '看10页书' }
  ])

  // 已完成列表
  const list2 = ref([
    { id: 4, text: '玩游戏' },
    { id: 5, text: '听音乐' },
    { id: 6, text: '看电影' }
  ])

  const endHandle = () => {
    console.log('拖拽结束')
  }
  </script>
  ```


