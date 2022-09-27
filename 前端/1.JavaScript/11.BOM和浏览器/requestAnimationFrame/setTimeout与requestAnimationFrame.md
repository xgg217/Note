# setTimeout与requestAnimationFrame

## 概述

  - 对于 web 动画，我们可以在设备屏幕中移动 `1px` 或者更多

  - 移动一个元素（DOM 元素）的像素越少，那么动画就越流畅，越平滑

  - 帧其实就是 `DOM` 元素在屏幕上的实时位置的一个快照

  - 在 1s 内，如果一个元素以 `1px/次` 的速度移动 `60px`，那么 FPS 值就是 `60`

  - 也就是说，上面等价于以 `2px/次` 的速度移动 `120px` 。虽然移动速度变大了，但是动画并不会更加流畅平滑，因为相应的元素的移动距离也变大了

## JS 中的动画函数

  - `setTimeout` 或者 `setInterval` 函数

## setTimeout 和 setInterval 缺点

  - 不准时（事件队列执行机制的问题）

  - 动画作者对帧数没有掌控；

  - 当标签是隐藏状态（非当前显示的）时，无谓地消耗系统资源；

  - `setInterval` 对自己调用的代码是否报错漠不关心。即使调用的代码报错了，它依然会持续的调用下去（可以用 `setTimeout` 解决）

## requestAnimationFrame

  - 使用 `requestAnimationFrame` 执行动画，最大优势是能保证回调函数在屏幕每一次刷新间隔中只被执行一次，这样就不会引起丢帧，动画也就不会卡顿

## 区别：

  - 引擎层面：`setTimeout` 属于 JS 引擎，存在事件轮询，存在事件队列。`requestAnimationFrame` 属于 GUI 引擎，发生在渲染过程的中重绘重排部分，与电脑分辨路保持一致

  - 性能层面：当页面被隐藏或最小化时，定时器 `setTimeout` 仍在后台执行动画任务。当页面处于未激活的状态下，该页面的屏幕刷新任务会被系统暂停，`requestAnimationFrame` 也会停止

  - 应用层面：利用 `setTimeout`，这种定时机制去做动画，模拟固定时间刷新页面。`requestAnimationFrame` 由浏览器专门为动画提供的 API，在运行时浏览器会自动优化方法的调用，在特定性环境下可以有效节省了CPU 开销
