# use元素

## 概述

+ 可以引用其他元素，在指定的位置绘制一个新图形（图形复用）
+ `x` 和 `y` 是基于引用图形的坐标，而不是坐标系

  ```js
  <circle id="c1" cx="20" cy="20" r="10" fill="red"/>

  <use xlink:href="#c1" x="50" y="50" />
  ```

  ![alt text](images/use元素.png)
