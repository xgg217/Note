# class与style

## 动态class

  - 代码

    ```js
    <view class="{{orderStatusIndex === item.value ? 'active' : ''}}">{{ item.key }}</view>
    ```

## style

  - 设置1

    ```js
    <view class="boxs" style="display:{{ isBool ? 'block' : 'none' }};"></view>
    ```

  - 设置2

    ```js
    <scroll-view style="height:{{scrollHei}}%;" ></scroll-view>
    ```
