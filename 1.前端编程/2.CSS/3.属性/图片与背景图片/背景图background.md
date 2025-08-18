# 背景图

## 与 img 的区别

+ `img` 属于 HTML 的概念，背景图属于 CSS 的概念

+ 当图片属于网页内容时，使用 `img` 元素

+ 当图片仅用于美化网页时，必须使用背景图

## 简写

+ `background: url("img.png") no-repeat`

  ```css
  div {
    background: #00FF00 url(bgimage.gif) no-repeat fixed top;
  }
  ```

## 背景图属性

+ `background-image`：背景图路径（可写可不写 `""`，如果路径中包含特殊符号，需要写 `""`）

+ `background-repeat`：背景在 `x` 、 `y` 轴进行重复

+ `background-size`：尺寸

+ `background-position`：设置背景图的位置

+ `background-attachment`：控制被进图是否固定（类似固定定位）

## background-repeat

+ `repeat`（默认值）：重复

+ `no-repeat`：不重复

## background-origin

+ 背景图片起始位置

+ 取值

  ```css
  /* 从边框开始显示背景 */
  background-origin: border-box;

  /* 从内边距开始显示背景 */
  background-origin: padding-box;

  /* 从内容开始显示背景 */
  background-origin: content-box;
  ```

## background-size 设置背景图片尺寸大小

+ 取值

  ```css
  /* 默认 */
  background-size: auto;

  /* 长度 px，如果设置一个值会 等比缩放 */
  background-size: 50px;
  background-size: 50px 20px;

  /* 百分比 */
  background-size: 0%~100%;

  /* 用一张盘满整个背景，可能会截断图片 */
  background-size: cover;

  /* 尽量让背景内存在一个完整图片，所以看你那会有留白 */
  background-size: contain;
  ```

## background-clip 裁剪背景

+ 取值

  ```css
  /* 默认 从边框向外 裁剪背景 */
  background-clip: border-box;

  /* 从内边距向外 裁剪背景 */
  background-clip: padding-box;

  /* 从内容向外 裁剪背景 */
  background-clip: content-box;

  /* 不裁剪 */
  background-clip: no-clip;
  ```

## background-position 位置

+ 取值

  ```css
  /* x轴   y轴   */
  background-position: 100px 100px;

  /*  */
  background-position: centen centen;
  ```
