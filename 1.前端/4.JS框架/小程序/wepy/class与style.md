# class与style

## 动态class

  - 代码

    ```javascript
    <view class="{{orderStatusIndex === item.value ? 'active' : ''}}">{{ item.key }}</view>
    ```

## style

  - 设置1

    ```javascript
    <view class="boxs" style="display:{{ isBool ? 'block' : 'none' }};"></view>
    ```

  - 设置2

    ```javascript
    <scroll-view style="height:{{scrollHei}}%;" ></scroll-view>
    ```
