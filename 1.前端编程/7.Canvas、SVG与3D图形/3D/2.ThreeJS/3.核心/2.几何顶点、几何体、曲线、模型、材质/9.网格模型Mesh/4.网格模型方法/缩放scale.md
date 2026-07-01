# 缩放几何体

## 缩放.scale()

+ `.scale()`

+ 方式1

  ```js
  //创建几何体对象
  const geometry = new THREE.PlaneGeometry(100, 100);

  // 几何体xyz三个方向都放大2倍
  geometry.scale(2, 2, 2);

  // 几何体旋转、缩放或平移之后，查看几何体顶点位置坐标的变化=
  // BufferGeometry的旋转、缩放、平移等方法本质上就是改变顶点的位置坐标
  console.log('顶点位置数据', geometry.attributes.position);
  ```

+ 方式2

  ```js
  geometry.scale.x = 2;
  geometry.scale.y = 2;
  geometry.scale.z = 2;
  ```

+ 方式3

  ```js
  mesh.scale.set(2, 2, 2)
  ```
