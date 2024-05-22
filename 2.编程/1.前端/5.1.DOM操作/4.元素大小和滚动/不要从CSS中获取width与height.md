# 不要从 CSS 中获取 width/height

## 概述

+ 为什么不像这样用 `getComputedStyle` 读取元素的 `width` 呢？

  ```js
  let elem = document.body;

  alert( getComputedStyle(elem).width ); // 显示 elem 的 CSS width
  ```

+ 为什么我们应该使用几何属性呢？这里有两个原因

  1. 首先，CSS `width` / `height` 取决于另一个属性：`box-sizing` ，它定义了“什么是” CSS 宽度和高度。出于 CSS 的目的而对 `box-sizing` 进行的更改可能会破坏此类 JavaScript 操作
  2. 其次，CSS 的 `width` / `height` 可能是 `auto` ，例如内联（inline）元素：

      ```js
      <span id="elem">Hello!</span>

      <script>
      // 从 CSS 的观点来看，width:auto 是完全正常的，但在 JavaScript 中，我们需要一个确切的 px 大小，以便我们在计算中使用它
      // 因此，这里的 CSS 宽度没什么用
        alert( getComputedStyle(elem).width ); // auto
      </script>
      ```

  3. 还有另一个原因：滚动条

    + 有时，在没有滚动条的情况下代码工作正常，当出现滚动条时，代码就出现了 bug，因为在某些浏览器中，滚动条会占用内容的空间
    + 因此，可用于内容的实际宽度小于 CSS 宽度
    + 而 `clientWidth` / `clientHeight` 则会考虑到这一点

    + 但是，使用 getComputedStyle(elem).width 时，情况就不同了。某些浏览器（例如 Chrome）返回的是实际内部宽度减去滚动条宽度，而某些浏览器（例如 Firefox）返回的是 CSS 宽度（忽略了滚动条）。这种跨浏览器的差异是不使用 getComputedStyle 而依靠几何属性的原因

