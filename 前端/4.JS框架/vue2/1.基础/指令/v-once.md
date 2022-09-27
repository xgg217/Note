# v-once

## 作用

  - 只渲染元素和组件一次

  - 随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过

  - 这可以用于优化更新性能

## 使用

  - 使用

    ```javascript
    <!-- 单个元素 -->
    <span v-once>This will never change: {{msg}}</span>
    ```

    ```javascript
    <!-- 有子元素 -->
    <div v-once>
      <h1>comment</h1>
      <p>{{msg}}</p>
    </div>
    ```

    ```javascript
    <!-- 组件 -->
    <my-component v-once :comment="msg"></my-component>
    ```

    ```javascript
    <!-- `v-for` 指令-->
    <ul>
      <li v-for="i in list" v-once>{{i}}</li>
    </ul>
    ```
