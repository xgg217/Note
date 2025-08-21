# 立方体

## BoxGeometry

+ BoxGeometry是四边形的原始几何类，它通常使用构造函数所提供的“width”、“height”、“depth”参数来创建立方体或者不规则四边形

## API

+ `BoxGeometry(width : Float, height : Float, depth : Float, widthSegments : Integer, heightSegments : Integer, depthSegments : Integer)`

  + `width` — X轴上面的宽度，默认值为1
  + `height` — Y轴上面的高度，默认值为1
  + `depth` — Z轴上面的深度，默认值为1
  + `widthSegments` — （可选）宽度的分段数，默认值是1
  + `heightSegments` — （可选）高度的分段数，默认值是1
  + `depthSegments` — （可选）深度的分段数，默认值是1

  ```js
  // 设置几何体长宽高，也就是x、y、z三个方向的尺寸

  //对比三个参数分别对应xyz轴哪个方向
  new THREE.BoxGeometry(100, 60, 20);
  ```
