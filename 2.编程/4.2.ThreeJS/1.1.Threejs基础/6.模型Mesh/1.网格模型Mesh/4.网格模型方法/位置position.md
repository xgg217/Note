# 模型位置 position

## .position : Vector3

+ 实际生活中，一个物体往往是有位置的，对于threejs而言也是一样的，你可以通过位置属性.position定义网格模型Mesh在三维场景Scene中的位置

  ```js
  const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

  //设置网格模型在三维空间中的位置坐标，默认是坐标原点
  mesh.position.set(0,10,0);
  ```
