# Teleport传送门

## 概述

  - `Teleport` 能够直接帮助我们将组件渲染后页面中的任意地方，只要我们指定了渲染的目标对象。

  - `Teleport` 组件提供一个 `slot` 功能，将 `slot` 放置到 `to` 属性指定页面的位置

    ```html
    <teleport to="css选择器">
      <!-- html 结构 -->
    </teleport>
    ```

## 解决的问题

  - 在开发中，可能存在 **组件逻辑结构** 合理，但是真实 DOM 结构不合理

  - 例如：蒙层弹框按钮，有某个按钮控制弹框的显示，但是弹框是全局显示，所以存在矛盾之处。

    ```html
    <div class="block">
      <h2>区域1</h2>
      <p>
        <button type="button" @click="isBool = true">打开蒙层</button>
      </p>
      <template v-if="isBool">
        <!-- 自定义全局弹窗组件 -->
        <modal-cmp>
          <button type="button" @click="isBool = false">关闭蒙层</button>
        </modal-cmp>
      </template>
    </div>
    ```

## 示例

  - 将内部结构放置到页面指定位置

    ```html
    <!-- 将内部代码放到 body 标签下 -->
    <teleport to="body">
      <modal-cmp>
        <button type="button" @click="isBool = false">关闭蒙层</button>
      </modal-cmp>
    </teleport>
    ```
