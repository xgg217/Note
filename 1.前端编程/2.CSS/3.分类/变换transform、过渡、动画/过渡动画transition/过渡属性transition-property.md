# transition-property

## 概述

+ transition-property 指定应用过渡属性的名称

+ 如果指定简写属性（比如 `background`），那么其完整版中所有可以动画的属性都会被应用过渡

## 语法

+ 语法

+ 默认 `all`

  ```css
  /* Keyword values */
  transition-property: none; /* 没有过渡动画 */
  transition-property: all; /* 所有可被动画的属性都表现出过渡动画 */
  transition-property: test_05;
  transition-property: -specific;
  transition-property: sliding-vertically;

  transition-property: test1;
  transition-property: test1, animation4;
  transition-property: all, height, all;
  transition-property:
    all,
    -moz-specific,
    sliding;

  /* Global values */
  transition-property: inherit;
  transition-property: initial;
  transition-property: unset;
  ```
