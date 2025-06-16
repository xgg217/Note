# v-for与v-if

## 注意

+ 永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上

+ 当 Vue 处理指令时，`v-for` 比 `v-if` 具有更高的优先级

## 示例

+ 例如

  ```html
  <ul>
    <li
      v-for="user in users"
      v-if="user.isActive"
      :key="user.id"
    >
      {{ user.name }}
    </li>
  </ul>
  ```

+ 将会经过如下运算：

  ```js
  this.users.map(function (user) {
    if (user.isActive) {
      return user.name
    }
  })
  ```

+ 因此哪怕我们只渲染出一小部分用户的元素，也得在每次重新渲染的时候遍历整个列表，不论活跃用户是否发生了变化
