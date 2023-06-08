# v-if与v-for

## 概述

+ 同时使用 `v-if` 和 `v-for` 是**不推荐的**

+ 当它们同时存在于一个节点上时，`v-if` 比 `v-for` 的优先级更高

+ 这意味着 `v-if` 的条件将无法访问到 `v-for` 作用域内定义的变量别名

  ```html
  <!--
    这会抛出一个错误，因为属性 todo 此时
    没有在该实例上定义
  -->
  <li v-for="todo in todos" v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
  ```

## 解决办法

+ 在外新包装一层 `<template>` 再在其上使用 `v-for` 可以解决这个问题 (这也更加明显易读)

  ```html
  <template v-for="todo in todos">
    <li v-if="!todo.isComplete">
      {{ todo.name }}
    </li>
  </template>
  ```

+ 解决办法（同样适用于 vue 2）：需要借助于 `computed` 计算属性

  ```html
  <ul>
    <template v-for="(item, index) of sdfAll" :key="item.ids">
      <li>{{ index + 1 }}--{{ item.title }}</li>
    </template>
  </ul>

  ```

  ```js
  <script>
  import { ref, computed } from "vue";

  const listSet = [
    { ids:1, sell: false, title: "iphone12" },
    { ids:2, sell: true, title: "huawei P0" },
    { ids:3, sell: false, title: "xiaomi 10" },
    { ids:4, sell: false, title: "vivo x30" },
  ];

  export default {
    setup() {
      const allListRef = ref(listSet);

      const sdfAllRef =  computed(() => {
        return allListRef.value.filter( item => {
          if(item.sell) {
            return true
          }
          return false
        })
      })

      return {
        allList: allListRef,
        sdfAll: sdfAllRef,
      }
    }
  }
  </script>
  ```
