# 多边形轮廓Shape

## 概述

+ 多边形轮廓Shape,是直接通过一组二维向量Vector2表示的xy点坐标创建
+ 下面给大家讲解通过Shape的一些2D绘图API表达多边形轮廓

  ```js
  // Shape表示一个平面多边形轮廓
  const shape = new THREE.Shape([
    // 按照特定顺序，依次书写多边形顶点坐标
    new THREE.Vector2(-50, -50), //多边形起点
    new THREE.Vector2(-50, 50),
    new THREE.Vector2(50, 50),
    new THREE.Vector2(50, -50),
  ]);
  ```

## 多边形轮廓Shape的父类Path

+ Shape的父类是Path,Path提供了直线、圆弧、贝塞尔、样条等绘制方法，Shape也会从父类是Path继承这些图形绘制方法。

+ 如何使用Path的直线、圆弧等绘制方法，可以参考原来学习过的各种曲线API和Path的文档

+ Shape的父类Path

  + `.lineTo()` 直线
  + `.arc()` 相对圆弧
  + `.absarc()` 绝对圆弧
  + `.splineThru()` 二维样条曲线
  + `.bezierCurveTo()` 二维三次贝塞尔曲线
  + `.quadraticCurveTo()` 二维二次贝塞尔曲线

  ![Shape的父类Path](images/Shape的父类Path.png)
