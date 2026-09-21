# d 属性

## 概述

+ d 属性定义了一个要绘制的路径

+ 路径定义是一个路径命令组成的列表，其中的每一个命令由命令字母和用于表示命令参数的数字组成

## 大小写

+ 大写字母 表示采用绝对定位(屏幕坐标原点)
+ 小写字母 表示采用相对定位（例如：从上一个点开始，向上移动 10px，向左移动 7px）

  ![alt text](images/相对定位与绝对定位.png)

+ 示例

  ```html
  <!-- 从(10,10)点 向(20,20)点画直线 — 绝对位置 -->
  <path d="M10 10 L40 20"
      fill="none" stroke="#00f" stroke-width="2" />

  <!-- 新位置距原位置x轴距离为20， y轴距离20 — 相对位置 -->
  <path d="M10 10 l40 20"
      fill="none" stroke="#0f0" stroke-width="2" />
  ```

  ![alt text](images/相对定位与绝对定位2.png)

## 路径命令

+ SVG 定义了六种路径命令类型，一共 20 条命令：

  + MoveTo：M、m
  + LineTo：L、l、H、h、V、v
  + 三次贝塞尔曲线：C、c、S、s
  + 二次贝塞尔曲线：Q、q、T、t
  + 椭圆曲线：A、a
  + ClosePath：Z、z

## d属性之 M 或 m

+ M(Move to)命令：表示起点

  ```html
  <!-- (150,0) -->
  <path d="M 150 0"/>

  <!-- 或者 -->
  <path d="M150 0"/>
  ```

## d属性之 L 或 l

+ L命令(line to)

  ```html
  <!-- (150,0) -->
  <path d="M 150 0 l 75 200"/>

  <!-- 或者 -->
  <path d="M150 0 l75 200"/>
  ```

## 多个M与多个L

+  在一个path路径绘制的图形中，可以设置多个M，实现移动笔触，从多个点进行绘制
+  写成 `“M 10 10”` 或 `“M10 10”`

  ```html
  <path d="M40 30 L60 30 M30 50 L70 50 M50 30 L50 70"
      fill="none" stroke="#00f" stroke-width="2" />
  ```

  ![alt text](images/多个M.png)

+ 多个L

  ```html
  <path d="M30 40,L60 40, L30 50, L60 50"
      fill="none" stroke="red" stroke-width="2" />
  ```

  ![alt text](images/多个L.png)

## d属性之H h 和 V v

+ H 只需要指定横坐标， 表示横向画线
+ V 只需要指定纵坐标， 表示纵向画线
+ 这两个命令都只带一个参数，标明在 x 轴或 y 轴移动到的位置，因为它们都只在坐标轴的一个方向上移动

  ```
  H x
  (or)
  h dx

  V y
  (or)
  v dy
  ```

  ```html
  <!-- 画笔移动到 (10,10) 点，由此开始，向右移动 80 像素构成一条水平线，然后向下移动 80 像素，然后向左移动 80 像素，然后再回到起点 -->
  <path d="M10 10, h80 v80 h-80 Z" fill="transparent" stroke="red"/>
  ```

  ```html
  <path d="M30 30 H70 V70 H30"
      fill="none" stroke="#00f" stroke-width="2" />
  ```

  ![alt text](images/hv.png)

## d属性之 Z 或 z 闭合路径

+ Z命令会从当前点画一条直线到路径的起点，尽管我们不总是需要闭合路径，但是它还是经常被放到路径的最后
+ 另外，Z 命令*不用区分大小写*

  ```html
  <path d="M30 30 H70 V70 H30 Z"
      fill="none" stroke="#00f" stroke-width="2" />
  ```

  ![alt text](images/z.png)
