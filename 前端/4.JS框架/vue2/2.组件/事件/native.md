# native

## 监听一个原生事件

  - 你可能有很多次想要在一个组件的根元素上直接监听一个原生事件

  - 这时，你可以使用 `v-on` 的 `.native` 修饰符：

    ```javascript
    <base-input @focus.native="onFocus"></base-input>
    ```

    ```javascript
    <base-input @click.native="onFocus"></base-input>
    ```
