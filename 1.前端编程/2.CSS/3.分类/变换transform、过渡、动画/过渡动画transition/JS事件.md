# JS 事件

## transitionstart 开始

+ 事件会在 CSS transition 实际开始的时候触发，或者说在某个 transition-delay 已经结束之后触发

  ```js
  element.addEventListener("transitionstart", () => {
    console.log("transition 开始");
  });

  // 或者
  element.ontransitionstart = () => {
    console.log("transition 开始");
  };
  ```

## transitionend 结束

+ 事件会在 CSS 过渡完成的时候触发
+ 如果过渡在完成前就被移除，比如删除 transition-property 或者将 display 设置为 none，那么该事件就不会生成

+ transitionend 事件在两个方向上触发：当它完成从初始状态到过渡状态的过渡时，以及当它完全恢复到默认或非过渡状态时
+ 如果没有设置过渡延迟或持续时间，或者两者都是 0 秒或都没有声明，则没有过渡，且不会触发任何过渡事件
+ 如果触发了 transitioncancel 事件，transitionend 事件就不会触发

+ 这个事件是无法取消的

  ```js
  element.addEventListener("transitionend", (event) => {});

  element.ontransitionend = (event) => {};
  ```

## transitioncancel 取消

+ transitioncancel 事件在 CSS 转换被取消时触发

+ 当以下情况时，过渡被取消：

  + 应用于目标的transition-property属性的值被更改
  + display属性被设置为"none"
  + 转换在运行到完成之前就停止了，例如通过将鼠标移出悬浮过渡元素

  ```js
  element.addEventListener("transitioncancel", (event) => {});

  element.ontransitioncancel = (event) => {};
  ```

## transitionrun 运行

+ 立即触发，与 transition-delay 属性无关

  ```css
  /* 鼠标移入的时候就触发 transitionrun */
  .box:hover {
    /* ... */
  }
  ```

+ 触发顺序在 `transitionstart` 事件之前
