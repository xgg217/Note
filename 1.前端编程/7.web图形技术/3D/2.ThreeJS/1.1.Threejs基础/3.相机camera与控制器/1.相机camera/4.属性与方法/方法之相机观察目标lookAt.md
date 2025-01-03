# 相机观察目标 lookAt

## 概述

+ 你用相机拍照你需要控制相机的拍照目标，具体说相机镜头对准哪个物体或说哪个坐标
+ 对于threejs相机而言，就是设置 `.lookAt()` 方法的参数，指定一个3D坐标

  ![相机观察目标](images/相机观察目标.jpg)

  ```js
  //相机观察目标指向Threejs 3D空间中某个位置
  camera.lookAt(0, 0, 0); // 坐标原点

  // 设置摄像机朝向
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  // y轴上位置10
  camera.lookAt(0, 10, 0);

  // 指向mesh对应的位置
  camera.lookAt(mesh.position);
  ```

## 注意点

+ 注意相机控件 `OrbitControls` 会影响 `lookAt` 设置
+ 注意手动设置 `OrbitControls` 的目标参数
+ `controls.target.set(x, y, z)` 设置成与 `camera.lookAt(x, y, z)` 一样的值
+ 还需要更新 `controls.update()`

  ```js
  // 设置相机控件轨道控制器OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  // 相机控件.target属性在OrbitControls.js内部表示相机目标观察点，默认0,0,0
  // console.log('controls.target', controls.target);
  controls.target.set(1000, 0, 1000);
  controls.update();//update()函数内会执行camera.lookAt(controls.targe)
  ```
