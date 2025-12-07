# transition-delay 过渡延迟

## 概述

+ CSS 的transition-delay属性规定了在过渡效果开始作用之前需要等待的时间

+ 值以秒（s）或毫秒（ms）为单位，表明动画过渡效果将在何时开始
+ 取值为正时会延迟一段时间来响应过渡效果；取值为负时会导致过渡立即开始

+ 你可以指定多个延迟时间，每个延迟将会分别作用于你所指定的相符合的 css 属性

## 语法

+ 正值：延后开始过渡
+ 负值：提前开始过渡
+ 默认值 0s

  ```js
  transition-delay: 3s;

  transition-delay: 2s, 4ms;
  ```

+ 示例

  ```css
  transition-property: background-color, font-size, transform, color;
  transition-timing-function: ease-in-out;
  transition-duration: 3s;
  ```
