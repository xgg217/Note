# 角度

## 概述

+ 模型的角度属性 `.rotation` 和四元数属性 `.quaternion` 都是表示模型的角度状态，只是表示方法不同，
+ `rotation` 属性值是欧拉对象 `Euler`
+ `quaternion` 属性值是是四元数对象 `Quaternion`

## 方法1 旋转 .rotation

+ 角度属性 `.rotation` 的值是欧拉对象 `Euler` ，意味着你想改变属性 `.rotation`

  ```js
  const Euler = new THREE.Euler();

  Euler.x = Math.PI / 3;

  // 复制欧拉角的值，赋值给物体的.rotation属性
  mesh.rotation.copy(Euler);
  ```

  ```js
  //绕y轴的角度设置为60度
  mesh.rotation.y += Math.PI/3;
  //绕y轴的角度增加60度
  mesh.rotation.y += Math.PI/3;
  //绕y轴的角度减去60度
  mesh.rotation.y -= Math.PI/3;
  ```

## 旋转 .rotation .rotateX()、.rotateY()、.rotateZ()

+ `.rotateX()` 、 `.rotateY()` 、 `.rotateZ()`

  ```js
  //创建几何体对象
  const geometry = new THREE.PlaneGeometry(100, 100);

  // 几何体绕着x轴旋转45度
  geometry.rotateX(Math.PI / 4);
  ```

## 方法2 .quaternion 旋转

+ 改变物体的四元数属性 `.quaternion` ，也就是改变物体的姿态角度
+ `.copy()` 是四元数的一个方法，`A.copy(B)` 表示把A四元数设置为B四元数的值，或者说把B的值复制给A

  ```js
  const quaternion = new THREE.Quaternion();
  quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);

  // quaternion表示旋转角度复制给物体.quaternion
  fly.quaternion.copy(quaternion);
  ```

## 总结：物体角度属性.rotation和四元数属性.quaternion

+ three.js模型对象的角度 `.rotation` 和四元数 `.quaternion` 属性都是用来表示物体姿态角度的，只是表达形式不同而已
+ `.rotation` 和 `.quaternion` 两个属性的值，一个改变，另一个也会同步改变

  ```js
  const quaternion = new THREE.Quaternion();
  quaternion.setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2);
  fly.quaternion.copy(quaternion);

  // 四元数属性改变后，查看角度属性(欧拉角)变化
  // .quaternion改变，.rotation同步改变
  console.log('角度属性',fly.rotation.z);
  ```

## 旋转动画

+ 渲染循环

  ```js
  // 渲染循环
  function render() {
    model.rotation.y+=0.01;
    requestAnimationFrame(render);
  }
  ```

## 绕某个轴旋转

+ 网格模型绕(0,1,0)向量表示的轴旋转π/8

  ```js
  const axis = new THREE.Vector3(0,1,0);//向量axis
  mesh.rotateOnAxis(axis,Math.PI/8);//绕axis轴旋转π/8
  ```
