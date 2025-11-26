# text-orientation 控制文本展示方向

## 概述

+ 值

  + mixed 默认值。顺时针旋转水平书写的字符 90°，将垂直书写的文字自然布局

  + upright 将水平书写的字符自然布局（直排），包括垂直书写的文字（as well as the glyphs for vertical scripts）

    + 注意这个关键字会导致所有字符被视为从左到右，也就是 [direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/direction) 被强制设为 ltr

  + sideways 所有字符被布局为与水平方式一样，但是整行文本被顺时针旋转 90°

  ```html
  <style>
    .text {
      color: red;
      -webkit-text-fill-color: skyblue;
      writing-mode: vertical-rl;
      text-orientation: sideways;
    }
    .text span {
      text-emphasis: red dot;
      text-emphasis-position: under right;
    }
  </style>

  <div class="text">CSS 文本属性</div>
  ```
