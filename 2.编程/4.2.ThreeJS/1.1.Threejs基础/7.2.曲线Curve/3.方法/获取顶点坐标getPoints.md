# 获取顶点坐标 getPoints

## API

+ `.getPoints ( divisions : Integer ) : Array`

  + divisions -- 要将曲线划分为的分段数。默认是 5.

+ 返回值：使用getPoint（t）返回一组divisions+1的点

## 概述

+ 椭圆弧线EllipseCurve的父类是曲线Curve,自然会继承父类曲线 `.getPoints()` 方法，通过 `.getPoints()` 可以从曲线上获取顶点数据

+ 通过方法 `.getPoints()` 可以从曲线上按照一定的细分精度返回沿着曲线分布的顶点坐标
+ 细分数越高返回的顶点数量越多，自然轮廓越接近于曲线形状
+ 方法 `.getPoints()` 的返回值是一个由二维向量Vector2或三维向量Vector3构成的数组，Vector2表示位于同一平面内的点，Vector3表示三维空间中一点

  ```js
  //getPoints是基类Curve的方法，平面曲线会返回一个vector2对象作为元素组成的数组
  const pointsArr = arc.getPoints(50); //分段数50，返回51个顶点
  console.log('曲线上获取坐标',pointsArr);
  ```
