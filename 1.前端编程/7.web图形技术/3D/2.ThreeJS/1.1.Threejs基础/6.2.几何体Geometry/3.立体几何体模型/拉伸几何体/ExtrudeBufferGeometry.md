# ExtrudeBufferGeometry

## THREE.ExtrudeBufferGeometry

+ 在 Three.js 中，推荐使用 THREE.ExtrudeBufferGeometry 替代 THREE.ExtrudeGeometry
+ 因为 BufferGeometry 类型提供了更高效的顶点数据存储方式，更适合现代 WebGL 渲染引擎

  ```js
  const shape = new THREE.Shape();
  shape.moveTo(10, 10);
  shape.lineTo(90, 10);
  shape.lineTo(90, 90);
  shape.lineTo(10, 90);
  shape.closePath();

  const extrudeSettings = {
      amount: 20,
      bevelEnabled: true,
      bevelThickness: 5,
      bevelSize: 5,
      bevelSegments: 2
  };

  const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  ```
