# key

## 概述

+ Vue 默认按照“就地更新”的策略来更新通过 `v-for` 渲染的元素列表。当数据项的顺序改变时，Vue 不会随之移动 DOM 元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染

+ 默认模式是高效的，但**只适用于列表渲染输出不依赖子组件状态或者临时 DOM 状态 (例如表单输入值)**

+ 为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，你需要为每个项目提供一个唯一的 `key` attribute

  ```html
  <div v-for="item in items" :key="item.id">
    <!-- 内容 -->
  </div>
  ```

## template

+ 当你使用 `<template v-for>` 时，`key` 应该被放置在这个 `<template>` 容器上

  ```html
  <template v-for="todo in todos" :key="todo.name">
    <li>{{ todo.name }}</li>
  </template>
  ```

## 建议

+ [推荐](https://staging-cn.vuejs.org/style-guide/#keyed-v-for-essential "推荐")在任何可行的时候为 `v-for` 提供一个 `key`

+ `key` 绑定的值期望是一个基础类型的值，例如字符串或 number 类型。不要用对象作为 `v-for` 的 key
