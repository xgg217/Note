# slot插槽

## slot 组件内容分发插槽

- 要特别注意的是，父组件中一旦声明了对应于子组件插槽的内容分发标签，即便没有内容，子组件插槽中的默认内容也不会显示出来，只有删除了父组件中对应的内容分发标签，才能显示出来

    ```html
    <!-- 组件 -->
    <view class="panel">
      <slot name="title">默认标题</slot>
      <slot name="content">默认内容</slot>
    </view>
    ```

    ```html
    <!-- 父组件 -->
    <panel>
      <view slot="title">新的标题</view>
      <view slot="content">
          <text>新的内容</text>
      </view>
    </panel>
    ```
