# set() 方法

## API

+ `.set ( x : Float, y : Float, z : Float )`

## 改变位置属性

+ 通过模型位置属性 `.position` 可以设置模型在场景Scene中的位置
+ 模型位置 `.position` 的默认值是 `THREE.Vector3(0.0,0.0,0.0)` ，表示坐标原点

+ 方式1：设置网格模型y坐标

  ```js
  mesh.position.y = 80;
  ```

+ 方式2：设置模型xyz坐标

  ```js
  mesh.position.set(80,2,10);
  ```

## 平移

+ 执行 `.translateX()` 、`.translateY()` 等方法本质上改变的都是模型的位置属性 `.position`

+ 网格模型沿着x轴正方向平移100，可以多次执行该语句，每次执行都是相对上一次的位置进行平移变换

  ```js
  // 等价于mesh.position = mesh.position + 100;
  mesh.translateX(100);//沿着x轴正方向平移距离100
  ```

+ 沿着Z轴负方向平移距离50

  ```js
  mesh.translateZ(-50);
  ```

+ 沿着自定义的方向移动

  ```js
  // 向量Vector3对象表示方向
  const axis = new THREE.Vector3(1, 1, 1);
  axis.normalize(); //向量归一化
  //沿着axis轴表示方向平移100
  mesh.translateOnAxis(axis, 100);
  ```

## 缩放

+ 属性 `.scale` 表示模型对象的xyz三个方向上的缩放比例
+ `.scale` 的属性值是一个三维向量对象 `Vector3`
+ 默认值是 `THREE.Vector3(1.0,1.0,1.0)`

+ 方式1：x轴方向放大2倍

  ```js
  mesh.scale.x = 2.0;
  ```

+ 方式2：网格模型xyz方向分别缩放0.5,1.5,2倍

  ```js
  mesh.scale.set(0.5, 1.5, 2)
  ```
