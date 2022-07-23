# Vuex-Module

## 基础

  - 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，`store` 对象就有可能变得相当臃肿。

  - 为了解决以上问题，`Vuex` 允许我们将 `store` 分割成模块（`module`）。

  - 每个模块拥有自己的 `state`、`mutation`、`action`、`getter`。

    ```javascript
    modules: {
      a,
      b
    }
    ```

  - 获取 `state`：`this.$store.state.moduleName.xxx`

  - 获取 `getter`：`this.$store.getters.xxx`

  - 提交 `mutation`：`this.$store.commit('xxx');`

  - 分发 `action`：`this.$store.dispatch('xxx');`

  - 可以通过 `mapXXX` 的方式拿到 `getters` 、`mutations`、`actions`，但是不能拿到 `state`，如果想通过这种方式获得 `state`，需要加命名空间。

## 命名空间

  - 可以通过添加 `namespaced: true` 的方式使其成为带命名空间的模块。

      - 获取 `state`：`this.$store.state.moduleName.xxx`

      - 获取 `getter`：`this.$store.['moduleName/getters'].xxx`

      - 获取 `getter`：`this.$store.getters['moduleName/xxx']`

      - 提交 `mutation`：`this.$store.commit('moduleName/xxx');`

      - 分发 `action`：`this.$store.dispatch('moduleName/xxx');`

      - 可以通过mapXXX的方式获取到 `state`、`getters`、`mutations`、`actions`。

        ```javascript
        computed: {
          ...mapState('moduleName', {
          a: state => state.count,
        })
        },
        methods: {
          ...mapActions('moduleName', [
            'foo', // -> this.foo()
            'bar' // -> this.bar()
          ])
        }
        ```

## 模块的局部状态

  - 对于模块内部的 `mutation` 和 `getter`，接收的第一个参数是模块的局部状态对象。

  - 同样，对于模块内部的 `action`，局部状态通过 `context.state` 暴露出来，根节点状态则为 `context.rootState`。

  - 对于模块内部的 `getter`，根节点状态会作为第三个参数暴露出来。

## createNamespacedHelpers

  - 你可以通过使用 createNamespacedHelpers 创建基于某个命名空间辅助函数。它返回一个对象，对象里有新的绑定在给定命名空间值上的组件绑定辅助函数：

    ```javascript
    import { createNamespacedHelpers } from 'vuex'

    const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')

    export default {
      computed: {
        // 在 `some/nested/module` 中查找
        ...mapState({
          a: state => state.a,
          b: state => state.b
        })
      },
      methods: {
        // 在 `some/nested/module` 中查找
        ...mapActions([
          'foo',
          'bar'
        ])
      }
    }
    ```

## 使用

  - 模块(`stroe/modules/a.js`)

    ```javascript
    // a.js
    export default {
      namespaced: true,  // 命名空间

      // 模块内容（module assets）
      state: { ... }, // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响

      getters: {
        isAdmin () { ... } // -> getters['account/isAdmin']
      },

      actions: {
        login () { ... } // -> dispatch('account/login')
      },

      mutations: {
        login () { ... } // -> commit('account/login')
      },
    }
    ```

  - 引入（`stroe/index.js`）

    ```javascript
    import Vue from 'vue';
    import Vuex from 'vuex';

    import a from './modules/a.js'

    export default new Vuex.Store({
      strict: process.env.NODE_ENV !== 'production',
      modules: {
        a
      },
    })
    ```
