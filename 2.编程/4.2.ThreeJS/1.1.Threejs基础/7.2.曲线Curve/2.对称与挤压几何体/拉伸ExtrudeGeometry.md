# 拉伸 ExtrudeGeometry

## 概述

+ 拉伸几何体 ExtrudeGeometry 和上节课讲到的轮廓填充几何体ShapeGeometry一样，都是基于一个基础的平面轮廓Shape进行变换，生成一个几何体

  ![拉伸成型](images/拉伸成型.png)

## 定义一个Shape轮廓

+ 使用拉伸扫描 `ExtrudeGeometry` 和轮廓填充 `ShapeGeometry` 一样，需要首先定义一个用于拉伸或扫描的平面轮廓Shape

+ 多边形上随意选择一个点，作为起点，也就是 `Shape` 的第一个坐标，然后按照逆时针或顺时针方向依次书写坐标

  ```js
  // Shape表示一个平面多边形轮廓
  const shape = new THREE.Shape([
    // 按照特定顺序，依次书写多边形顶点坐标
    new THREE.Vector2(-50, -50), //多边形起点
    new THREE.Vector2(-50, 50),
    new THREE.Vector2(50, 50),
    new THREE.Vector2(50, -50),
  ]);
  ```

## 拉伸成型

+ 拉伸造型

  ```js
  //拉伸造型
  const geometry = new THREE.ExtrudeGeometry(
    shape, //二维轮廓
    {
      depth: 20, //拉伸长度
    }
  );
  ```

## 拉伸倒角

+ 倒圆角

  ```js
  const geometry = new THREE.ExtrudeGeometry(
    shape,{
      depth: 20,
      bevelThickness: 5, //倒角尺寸:拉伸方向
      bevelSize: 5, //倒角尺寸:垂直拉伸方向
      bevelSegments: 20, //倒圆角：倒角细分精度，默认3
    }
  );

  ```

+ 倒直角

  ```js
  const geometry = new THREE.ExtrudeGeometry(
    shape,{
      bevelThickness: 5, //倒角尺寸:拉伸方向
      bevelSize: 5, //倒角尺寸:垂直拉伸方向
      bevelSegments: 1, //倒直角
    }
  );
  ```

## 拉伸取消默认倒角

+ 拉伸造型

  ```js
  //拉伸造型
  const geometry = new THREE.ExtrudeGeometry(
    shape, //二维轮廓
    {
      depth: 20, //拉伸长度
      bevelEnabled: false, //禁止倒角,默认true
    }
  );
  ```

## 示例

+ 示例

  ```js
  import { Vector2,Shape,ExtrudeGeometry,MeshLambertMaterial,DoubleSide,Mesh,Group} from 'three';

  const arr = [
    new Vector2(-50, -50),
    new Vector2(-60, 0),
    new Vector2(0, 50),
    new Vector2(60, 0),
    new Vector2(50, -50),
  ]

  const shape = new Shape(arr);
  const geometry = new ExtrudeGeometry(shape, {
    depth: 20, //拉伸长度
  });

  const material = new MeshLambertMaterial({
    color: 0x00ffff,
    side:DoubleSide,//双面显示看到管道内壁
  })

  const mesh = new Mesh(geometry, material);

  const group = new Group;

  group.add(mesh)

  export default group;
  ```
