# light.shadow.mapSize阴影贴图尺寸属性

## 阴影贴图尺寸属性 .mapSize

+ 提升边缘渲染效果

+ 你可以把threejs生成的光源阴影类比为前面学习过的颜色贴图 `.map`
+ 阴影投射到其它物体上，可以理解为阴影就像贴图一样映射到 `Mesh` 上

  ```js
  // mapSize属性默认512x512
  console.log('阴影默认像素',directionalLight.shadow.mapSize);
  ```

+ 可以尝试把 `.mapSize` 设置为比较小的值(尺寸一般2的n次方)，查看阴影渲染质量

  ```js
  directionalLight.shadow.mapSize.set(128,128)
  ```

+ 可以尝试把阴影相机 `.shadow.camera` 的范围扩大多倍，查看阴影渲染质量变化
+ 可以发现渲染范围越大，阴影渲染效果越差

  ```js
  directionalLight.shadow.mapSize.set(128,128)
  ```

+ 如果你的阴影边缘不够清晰，有模糊感、锯齿感，可以适当提升 `.mapSize` 属性值

  ```js
  // 如果阴影边缘锯齿感的时候，可以适当提升像素
  directionalLight.shadow.mapSize.set(1024,1024);
  directionalLight.shadow.mapSize.set(2048,2048);
  ```

## .shadow.mapSize 和.shadow.camera 总结

+ 在能覆盖包含阴影渲染范围的情况下，`.shadow.camera` 的尺寸尽量小

+ 如果你增加 `.shadow.camera` 长方体尺寸范围，阴影模糊锯齿感，可以适当提升 `.shadow.mapSize` 的大小
