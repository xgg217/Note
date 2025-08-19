# 曲线路径管道TubeGeometry

## 管道 TubeGeometry

+ 管道TubeGeometry几何体的功能就是基于一个3D曲线路径，生成一个管道几何体

  ```js
  TubeGeometry(path, tubularSegments, radius, radiusSegments, closed)
  ```

  + path 扫描路径，路径要用三维曲线
  + tubularSegments 路径方向细分数，默认64
  + radius 管道半径，默认1
  + radiusSegments 管道圆弧细分数，默认8
  + closed Boolean值，管道是否闭合

## 样条曲线生成圆管案例

+ 样条曲线生成圆管案例

  ```js
  // 三维样条曲线
  const path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-50, 20, 90),
    new THREE.Vector3(-10, 40, 40),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(60, -60, 0),
    new THREE.Vector3(70, 0, 80)
  ]);

  // path:路径   40：沿着轨迹细分数  2：管道半径   25：管道截面圆细分数
  const geometry = new THREE.TubeGeometry(path, 40, 2, 25);
  ```

## 观察管道内壁

+ threejs默认只渲染mesh三角形的正面，如果想看到管道内壁，可以设置双面渲染 `THREE.DoubleSide`

  ```js
  const material = new THREE.MeshLambertMaterial({
    side:THREE.DoubleSide,//双面显示看到管道内壁
  });
  ```

## 测试其他曲线

+ 也可以使用下面直线替换上面的样条曲线查看圆管生成效果

  ```js
  // LineCurve3创建直线段路径
  const path = new THREE.LineCurve3(new THREE.Vector3(0, 100, 0), new THREE.Vector3(0, 0, 0));
  ```

+ 三维二次贝塞尔曲线生成管道几何体

  ```js
  // p1、p2、p3表示三个点坐标
  const p1 = new THREE.Vector3(-80, 0, 0);
  const p2 = new THREE.Vector3(20, 100, 0);
  const p3 = new THREE.Vector3(80, 0, 100);
  // 三维二次贝赛尔曲线
  const path = new THREE.QuadraticBezierCurve3(p1, p2, p3);
  ```

## CurvePath 多段路径生成管道案例

+ CurvePath组合曲线，也可以作为TubeGeometry的参数1，用于生成管道几何体
+ 下面组合曲线CurvePath是由一段三维贝塞尔曲线QuadraticBezierCurve3加上两段3D直线LineCurve3拼接组成

  ```js
  // 创建多段线条的顶点数据
  const p1 = new THREE.Vector3(0, 0,100)
  const p2 = new THREE.Vector3(0, 0,30);
  const p3 = new THREE.Vector3(0, 0,0);
  const p4 = new THREE.Vector3(30, 0, 0);
  const p5 = new THREE.Vector3(100, 0, 0);
  // 1. 3D直线线段
  const line1 = new THREE.LineCurve3(p1, p2);
  // 2. 三维二次贝塞尔曲线
  const curve = new THREE.QuadraticBezierCurve3(p2, p3, p4);
  // 3. 3D直线线段
  const line2 = new THREE.LineCurve3(p4, p5);

  const CurvePath = new THREE.CurvePath();
  // 三条线拼接为一条曲线
  CurvePath.curves.push(line1, curve, line2);

  // CurvePath:路径   40：沿着轨迹细分数  2：管道半径   25：管道截面圆细分数
  const geometry = new THREE.TubeGeometry(CurvePath, 50, 2, 25);
  ```

## 示例

+ 示例1

  ```js
  import { Vector3,CatmullRomCurve3,TubeGeometry,MeshLambertMaterial,DoubleSide,BoxGeometry,Mesh,Group} from 'three';

  // 三维向量Vector3创建一组顶点坐标
  const arr = [
    new Vector3(-50, 20, 90),
    new Vector3(-10, 40, 40),
    new Vector3(0, 0, 0),
    new Vector3(60, -60, 0),
    new Vector3(70, 0, 80)
  ]

  const path = new CatmullRomCurve3(arr);

  const geometry = new TubeGeometry(path, 40, 10, 25);

  const material = new MeshLambertMaterial({
    color: 0x00ffff,
    side:DoubleSide,//双面显示看到管道内壁
  })

  const mesh = new Mesh(geometry, material);

  const group = new Group;

  group.add(mesh)

  export default group;
  ```
