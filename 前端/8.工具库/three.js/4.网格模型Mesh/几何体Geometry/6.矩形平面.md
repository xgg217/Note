# 矩形平面

## PlaneGeometry

+ `PlaneGeometry(width : Float, height : Float, widthSegments : Integer, heightSegments : Integer)`

  + width — 平面沿着X轴的宽度。默认值是1
  + height — 平面沿着Y轴的高度。默认值是1
  + widthSegments — （可选）平面的宽度分段数，默认值是1
  + heightSegments — （可选）平面的高度分段数，默认值是1

+ 代码

  ```js
  const geometry = new THREE.PlaneGeometry(100,50);
  ```
