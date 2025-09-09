# .getWorldPosition

## 语法

+ `.getWorldPosition ( target : Vector3 ) : Vector3`

  + target — 结果将被复制到这个Vector3中

+ 返回值：返回一个表示该物体在世界空间中位置的矢量

  ```js
  const pos = new THREE.Vector3();
  mesh.getWorldPosition(pos);

  console.log(pos); // 世界坐标
  console.log(group.position); //
  console.log(mesh.position);
  ```
