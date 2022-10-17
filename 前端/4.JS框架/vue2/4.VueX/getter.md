# getter

## 基础

- `store` 的计算属性

- `getter` 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算

- `Getter` 接收 `state` 作为其第一个参数、`getters` 作为其第二个参数

    ```js
    getters: {
      doubleCount (state) {
        return state.count * 2;
      }
    ```

````html
## 通过属性访问

  + `Getter` 会暴露为 `store.getters` 对象：

    ```js
    this.$store.getters.doubleCount
    ```

## 通过方法访问

  + 也可以让 `getter` 返回一个函数，来实现给 `getter` 传参

    ```js
    getters: {
      addCount: state => num => state.count + num;
    }
    ```

    ```js
    this.$store.addCount(3);
    ```

## mapGetters 辅助函数

  + 使用

    ```js
    import { mapsGetters } from 'vuex';

    export default {
      computed: {
        ...mapGetters(['doubleCount','addCount'])
      }
    }
    ```

  + 如果你想将一个 `getter` 属性另取一个名字，使用对象形式：

    ```js
    mapGetters({
      // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
      storeDoubleCount: 'doubleCount'
    })
````
