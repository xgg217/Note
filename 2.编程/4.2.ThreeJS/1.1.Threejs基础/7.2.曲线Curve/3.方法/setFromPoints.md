# setFromPoints() 提取曲线坐标数据

## 概述

+ 把数组 `pointsArr` 里面的坐标数据提取出来，赋值给 `geometry.attributes.position` 属性

  ```js
  const geometry = new THREE.BufferGeometry();
  geometry.setFromPoints(pointsArr);
  console.log('geometry.attributes',geometry.attributes);
  ```
