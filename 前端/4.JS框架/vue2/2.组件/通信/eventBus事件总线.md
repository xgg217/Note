# eventBus事件总线

## eventBus

  - 代码

    ```js
    Vue.prototype.$bus = new Vue();
    ```

    ```js
    Vue.component('cmp-a', {
      data () {
        return {
          a: 'a'
        }
      },
      methods: {
        onClick () {
          this.$bus.$on('click', this.a)
        }
      },
      template: `
        <div>
          <button @click="onClick">点击</button>
        </div>
      `,
    })
    ```

    ```js
    Vue.component('cmp-a', {
      mounted () {
        this.$bus.$on('click', data => {
          console.log(data);
        })
      },
      template: `
        <div>b</div>
      `,
    })
    ```

  - 非父子组件通信时，可以使用这种方法，但仅针对于小型项目

  - 中大型项目使用时，会造成代码混乱不易维护
