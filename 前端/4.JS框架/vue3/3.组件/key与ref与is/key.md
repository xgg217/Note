# key

## 概述

- `key` 这个特殊的 attribute 主要作为 Vue 的虚拟 DOM 算法提示，在比较新旧节点列表时用于识别 vnode

## 语法

- `number | string | symbol`

## 使用key与不使用key

- 在没有 `key` 的情况下，Vue 将使用一种最小化元素移动的算法，并尽可能地就地更新/复用相同类型的元素

- 如果传了 `key`，则将根据 `key` 的变化顺序来重新排列元素，并且将始终移除/销毁 `key` 已经不存在的元素

## key与v-for

- 示例

    ```js
    <ul>
      <li v-for="item in items" :key="item.id">...</li>
    </ul>
    ```

- 当使用 `<template>` 进行 `v-for` 循环时，需要把 `key` 值放到 `<template>` 中，而不是它的子元素中

## key与v-if

- 当使用 `v-if` `v-else-if` `v-else` 分支的时候，不再需要指定 `key` 值，因为 vue3 会自动给予每个分支一个唯一的 `key`

## 替换元素/组件

- 也可以用于强制替换一个元素/组件而不是复用它。当你想这么做时它可能会很有用：

  - 在适当的时候触发组件的生命周期钩子

  - 触发过渡

        ```ts
        // 当 text 变化时，<span> 总是会被替换而不是更新，因此 transition 将会被触发
        <transition>
          <span :key="text">{{ text }}</span>
        </transition>
        ```

## 注意点

- 同一个父元素下的子元素必须具有**唯一的 key**

- 重复的 key 将会导致渲染异常

- 即使要手工给予 `key` 值，也必须给予每个分支唯一的 `key` 值，**不要因为要重用分支而给予相同的 key**
