# 事件

## animationstart 开始

+ 事件会在 CSS 动画开始时触发
+ 如果有 animation-delay 延时，事件会在延迟时效过后立即触发
+ 为负数的延时时长会致使事件被触发时事件的 elapsedTime 属性值等于该时长的绝对值（并且，相应地，动画将直接播放该时长绝对值之后的动画）

  ```js
  el.onanimationstart = function () {
    console.log("动画开始了哦~");
  };
  ```

## onanimationend 动画结束

+ 事件在 CSS 动画完成时触发。如果在动画完成前中止了动画，例如将元素从 DOM 中移除，或将动画从元素上移除，animationend 事件不会触发

  ```js
  el.addEventListener("animationend", (event) => {});

  el.onanimationend = (event) => {};
  ```

## onanimationcancel

+ animationcancel 是一个事件处理操作，这个事件在CSS Animation属性意外中断时派发出来 (换句话说，任何时候 animation 停止运行不会发出一个 animationend 事件，比如，当 animation-name 改变以后，animation 就会被移除，或者动画节点隐藏—当前元素或者任何包含的节点隐藏)—使用 css 时

  ```js
  el.addEventListener("animationcancel", (event) => {});

  el.onanimationcancel = (event) => {};
  ```

## onanimationiteration

+ animationiteration 事件会在一次 CSS 动画迭代的结束和另一次迭代的开始时触发
+ 此事件不会与 animationend 事件同时发生，因此其不会发生在 animation-iteration-count 为 1 的动画上

  ```js
  el.addEventListener("animationiteration", (event) => {});

  el.onanimationiteration = (event) => {};
  ```
