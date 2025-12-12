# markstream-vue

## 特点

+ 极致性能：针对流式场景最小化重渲染，DOM 更新高效
+ 流式优先：原生支持不完整或频繁更新的 Markdown 内容
+ Monaco 流式更新：大代码块也能平滑增量高亮
+ 渐进式 Mermaid：语法一够就渲染，后续持续优化
+ 自定义组件：可在 Markdown 中直接嵌入 Vue 组件
+ 零配置：Vue 3 项目里开箱即用

## 渲染模式 - 增量 DOM 更新

+ markstream-vue 把 Markdown 先切成 token 流，再映射成 Vue VNode 差量 patch
+ 一句话：*“新token来多少，就插多少节点，旧节点纹丝不动。”*

  ![alt text](<增量 DOM 更新.gif>)

## 使用

+ 安装

  ```js
  npm i markstream-vue
  ```

+ 使用

  ```html
  <template>
    <MarkdownRenderer :stream="chunk" />
  </template>

  <script setup>
  import { ref } from 'vue'
  import MarkdownRenderer from 'markstream-vue'

  const chunk = ref('')
  const evtSource = new EventSource('/api/ai-stream')

  evtSource.onmessage = (e) => {
    chunk.value += e.data   // 逐句追加
  }
  </script>
  ```
