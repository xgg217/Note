# will-change

## 概述

+ will-change是一个CSS属性，它可以告诉浏览器某个元素将要发生的变化
+ 通过明确指定这些变化，浏览器可以事先分配和优化相应的资源，从而提升渲染的性能

## 使用方法

+ 要使用will-change，只需将它应用于你要进行性能优化的元素上

  ```css
  /* 告诉浏览器，该元素即将发生变换，以便浏览器在渲染时提前分配所需的资源 */
  .element {
    will-change: transform;
  }
  ```

## will-change的优化效果

+ 减少渲染阻塞：浏览器可以提前分配和优化资源，减少渲染阻塞时间，提高页面的响应速度
+ 减少重绘和重排：浏览器可以更好地管理渲染过程，避免不必要的重绘和重排，从而提高渲染性能
+ 硬件加速：某些浏览器对 `will-change` 属性会进行硬件加速，进一步提升性能

## will-change使用的时机

+ 在实际更改的元素上将 `will-change` 设置为您将实际更改的属性
+ 并在他们停止时将其删除

+ 因为will-change会消耗浏览器GPU资源，当元素有 will-change 时，将元素提升到它们自己的“GPU 层”的浏览器
+ 但有太多元素声明时，浏览器将忽略声明，以避免耗尽 GPU 内存

+ 所以对于 `will-change` 的使用应该控制时机

  ```js
  const targetEl = document.getElementById('target');

  // 在即将对 targetEl 进行设计重排或重绘的操作时，可执行 setWillChange
  function setWillChange() {
    targetEl.style.willChange = 'transform, opacity';
  }

  // 在 targetEl 执行完重拍或重绘操作后，可执行 removeWillChange

  function removeWillChange() {
    targetEl.style.willChange = 'auto';
  }
  ```

+ 在适当的时机移除 `will-change` 就是减少浏览器的复合层，避免过度使用 `will-change` 带来性能问题

## 什么操作会将元素提升到复合层

+ `will-change` 属性：通过使用 `will-change` 属性，告诉浏览器该元素即将发生某种变化，浏览器可以提前将其提升到复合层以进行优化
+ `transform` 属性：当使用 3D 或 2D 变换时，浏览器会自动将 transform 属性应用的元素提升到复合层。常见的变换函数如 `translate()`, `rotate()`, `scale()` 等
+ `backface-visibility` 属性：当使用 `backface-visibility: hidden` 来隐藏元素的背面时，浏览器会将该元素提升到复合层

## 注意

+ 不要给大量的元素添加 `will-change` ，这会导致创建大量的复合层
+ 注意使用的时机，在需要进行重绘/重排行为的时候，才考虑加上 `will-change`，使用完后需要再适当的时机移除，释放浏览器资源
+ 是否真的需要 `will-change`，如果页面在性能方面没什么问题，没有必要放个 `will-change` 来换取那微乎其微的收益，如果收益客观，可加，如果加与不加，差别不大，没必要
