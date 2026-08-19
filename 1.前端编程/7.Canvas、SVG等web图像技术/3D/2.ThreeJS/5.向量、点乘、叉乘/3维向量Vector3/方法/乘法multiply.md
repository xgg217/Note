# Vector3 乘法

## multiply

+ `.multiply ( v : Vector3 ) : this`

  + 将该向量与所传入的向量v进行相乘

## multiplyScalar

+ `.multiplyScalar ( s : Float ) : this`

  + 将该向量与所传入的标量s进行相乘

+ 向量方法 `.multiplyScalar(50)` 表示向量x、y、z三个分量和参数分别相乘

+ `v.clone().multiplyScalar(50)` 的含义和 `Vector3(v.x *50, v.y* 50, v.z * 50`) 是一样的

  ```js
  // `.multiplyScalar(50)`表示向量x、y、z三个分量和参数分别相乘
  const walk = v.clone().multiplyScalar(50);
  // 运动50秒结束位置B
  const B = A.clone().add(walk);
  ```

## multiplyVectors

+ `.multiplyVectors ( a : Vector3, b : Vector3 ) : this`

  + 按照分量顺序，将该向量设置为和 `a * b` 相等
