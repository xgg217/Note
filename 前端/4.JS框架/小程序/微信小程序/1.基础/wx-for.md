# wx:for

## 概述

+ 在组件上使用 `wx:for` 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件

+ 默认数组的当前项的下标变量名默认为 `index`，数组当前项的变量名默认为 `item`

    ```js
    <view wx:for="{{array}}">
      {{index}}: {{item.message}}
    </view>
    ```

    ```js
    Page({
      data: {
        array: [{
          message: 'foo',
        }, {
          message: 'bar'
        }]
      }
    })
    ```

+ 使用 `key`&#x20;

    ```js
    <block wx:for="{{arr}}" wx:key="index">
      <text >{{ item.name }}</text>
    </block>
    ```

## 修改变量名和下标

+ 使用 `wx:for-item` 可以指定数组当前元素的变量名，

+ 使用 `wx:for-index` 可以指定数组当前下标的变量名：

    ```js
    <view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
      {{idx}}: {{itemName.message}}
    </view>
    ```

## 嵌套

+ 代码

    ```js
    // 九九乘法表
    <view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="i">
      <view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="j">
        <view wx:if="{{i <= j}}">
          {{i}} * {{j}} = {{i * j}}
        </view>
      </view>
    </view>
    ```

## block wx:for

+ 类似 `block wx:if`，也可以将 `wx:for` 用在 `<block/>` 标签上，以渲染一个包含多节点的结构块

    ```js
    <block wx:for="{{[1, 2, 3]}}">
      <view> {{index}}: </view>
      <view> {{item}} </view>
    </block>
    ```
