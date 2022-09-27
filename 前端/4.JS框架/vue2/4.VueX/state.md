# state

## 简介

  - 单一状态树，使用一个对象就包含了全部的应用层级状态

## 在Vue组件中获得Vuex状态

  - Vuex 通过 `store` 选项，提供了一种机制将状态从跟组件“注入”到每一个子组件中（调用 `Vue.use(Vuex)`）

  - 通过在根实例中注册 `store` 选项，该 `store` 实例会注入到根组件下的所有子组件中，且子组件能通过 `this.$store` 访问

    ```javascript
    <div class="home">
      {{ $store.state.count }}
    </div>
    ```

## mapState 辅助函数

  - 当一个组件需要获取多个状态时，将这些状态都声明为计算属性会有些重复和冗余

  - 为了解决这个问题，我们可以使用 `mapState` 辅助函数帮助我们生成计算属性：

    ```javascript
    import { mapState } from 'vuex';

    computed: {
      ...mapState(['count', 'a', 'b']),
    },
    ```

  - 使用不同的名字：

    ```javascript
    computed: {
      ...mapState({
        storeCount: state => state.count,
        // 简写
        storeCount: 'count', // 等同于 state => state.count
      }),
    },
    ```
