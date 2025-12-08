# transition- duration 过渡时长

## 概述

+ transition-duration 属性以秒或毫秒为单位指定过渡动画所需的时间

+ 默认值为 0s，表示不出现过渡动画

  + 不接受负值

+ 可以指定多个时长，每个时长会被应用到由 transition-property 指定的对应属性上

  + 如果指定的时长个数小于属性个数，那么时长列表会重复。如果时长列表更长，那么该列表会被裁减
  + 两种情况下，属性列表都保持不变

## 语法

+ 语法

+ 默认值 0s

  ```css
  /* <time> 值 */
  transition-duration: 6s;

  transition-duration: 120ms;

  transition-duration: 1s, 15s;

  transition-duration: 10s, 30s, 230ms;

  /* 全局值 */
  transition-duration: inherit;
  transition-duration: initial;
  transition-duration: unset;
  ```

+ 示例

  ```css
  transition-property: background-color font-size transform color;
  transition-timing-function: ease-in-out;
  transition-duration: 0.5s;
  ```
