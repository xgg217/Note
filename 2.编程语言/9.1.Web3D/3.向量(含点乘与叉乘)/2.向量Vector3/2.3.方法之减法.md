# Vector3 减法

## sub

+ `.sub ( v : Vector3 ) : this`

  + 从该向量减去向量v

+ `B.sub(A);` 表示B的xyz三个属性分别减去A的xyz三个属性，然后结果赋值给B自身的xyz属性

  ```js
  B.sub(A);

  console.log('B',B);
  ```

+ 如果希望基于A和B两点位置，生成一个A指向B的向量，可以B克隆一个新对象，减去A(如果B不克隆，B本身会被改变)

  ```js
  const AB = B.clone().sub(A);

  console.log('AB',AB);
  ```

## subScalar

+ `.subScalar ( s : Float ) : this`

  + 从该向量的x、y和z中减去标量s

## subVectors

+ `.subVectors ( a : Vector3, b : Vector3 ) : this`

  + 将该向量设置为 `a - b`

+ `AB.subVectors(B,A);` 的含义表示B的xyz三个分量，与A的xyz三个分量分别相减，然后赋值给向量AB

  ```js
  const A = new THREE.Vector3(30, 30, 0);
  const B = new THREE.Vector3(130,80,0);
  const AB = new THREE.Vector3();
  AB.subVectors(B,A);
  ```
