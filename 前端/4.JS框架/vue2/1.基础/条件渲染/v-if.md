# v-if

## 定义

  - 根据某一条件，判断是否要展示某个元素

## v-if

  - 条件为**真**时，显示

    ```js
    // 显示
    <p v-if="true">小刚刚</p>
    ```

    ```js
    // 不显示
    <p v-if="isBool">小刚刚</p>

    data() {
      runter {
        isBool: false
      }
    }
    ```

## v-else-if

  - 表示 `v-if` 的 `v-else-if` 块

    ```js
    <div v-if="tyoe === 'a'">12</div>
    <div v-else-if="tyoe === 'b'">23</div>
    <div v-else-if="tyoe === 'c'">34</div>  <!-- 显示 -->

    data() {
      runter {
        tyoe: 'c'
      }
    }
    ```

  - 注意：一起使用，不能打断

    ```js
    <div v-if="tyoe === 'a'">12</div>
    <div v-else-if="tyoe === 'b'">23</div>
    <span>v-else-if 指令失效</span>
    <div v-else-if="tyoe === 'c'">34</div>  <!-- 显示 -->
    ```

## v-else

  - 表示 `v-if` 或 `v-else-if` 块 `else` 的块
