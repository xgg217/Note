# 圆柱体

## CylinderGeometry

+ `CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)`

  + radiusTop — 圆柱的顶部半径，默认值是1
  + radiusBottom — 圆柱的底部半径，默认值是1
  + height — 圆柱的高度，默认值是1
  + radialSegments — 圆柱侧面周围的分段数，默认为32
  + heightSegments — 圆柱侧面沿着其高度的分段数，默认值为1
  + openEnded — 一个Boolean值，指明该圆锥的底面是开放的还是封顶的。默认值为false，即其底面默认是封顶的
  + thetaStart — 第一个分段的起始角度，默认为0。（three o'clock position）
  + thetaLength — 圆柱底面圆扇区的中心角，通常被称为“θ”（西塔）。默认值是2*Pi，这使其成为一个完整的圆柱

+ 代码

  ```js
  const geometry = new THREE.CylinderGeometry(50,50,100);
  ```
