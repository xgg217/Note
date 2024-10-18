# ShapeBufferGeometry

## 概述

+ 在 Three.js 中，推荐使用 THREE.ShapeBufferGeometry 替代 THREE.ShapeGeometry，因为 BufferGeometry 类型提供了更高效的顶点数据存储方式，更适合现代 WebGL 渲染引擎

  ```js
  // 创建一个矩形形状
  const shape = new THREE.Shape();
  shape.moveTo(10, 10);
  shape.lineTo(90, 10);
  shape.lineTo(90, 90);
  shape.lineTo(10, 90);
  shape.closePath();

  // 创建 ShapeBufferGeometry
  const geometry = new THREE.ShapeBufferGeometry([shape], { extrudeSettings: { amount: 20 } });

  // 创建材质和 Mesh
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  ```
