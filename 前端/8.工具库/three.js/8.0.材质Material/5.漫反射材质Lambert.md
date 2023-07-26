# 漫反射 Lambert 材质

## 概述

+ `MeshLambertMaterial`

+ 漫反射网格材质
+ 会受到光照影响：一个立方体长方体使用 `MeshLambertMaterial` 材质，不同面和光线夹角不同，立方体不同面就会呈现出来不同的明暗效果

  ```js
  //MeshLambertMaterial受光照影响
  const material = new THREE.MeshLambertMaterial();
  ```
