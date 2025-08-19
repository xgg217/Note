# Triangle

## 概述

+ THREE.Triangle 是 Three.js 中用于表示三角形的一个类
+ 三角形是三维图形中最基本的多边形之一，几乎所有的三维几何体都可以通过三角形来近似表示
+ THREE.Triangle 类提供了多种方法来处理和操作三角形，包括计算面积、重心、法线等

## Three.js 中的应用

+ 用于计算三角形的属性，如面积、法线、中点等
+ 用于检测三角形是否包含某个点
+ 用于计算三角形与射线的交点
+ 用于计算三角形的边界球
+ 用于处理三维几何体的三角剖分

## 构造函数

+ `new THREE.Triangle(a, b, c)`

  + a：三角形的第一个顶点，类型为 `THREE.Vector3`
  + b：三角形的第二个顶点，类型为 `THREE.Vector3`
  + c：三角形的第三个顶点，类型为 `THREE.Vector3`

  ```js
  // 创建一个在 xy 平面上的三角形
  const a = new THREE.Vector3(-1, -1, 0);
  const b = new THREE.Vector3(1, -1, 0);
  const c = new THREE.Vector3(0, 1, 0);
  const triangle = new THREE.Triangle(a, b, c);
  ```

## 方法

+ set(a, b, c)：设置三角形的三个顶点
+ getA()：获取三角形的第一个顶点
+ getB()：获取三角形的第二个顶点
+ getC()：获取三角形的第三个顶点
+ getArea()：计算三角形的面积
+ getMidpoint(target)：计算三角形的中点，并将结果存储在 target 向量中
+ getNormal(target)：计算三角形的法线，并将结果存储在 target 向量中
+ getPlane(plane)：计算三角形所在的平面，并将结果存储在 plane 平面中
+ getUVs(uvs)：计算三角形的 UV 坐标，并将结果存储在 uvs 数组中
+ containsPoint(point)：检测三角形是否包含指定的点
+ getBoundingSphere(target)：计算三角形的边界球，并将结果存储在 target 球体中
+ getBarycoord(point, target)：计算点相对于三角形的巴里中心坐标，并将结果存储在 target 向量中
+ getIntersectionRay(ray, target)：计算射线与三角形的交点，并将结果存储在 target 向量中
+ clone()：返回一个新的 Triangle 实例，其值与当前三角形相同
+ equals(triangle)：检查当前三角形是否等于另一个三角形

## 示例

+ 创建一个三角形并计算它的面积

  ```js
  const a = new THREE.Vector3(-1, -1, 0);
  const b = new THREE.Vector3(1, -1, 0);
  const c = new THREE.Vector3(0, 1, 0);
  const triangle = new THREE.Triangle(a, b, c);

  console.log(triangle.getArea()); // 输出三角形的面积
  ```

+ 计算三角形的中点：

  ```js
  const midpoint = new THREE.Vector3();
  triangle.getMidpoint(midpoint);
  console.log(midpoint.x, midpoint.y, midpoint.z); // 输出中点坐标
  ```

+ 计算三角形的法线

  ```js
  const normal = new THREE.Vector3();
  triangle.getNormal(normal);
  console.log(normal.x, normal.y, normal.z); // 输出法线向量
  ```

+ 检测三角形是否包含指定的点

  ```js
  const point = new THREE.Vector3(0, 0, 0);
  console.log(triangle.containsPoint(point)); // 输出 true 或 false
  ```

+ 计算三角形的边界球

  ```js
  const boundingSphere = new THREE.Sphere();
  triangle.getBoundingSphere(boundingSphere);
  console.log(boundingSphere.center.x, boundingSphere.center.y, boundingSphere.center.z, boundingSphere.radius); // 输出球心坐标和半径
  ```
