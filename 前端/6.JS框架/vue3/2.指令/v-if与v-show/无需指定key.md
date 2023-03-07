# key

## 无须指定key

+ 当使用 `v-if` `v-else-if` `v-else` 分支的时候，不再需要指定 `key` 值，因为 vue3 会自动给予每个分支一个唯一的 `key`

    ```html
    <!-- vue 2 需要添加 key值 -->
    <div v-if="isAccout" key="1">
      <label>账号</label>
      <input type="text">
    </div>
    <div v-else  key="2">
      <label>手机号</label>
      <input type="text">
    </div>

    <button type="button" @click.stop="handleQh">切换登录方式</button>
    ```

    ```html
    <!-- vue 3 自动添加 key 值 -->
    <div v-if="isAccout">
      <label>账号</label>
      <input type="text">
    </div>
    <div v-else>
      <label>手机号</label>
      <input type="text">
    </div>

    <button type="button" @click.stop="handleQh">切换登录方式</button>
    ```
