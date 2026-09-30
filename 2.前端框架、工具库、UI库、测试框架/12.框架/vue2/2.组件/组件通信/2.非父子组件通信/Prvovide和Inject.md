# Prvovide 和 Inject

## 概述

+ 祖先组件提供数据（provide），子孙组件按需注入（inject）

+ 会将组件的阻止方式，耦合在一起，从而使组件重构困难，难以维护

+ 不推荐在中大型项目中使用，适用于一些小组件的编写

+ 使用方式

  ```js
  // 父组件提供 "foo"
  const Provider = {
    provide: {
      foo: "bar"
    }
  }
  ```

  ```js
  // 后代组件注入 "foo"
  const Child = {
    inject: ["foo"]，
    created() {
      console.log(this.foo) // "bar"
    }
  }
  ```

## 示例

+ 示例：APP --> AA --> BB

  ```html
  <!-- 父组件 APP.vue -->
  <template>
    <div id="app">
      <AA />
    </div>
  </template>

  <script>
  import AA from './components/AA.vue'

  export default {
    name: 'App',
    components: {
      AA
    },

    provide: {
      a: 1,
      b: 2
    },
  }
  </script>
  ```

  ```html
  <!-- 后代组件 AA -->
  <template>
    <div>
      <BB />
    </div>

  </template>

  <script>
  import BB from './BB.vue'
  export default {
    components: {
      BB
    },
  }
  </script>
  ```

  ```html
  <!-- 后代组件 BB -->
  <template>
    <div>BB</div>

  </template>

  <script>
  export default {

    inject: ['a', 'b'],

    created() {
      console.log(this.a);
      console.log(this.b);
    },
  }
  </script>

  <style lang="scss" scoped>
  </style>
  ```
