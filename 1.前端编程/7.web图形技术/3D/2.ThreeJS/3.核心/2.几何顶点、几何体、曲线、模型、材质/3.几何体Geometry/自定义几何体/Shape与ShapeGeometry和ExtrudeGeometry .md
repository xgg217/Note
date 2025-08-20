# Shape与ShapeGeometry和ExtrudeGeometry

## 概述

+ ShapeGeometry 可以通过 Shape 来生成多边形，Shape 可以传入一堆点构成，也可以通过 lineTo、moveTo 等 api 来画

  + shape.holes 可以定义内孔

+ ExtrudeGeometry 可以通过 Shape 拉伸形成几何体
