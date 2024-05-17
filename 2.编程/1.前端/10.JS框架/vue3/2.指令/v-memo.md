# v-memo

## 概述

+ `v-memo` 仅用于性能至上场景中的微小优化，应该很少需要
+ 最常见的情况可能是有助于渲染海量 `v-for` 列表 (长度超过 1000 的情况)：

  ```html
  <div v-for="item in list" :key="item.id" v-memo="[item.id === selected]">
    <p>ID: {{ item.id }} - selected: {{ item.id === selected }}</p>
    <p>...more child nodes</p>
  </div>
  ```
