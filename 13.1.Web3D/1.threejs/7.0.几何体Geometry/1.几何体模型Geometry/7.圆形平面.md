# 圆形平面

## CircleGeometry

+ `CircleGeometry(radius : Float, segments : Integer, thetaStart : Float, thetaLength : Float)`

  + radius — 圆形的半径，默认值为1
  + segments — 分段（三角面）的数量，最小值为3，默认值为32
  + thetaStart — 第一个分段的起始角度，默认为0。（three o'clock position）
  + thetaLength — 圆形扇区的中心角，通常被称为“θ”（西塔）。默认值是2*Pi，这使其成为一个完整的圆

+ 代码

  ```js
  const geometry = new THREE.CircleGeometry(50)
  ```
