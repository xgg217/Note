# getSpacedPoints

## 曲线Curve方法.getSpacedPoints()

+ 通过 `.getSpacedPoints()` 和 `.getPoints()` 一样也可以从曲线Curve上返回一系列曲线上的顶点坐标

+ 通过 `.getSpacedPoints()` 是按照曲线长度等间距返回顶点数据，`.getPoints()` 获取点的方式并不是按照曲线等间距的方式，而是会考虑曲线斜率变化，斜率变化快的位置返回的顶点更密集

+ 可以通过案例源码测试对比，分别两种获取顶点方式曲线坐标，然后使用点模型渲染，观察点的分布规律

  ```js
  const geometry = new THREE.BufferGeometry();
  geometry.getSpacedPoints(pointsArr);
  console.log('geometry.attributes',geometry.attributes);
  ```

+ 如果你有等间距取点的需求，可以选择 `.getSpacedPoints()` 方法，如果没有，就可以使用 `.getPoints()` 方法

