# Element.scrollBy

## 概述

+ scrollBy() 方法是使得元素滚动一段特定距离的 Element 接口

+ 滚动的是 相对当前位置的偏移量，而不是绝对坐标。

+ 适合相对当前滚动位置进行滚动的情况，如用户连续滚动页面或内容

## 语法

+ API

  ```js
  element.scrollBy(x-coord, y-coord);
  element.scrollBy(options)
  ```

+ 参数

  + x-coord 你想要显示在左上角的元素沿水平轴的像素

  + y-coord 你想要显示在左上角的元素沿垂直轴的像素

  + options 包含以下参数的对象：

    + top 指定沿 Y 轴滚动窗口或元素的像素数。

    + left 指定沿 X 轴滚动窗口或元素的像素数。

    + behavior

      + smooth 表示平滑滚动并产生过渡效果
      + instant：滚动应在一次跳转中即时完成
      + auto 或缺省值会直接跳转到目标位置，没有过渡效果

+ 返回值

  + 无 (undefined)

## 示例

+ 示例1

  ```js
  element.scrollBy(300, 300);
  ```

+ 示例2：使用 options:

  ```js
  element.scrollBy({
    top: 100,
    left: 100,
    behavior: "smooth",
  });
  ```
