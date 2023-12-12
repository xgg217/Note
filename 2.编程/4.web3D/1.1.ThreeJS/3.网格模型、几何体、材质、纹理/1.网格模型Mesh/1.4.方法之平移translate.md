# 平移几何体

## 平移.translate()

+ `.translate(x : Float, y : Float, z : Float )`
+ 移动几何体。该操作一般在一次处理中完成，不会循环处理。典型的用法是通过调用 Object3D.rotation 实时旋转几何体
+ 执行 `.translateX()` 、`.translateY()` 等方法本质上改变的都是模型的位置属性 `.position`

+ 方式1

  ```js
  //创建几何体对象
  const geometry = new THREE.PlaneGeometry(100, 100);

  // 几何体沿着x轴平移50
  geometry.translate(50, 0, 0);
  ```

+ 方式2

  ```js
  geometry.translateX(50);
  geometry.translateY(50);
  geometry.translateZ(50);
  ```

+ 方式3

  ```js
  geometry.translate.set(50, 0, 0);
  ```

## 自定义的方向移动

+ 沿着自定义的方向移动

  ```js
  //向量Vector3对象表示方向
  const axis = new THREE.Vector3(1, 1, 1);
  axis.normalize(); //向量归一化
  //沿着axis轴表示方向平移100
  mesh.translateOnAxis(axis, 100);
  ```
