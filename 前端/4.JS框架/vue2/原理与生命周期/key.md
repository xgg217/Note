# key

## 关于key

- Vue更新使用 `v-for` 渲染的元素列表时，它默认使用 **“就地更新”** 的策略

- 如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是简单复用此处每个元素&#x20;

## key的使用方法

- 预期值：`number` | `string` 有相同父元素的子元素必须有独特的 `key`，重复的 `key` 会造成渲染错误，`key` 应**唯一**

    ```js
    <ul id="app">
      <li v-for="(person, index) in persons" :key="person">
        {{ person }}
      </li>
    </ul>
    ```

    ```js
    data() {
      return {
        persons: ['杉杉', '思彤哥', '成哥', '邓哥']
      }
    }
    ```

- 不建议将数组的索引作为 `key` 值，如：

    ```js
    <li v-for="(person, index) in persons" :key="index">
      {{ person }}
    </li>
    ```

- 当改变数组时，页面会重新渲染，Vue会根据key值来判断要不要移动元素

## 其他作用

- 跟后台协作时，传回来的每一条数据都有一个 `id` 值，这个 `id` 就是唯一的，用 `id` 做 `key` 即可

- key不仅为v-for所有，它可以强制替换元素

    ```html
    <ul id="app">
      <button @click="show = !show">{{ show ? '显示' : '隐藏'}}</button>
      <input type="text" v-if="show" key="a" />
      <input type="text" v-else key="b" />
    </ul>
    ```

    ```js
    data() {
      retrun {
        show: true
      }
    }
    ```

## 总结

- 用组件唯一的 `id`（一般由后端返回）作为它的 `key`，实在没有的情况下，可以在获取到列表的时候通过某种规则为它们创建一个 `key`，并保证这个 key 在组件整个生命周期中都保持稳定

- 别用 `index` 作为 `key`，和没写基本上没区别，因为不管你数组的顺序怎么颠倒，index 都是 `0` , `1` , `2` 这样排列，导致 Vue 会复用错误的旧子节点，做很多额外的工作

- 千万别用随机数作为 `key` ，不然旧节点会被全部删掉，新节点重新创建
