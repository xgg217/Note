# 双面可见

## 概述

+ Three.js的材质默认正面可见，反面不可见
+ 对于矩形平面PlaneGeometry、圆形平面如果你想看到两面，可以设置 `side: THREE.DoubleSide`

  + `THREE.FrontSide` 表示网格模型正面可以看到 默认值
  + `THREE.BackSide` 表示背面可以看到
  + `THREE.DoubleSide` 表示双面可以看到

  ```js
  new THREE.MeshBasicMaterial({
    side: THREE.FrontSide, //默认只有正面可见
  });

  new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide, //两面可见
  });

  material.side = THREE.BackSide;//背面可以看到 1
  ```

+ `THREE.FrontSide` 、 `THREE.BackSide` 、 `THREE.DoubleSide` 其实在theeejs内部都表示一个数字,你可以通过浏览器控制log打印查看验证，具体可以查看src目录下constants.js的源码文件

  ```js
  console.log('material.side',material.side); // 0 1 2
  ```

