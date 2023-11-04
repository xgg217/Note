# camera.getWorldDirection()获取相机视线方向

## 概述

+ 通过相机对象的`.getWorldDirection()`方法，可以快速获取一个沿着相机视线方向的单位向量
+ 不需要自己写代码计算视线方向了，`.getWorldDirection()` 方法进行了相关的封装

  ```js
  const dir = new THREE.Vector3();

  // 获取相机的视线方向
  camera.getWorldDirection(dir);
  console.log('相机方向',dir);
  console.log('单位向量',dir.length());
  ```
