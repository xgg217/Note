# gltf工厂模型设置发光描边

## 功能

+ 通过按钮点击选择gltf工厂的某个设备模型，添加发光描边效果

## 1.引入扩展库

+ 扩展库

  ```js
  // 引入后处理扩展库EffectComposer.js
  import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
  // 引入渲染器通道RenderPass
  import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
  // 引入OutlinePass通道
  import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
  ```

## 2.设置后期处理通道

+ 注意 `outlinePass.selectedObjects` 先不用设置，后面通过UI按钮鼠标事件触发的的函数设置

  ```js
  // 创建后处理对象EffectComposer，WebGL渲染器作为参数
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  // 创建OutlinePass通道
  const v2 = new THREE.Vector2(window.innerWidth, window.innerWidth);
  const outlinePass = new OutlinePass(v2, scene, camera);
  // outlinePass.selectedObjects = [mesh];
  outlinePass.visibleEdgeColor.set(0x00ffff);
  outlinePass.edgeThickness = 4;
  outlinePass.edgeStrength = 6;
  composer.addPass(outlinePass);
  ```

## 3.渲染循环执行EffectComposer.render()

+ 渲染循环

  ```js
  // 渲染循环
  function render() {
    composer.render();
    // renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();
  ```

## 4. UI界面控制outlinePass.selectedObjects

+ 用于和3D场景交互的UI按钮，具体参考课件中index.html文件中HTML和CSS代码

  ```html
  <div id="A" class="bu">设备A</div>
  <div id="B" class="bu" style="margin-left: 10px;">设备B</div>
  ```

  ```js
  document.getElementById('A').addEventListener('click',function(){
    const A = model.getObjectByName ('设备A');
    outlinePass.selectedObjects = [A];
  })
  document.getElementById('B').addEventListener('click',function(){
    const B = model.getObjectByName ('设备B');
    outlinePass.selectedObjects = [B];
  })

  ```
