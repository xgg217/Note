# v-once

## 概述

+ 仅渲染元素和组件一次，并跳过之后的更新

+ 在随后的重新渲染，元素/组件及其所有子项将被当作静态内容并跳过渲染。这可以用来优化更新时的性能

  ```html
  <!-- 单个元素 -->
  <span v-once>This will never change: {{msg}}</span>

  <!-- 带有子元素的元素 -->
  <div v-once>
    <h1>comment</h1>
    <p>{{msg}}</p>
  </div>
  ```

  ```html
  <!-- 组件 -->
  <MyComponent v-once :comment="msg" />

  <!-- `v-for` 指令 -->
  <ul>
    <li v-for="i in list" v-once>{{i}}</li>
  </ul>
  ```

