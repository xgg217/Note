# slot插槽

## slot 使用

  - 代码

    ```html
    <!-- 组件模板 -->
    <view class="wrapper">
      <view>这里是组件的内部节点</view>
      <slot></slot>
    </view>
    ```

    ```html
    <!-- 引用组件的页面模板 -->
    <view>
      <component-tag-name>
        <!-- 这部分内容将被放置在组件 <slot> 的位置上 -->
        <view>这里是插入到组件slot中的内容</view>
      </component-tag-name>
    </view>
    ```

## 多个 slot 使用

  - 需要在模板 js 中写声明语句 `options: { multipleSlots: true }`

  - 每个模板大学要为每个 `slot` 加入的 `name` 名称来区分

  - 在引入模板的 page 页面的每个子节点添加 `slot` 属性来区分传入的 `slot` 位置

    ```html
    // 自定义组件 wxml 文件
    <view >
      <text >111</text>
      <slot name="a"></slot>
      <view >
        <slot name="b"></slot>
      </view>
    </view>
    ```

    ```javascript
    // 自定义组件 js 文件
    // 开启多 slot
    Component({
      options: {
        multipleSlots: true
      },
    });
    ```

    ```html
    // 引用
    <xgg-cmp>
      <text slot="a">a</text>
      <text slot="b">b</text>
    </xgg-cmp>
    ```
