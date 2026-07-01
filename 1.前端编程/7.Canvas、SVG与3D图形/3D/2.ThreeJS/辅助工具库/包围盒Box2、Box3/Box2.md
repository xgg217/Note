# 包围盒 Box2

## 概述

+ 是 Three.js 中用于表示二维空间中的矩形包围盒的一个类
+ 包围盒通常用于优化场景中的碰撞检测、绘制顺序等，通过使用包围盒可以快速排除不必要的详细检测，从而提高性能

## Three.js 中的应用

+ 在渲染前进行快速的碰撞检测，以决定哪些对象需要进一步的精确检测
+ 计算物体的包围盒，用于确定物体的可见性
+ 在处理用户交互时，检测鼠标点击是否在某个对象的范围内

## 构造函数

+ `new THREE.Box2(min, max)`

  + min：包围盒的最小边界点，类型为 THREE.Vector2
  + max：包围盒的最大边界点，类型为 THREE.Vector2

  ```js
  // 创建一个左下角在 (0, 0)，右上角在 (10, 10) 的矩形包围盒
  const min = new THREE.Vector2(0, 0);
  const max = new THREE.Vector2(10, 10);
  const box = new THREE.Box2(min, max);
  ```

+ 如果未提供 min 和 max 参数，构造函数将创建一个空的包围盒（即所有点都位于无穷远处）

## 方法

+ set(min, max)：设置包围盒的最小和最大边界点
+ setFromPoints(points)：从一组点中设置包围盒
+ expandByPoint(point)：将包围盒扩展以包含指定的点
+ expandByVector(vector)：将包围盒扩展指定的向量大小
+ expandByScalar(scalar)：将包围盒沿所有方向扩展指定的标量大小
+ isEmpty()：检查包围盒是否为空
+ containsPoint(point)：检查指定的点是否在包围盒内
+ containsBox(box)：检查指定的包围盒是否完全包含在当前包围盒内
+ getCenter(target)：计算包围盒的中心点，并将结果存储在 target 向量中
+ getSize(target)：计算包围盒的大小（宽度和高度），并将结果存储在 target 向量中
+ intersect(box)：计算当前包围盒与指定包围盒的交集
+ union(box)：计算当前包围盒与指定包围盒的并集
+ clampPoint(point, target)：将指定的点限制在包围盒内，并将结果存储在 target 向量中
+ distanceToPoint(point)：计算指定点到包围盒的最近距离
+ getParameter(point)：计算指定点在包围盒内的参数坐标
+ intersectsBox(box)：判断当前包围盒是否与指定包围盒相交
+ equals(box)：检查当前包围盒是否等于指定包围盒


## 示例

+ 创建一个包含所有给定点的最小矩形包围盒

  ```js
  const points = [
    new THREE.Vector2(1, 1),
    new THREE.Vector2(3, 4),
    new THREE.Vector2(5, 2)
  ];
  const box = new THREE.Box2();
  box.setFromPoints(points);
  ```

+ 计算包围盒的中心点

  ```js
  const center = new THREE.Vector2();
  box.getCenter(center);
  console.log(center.x, center.y); // 输出包围盒中心点的坐标
  ```

+ 检测一个点是否在包围盒内

  ```js
  const testPoint = new THREE.Vector2(2, 3);
  console.log(box.containsPoint(testPoint)); // 输出 true 或 false
  ```

+ 将包围盒扩展以包含一个额外的点

  ```js
  const expandPoint = new THREE.Vector2(6, 6);
  box.expandByPoint(expandPoint);
  ```

+ 计算包围盒的大小

  ```js
  const size = new THREE.Vector2();
  box.getSize(size);
  console.log(size.x, size.y); // 输出包围盒的宽度和高度
  ```




