# stroke 描边属性

## 概述

+ stroke : 设置描边颜色（边框）

+ stroke-width : 设置描边粗细

+ stroke-opacity : 设置描边颜色的透明度

+ stroke-linecap : 设置线段两端的形状

  + butt 直边（默认）
  + round 圆角边
  + square 视觉效果与butt类似， 两端使用了矩形形状。 与butt效果相比会长出一块

  ```html
  <line x1="30" y1="20" x2="80" y2="20" stroke="#00f" stroke-width="3" stroke-linecap="butt"/>
  <line x1="30" y1="50" x2="80" y2="50" stroke="#00f" stroke-width="3" stroke-linecap="round"/>
  <line x1="30" y1="80" x2="80" y2="80" stroke="#00f" stroke-width="3" stroke-linecap="square" />
  ```

  ![alt text](images/描边属性.png)

+ stroke-linejoin : 设置折线连接点的形状

  + miter 尖的（默认）
  + round 圆
  + bevel 平的

  ```html
  <polyline points="20 10,50 50,80 10" stroke="#00f" stroke-width="3" fill="none" stroke-linejoin="miter" />
  <polyline points="20 30,50 70,80 30" stroke="#00f" stroke-width="3" fill="none" stroke-linejoin="round"/>
  <polyline points="20 50,50 90,80 50" stroke="#00f" stroke-width="3" fill="none" stroke-linejoin="bevel" />
  ```

  ![alt text](images/折线连接点的形状.png)

+ stroke-dasharray : 使用虚线设置描边，并设置虚线及空白的长度

  + stroke-dasharray="10"每一段线长度为10，两段线之间的空白为10
  + stroke-dasharray="10 5"每一段线长度为10，两段线之间的空白为5
  + stroke-dasharray="10 5 10" 设置时后面的长度会复制前面的数值 10 5 10 10 5 10 10 5 10

  ```html
  <path d="M20 20H80"
      fill="none" stroke="#00f" stroke-width="1" />
  <path d="M20 40H80"
        fill="none" stroke="#00f" stroke-width="1" stroke-dasharray="10" />
  <path d="M20 60H80"
        fill="none" stroke="#00f" stroke-width="1" stroke-dasharray="10 5" />
  <path d="M20 80H80"
      fill="none" stroke="#00f" stroke-width="1" stroke-dasharray="10 5 10" />
  ```

  ![alt text](images/设置虚线及空白的长度.png)

+ stroke-dashoffset : 配合虚线描边属性 ， 设置虚线开始的位置（偏移）

  + 正数向左偏移， 负数向右偏移
  + 可以用来实现动态文字效果

  ```html
  <path d="M20 20H80"
      fill="none" stroke="#00f" stroke-width="1"  stroke-dasharray="10" />
  <path d="M20 30H80"
        fill="none" stroke="#00f" stroke-width="1" stroke-dashoffset="-5" stroke-dasharray="10" />
  <path d="M20 40H80"
        fill="none" stroke="#00f" stroke-width="1" stroke-dashoffset="5" stroke-dasharray="10" />
  <path d="M20 50H80"
        fill="none" stroke="#00f" stroke-width="1" stroke-dashoffset="45" stroke-dasharray="60" />
  ```

  ![alt text](images/设置虚线开始的位置（偏移）.png)
