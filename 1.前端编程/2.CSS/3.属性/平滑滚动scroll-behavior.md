# 平滑滚动

## 概述

+ 控制页面或容器的滚动是否平滑

## scroll-behavior

+ 语法

  ```css
  scroll-behavior: auto; /* 默认值。滚动框立即滚动 */
  scroll-behavior: smooth; /*  */
  ```

+ 在 **根元素** 中指定这个属性时，它反而适用于视窗

  ```css
  html, body {
    scroll-behavior: smooth;
  }
  ```

+ 重点：凡是需要滚动的地方都加一句 `scroll-behavior:smooth;` 就好了！

## JS 滚动平滑

+ 语法

  ```js
  target.scrollIntoView({
    behavior: "smooth"
  });
    ```

## 同时设置

+ 如果我们的网页已经通过CSS设置了 `scroll-behavior:smooth;` 声明，则我们直接执行 `target.scrollIntoView()` 方法就会有平滑滚动，无需再额外设置 `behavior` 参数
