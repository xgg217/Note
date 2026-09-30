# wx:key

## 作用

+ 如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 `input` 中的输入内容，`switch` 的选中状态），需要使用 `wx:key` 来指定列表中项目的唯一的标识符

## wx:key 使用

1. 字符串，代表在 `for` 循环的 `array` 中 `item` 的某个 `property`，该 `property` 的值需要是列表中唯一的字符串或数字，且不能动态改变

  ```js
  <switch wx:for="{{objectArray}}" wx:key="unique" style="display: block;"> {{item.id}} </switch>

  <button bindtap="switch"> Switch </button>

  <button bindtap="addToFront"> Add to the front </button>
  ```

  ```js
  <switch wx:for="{{numberArray}}" wx:key="*this" style="display: block;"> {{item}} </switch>

  <button bindtap="addNumberToFront"> Add to the front </button>
  ```

## 触发时机

+ 当数据改变触发渲染层重新渲染的时候，会校正带有 `key` 的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率

## 注意

+ 如不提供 `wx:key`，会报一个 `warning`

+ 如果明确知道该列表是静态，或者不必关注其顺序，可以选择忽略

1. 保留关键字 `this` 代表在 `for` 循环中的 `item` 本身，这种表示需要 `item` 本身是一个唯一的字符串或者数字
