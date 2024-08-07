# v-show

## 概述

+ 另一个可以用来按条件显示一个元素的指令是 `v-show`

  ```html
  <h1 v-show="ok">Hello!</h1>
  ```

## 不同之处

+ 不同之处在于 `v-show` 会在 DOM 渲染中保留该元素；`v-show` 仅切换了该元素上名为 `display` 的 CSS 属性
+ 当值为 `false` 的时候，会将 `display` 属性设置为 `none`

+ `v-show` 不支持在 `<template>` 元素上使用，也没有 `v-else` 来配合
