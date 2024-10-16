# 基础材质 MeshBasicMaterial

## 概述

+ 用基本材质（BasicMaterial）的物体渲染后的颜色始终为该材质的颜色
+ 不考虑光照，适用于不需要光照效果的情况
+ 如果没有指定材质的颜色，则颜色是随机的

  ```js
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    transparent:true,//开启透明
    opacity: 0.75 // 不透明度
  });

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  ```
