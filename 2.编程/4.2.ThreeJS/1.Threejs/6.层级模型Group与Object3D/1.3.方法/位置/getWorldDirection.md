# getWorldDirection

## 语法

+ `.getWorldDirection ( target : Vector3 ) : Vector3`

  + target — 结果将被复制到这个 `Vector3` 中

+ 返回值：返回一个表示该物体在世界空间中*Z轴*正方向的矢量（表示的获取obj对象自身z轴正方向在世界坐标空间中的方向）

## .getWorldDirection() 与 gltf 模型

+ threejs加载的玩家角色gltf模型，自身 `.rotation` 没有任何旋转的情况下
+ 注意玩家角色正前方方向最好和z轴方向一致，这样就可以直接用 `.getWorldDirection()` 获取的结果表示人的正前方

  ```js
  // 按下W键，实时计算当前玩家角色的正前方向
  if (keyStates.W) {
    const front = new THREE.Vector3();
    //获取玩家角色(相机)正前方
    player.getWorldDirection(front);
  }
  ```

## 示例

+ 模型没有任何旋转情况，`.getWorldDirection()` 获取的结果 `(0,0,1)`

  ```js
  const mesh = new THREE.Mesh();
  const dir = new THREE.Vector3();
  mesh.getWorldDirection(dir);
  console.log('dir', dir);
  ```

+ 模型绕y旋转90度情况，`.getWorldDirection()` 获取的结果 `(1,0,0)`

  ```js
  const mesh = new THREE.Mesh();
  mesh.rotateY(Math.PI / 2);
  const dir = new THREE.Vector3();
  mesh.getWorldDirection(dir);

  // 模型没有任何选择打印结果(1,0,0)
  console.log('dir', dir);
  ```
