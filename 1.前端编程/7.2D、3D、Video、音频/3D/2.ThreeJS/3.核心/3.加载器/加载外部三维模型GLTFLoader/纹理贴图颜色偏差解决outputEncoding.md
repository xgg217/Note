# 纹理调整

## 纹理贴图颜色偏差解决

+ three.js加载gltf模型的时候，可能会遇到three.js渲染结果颜色偏差，对于这种情况，你只需要修改WebGL渲染器默认的编码方式 `.outputEncoding` 即可

  ```js
  //解决加载gltf格式模型纹理贴图和原图不一样问题
  renderer.outputEncoding = THREE.sRGBEncoding;
  ```

+ 注意！！！！！！！最新版本属性名字有改变
+ 渲染器属性名 `.outputEncoding` 已经变更为 `.outputColorSpace`

+ 查WebGL渲染器文档，你可以看到 `.outputColorSpace` 的默认值就是SRGB颜色空间 `THREE.SRGBColorSpace` ，意味着新版本代码中，加载gltf，没有特殊需要，不设置 `.outputColorSpace` 也不会引起色差

  ```js
  //新版本，加载gltf，不需要执行下面代码解决颜色偏差
  renderer.outputColorSpace = THREE.SRGBColorSpace;//设置为SRGB颜色空间
  ```
