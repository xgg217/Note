# style设置

## 全局样式

*   `uni.scss`

    ```javascript
    $uni-color-primary: #007aff;
    ```

    ```javascript
    // 使用
    <style scoped>
      @import url("@/static/style/index.css");
      .box {
        border: 1rpx solid $uni-color-warning;
      }
    </style>
    ```

## scss

*   使用

    ```css
    <style scoped lang="scss">
    @import url("@/static/style/index.css");
    .box {
      border: 1rpx solid red;
    }

    .xg {
      .blue {
        color: blue;
      }
    }
    </style>
    ```

## class

*   class

    ```javascript
    <view class="normal_view" />
    ```

    ```javascript
    <view :class="{ active: isActive }">111</view>
    <view class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }">222</view>
    <view class="static" :class="[activeClass, errorClass]">333</view>
    <view class="static" v-bind:class="[isActive ? activeClass : '', errorClass]">444</view>
    <view class="static" v-bind:class="[{ active: isActive }, errorClass]">555</view>
    ```

## 行内样式设置

*   style

    ```javascript
    <view :style="{color:color}"></view>
    <view v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">666</view>
    <view v-bind:style="[{ color: activeColor, fontSize: fontSize + 'px' }]">777</view>
    ```
