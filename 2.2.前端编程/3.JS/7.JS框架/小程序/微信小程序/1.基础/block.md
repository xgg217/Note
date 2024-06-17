# block

## 作用

+ `<block/>` 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性

  ```html
  <block wx:if="{{true}}">
    <view> view1 </view>
    <view> view2 </view>
  </block>
  ```
