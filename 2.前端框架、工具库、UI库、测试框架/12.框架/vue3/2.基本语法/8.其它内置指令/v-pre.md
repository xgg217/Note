# v-pre

## 概述

+ 跳过该元素及其所有子元素的编译
+ 元素内具有 `v-pre` ，所有 Vue 模板语法都会被保留并按原样渲染
+ 最常见的用例就是显示原始双大括号标签及内容

  ```html
  <span v-pre>{{ this will not be compiled }}</span>
  ```
