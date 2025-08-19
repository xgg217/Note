# Vector3 加法

## add

+ `.add ( v : Vector3 ) : this`

  + 将传入的向量v和这个向量相加

## addScaledVector

+ `.addScaledVector ( v : Vector3, s : Float ) : this`

  + 将所传入的v与s相乘所得的乘积和这个向量相加

+ `B.addVectors(A,walk)` 的含义就是向量A和向量walk的x、y、z三个分量分别相加(`B.x = A.x + walk.x;` 、`B.y = A.y + walk.y;`、 `B.z = A.z + walk.z;)`

  ```js
  const A = new THREE.Vector3(30, 30, 0);// 人起点A

  // walk表示运动的位移量用向量
  const walk = new THREE.Vector3(100, 50, 0);
  const B = new THREE.Vector3();// 人运动结束点B

  // addVectors的含义就是参数中两个向量xyz三个分量分别相加
  B.addVectors(A,walk);
  console.log('B',B); // {x: 130, y: 80, z: 0}
  ```

## add 与 addVectors

+ `.add()` 和 `.addVectors()` 功能一样，只是语法细节不同

+ A和walk的x、y、z属性分别相加，相加的结果替换A原来的x、y、z

  ```js
  A.add(walk);
  ```

+ `const B = A.add(walk);` 这种写法，B本质上就是A，两个变量指向同一个对象

  ```js
  const B = A.add(walk);

  console.log('A',A);
  console.log('B',B);
  ```

+ 如果不希望A被改变，且创建一个新的对象表示B点坐标，通过克隆方法 `.clone()`

  ```js
  // A.clone()克隆一个和A一样对象，然后再加上walk，作为B
  // A不执行.clone()，A和B本质上都指向同一个对象
  const B = A.clone().add(walk);
  ```

## 示例1

+ 向量加法 `.add()` 平移网格模型 `Mesh`
+ 沿着AB方向平移平移物体mesh距离100非常简单，把 `mesh.position` 的xyz三个分量分别加上向量T的xyz分量即可

  ```js
  // mesh.position的xyz三个分量分别加上向量T的xyz分量
  mesh.position.add(T);
  ```
