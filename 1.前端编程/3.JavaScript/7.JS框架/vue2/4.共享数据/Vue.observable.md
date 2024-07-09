# Vue.observable

## 用法

+ 让一个对象可响应
+ Vue 内部会用它来处理 data 函数返回的对象

+ 返回的对象可以直接用于渲染函数和计算属性内，并且会在发生变更时触发相应的更新
+ 也可以作为最小化的跨组件状态存储器，用于简单的场景：

  ```js
  const state = Vue.observable({ count: 0 })

  const Demo = {
    render(h) {
      return h('button', {
        on: { click: () => { state.count++ }}
      }, `count is: ${state.count}`)
    }
  }
  ```

## 示例

+ 代码1： 在 页面1 操作 count ，页面2 数据也会同步；

  ```js
  // store.js
  import Vue from "vue"

  export const state = Vue.observable({
    count: 0
  })
  ```

  ```html
  <!-- 页面1 -->
  <template>
    <div class="observable">
      <h4>Observable1</h4>
      <div class="observable-layout">
        <button @click="add">add</button>
        <h4>{{ count }}</h4>
        <button @click="reduce">reduce</button>
      </div>
      <div><button @click="go">go to Observable2</button></div>
    </div>

  </template>

  <script>
  import { state } from "./store.js";
  export default {
    data() {
      return {};
    },
    computed: {
      count() {
        return state.count;
      },
    },
    methods: {
      add() {
        state.count++;
      },
      reduce() {
        state.count--;
      },
      go() {
        this.$router.push({ name: "About" });
      },
    },
  };
  </script>
  ```

  ```html
  <!-- 页面 -->
  <template>
    <div class="about">
      <div class="observable">
        <h4 style="color: red">Observable2</h4>
        <div class="observable-layout">
          <button @click="add">add</button>
          <h4>{{ count }}</h4>
          <button @click="reduce">reduce</button>
        </div>
        <div><button @click="go">go back Observable1</button></div>
      </div>
    </div>

  </template>
  <script>
  import { state } from "./observable/store.js";
  export default {
    data() {
      return {};
    },
    computed: {
      count() {
        return state.count;
      },
    },
    methods: {
      add() {
        state.count++;
      },
      reduce() {
        state.count--;
      },
      go() {
        this.$router.push({ name: "Observable" });
      },
    },
    created() {
      console.log(this.count);
    },
  };
  </script>
  ```
