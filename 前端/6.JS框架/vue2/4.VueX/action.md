# action

## 使用

+ `Action` 类似于 `mutation`，不同在于：

  - `Action` 提交的是 `mutation`，而不是直接变更状态

  - `Action` 可以包含任意异步操作

+ Action 函数接受一个与 `store` 实例具有相同方法和属性的 `context` 对象，因此你可以调用 `context.commit` 提交一个 `mutation`，或者通过 `context.state` 和 `context.getters` 来获取 `state` 和 `getters`:

    ```js
    const store = new Vuex.Store({
      state: {
        count: 0
      },
      mutations: {
        increment (state) {
          state.count++
        },

        add(state, num) {
          state.count = state.count + num;
        }
      },
      actions: {
        increment (context) {
          context.commit('increment')
        },

        // 传递参数
        addFun(context, num) {
          context.commit('add', num)
        }
      }
    });
    ```

## 分发Action

+ 使用

    ```js
    store.dispatch('increment')
    ```

+ 虽然和 `mutation` 差不多，但是在 `action` 中，可以执行**异步操作**，但是mutation中不行！！！

    ```js
    actions: {
      incrementAsync ({ commit }) {
        setTimeout(() => {
          commit('increment')
        }, 1000)
      }
    }
    ```

## 组合 Action

+ Action 通常是异步的，那么如何知道 `action` 什么时候结束呢？

    ```js
    actions: {
      actionA ({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit('someMutation')
            resolve()
          }, 1000)
        })
      }
    }
    ```

    ```js
    store.dispatch('actionA').then(() => {
      // ...
    })
    ```
