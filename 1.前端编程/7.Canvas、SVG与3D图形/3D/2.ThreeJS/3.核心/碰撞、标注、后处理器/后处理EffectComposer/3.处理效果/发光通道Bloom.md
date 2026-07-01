# Bloom发光通道

## 概述

+ 使用步骤参考 *OutlinePass高亮发光描边*

## Bloom发光通道UnrealBloomPass

+ UnrealBloomPass.js扩展库目录：`examples/jsm/postprocessing/`

  ```js
  // 引入UnrealBloomPass通道
  import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
  ```

+ `UnrealBloomPass` 参数1是一个二维向量Vector2，二维向量尺x、y分量要和Canvas画布的宽、高度尺寸保持一致。

  ```js
  // canvas画布宽高度尺寸是800, 600
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(800, 600));

  // 设置glitchPass通道
  composer.addPass(bloomPass)
  ```

  ```js
  // canvas画布宽高度window.innerWidth, window.innerHeight
  new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight));

  // 设置glitchPass通道
  composer.addPass(bloomPass)
  ```

## 发光强度.strength

+ Bloom发光强度 `bloomPass.strength` ，默认1.0

  ```js
  console.log('发光强度',bloomPass.strength);
  ```

  ```js
  //bloom发光强度
  bloomPass.strength = 2.0;
  ```

## 示例

+ 示例

  ```js
  import * as THREE from "./three.module.min.js"

  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

  import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
  // 引入渲染器通道RenderPass
  import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';

  // 引入UnrealBloomPass通道
  import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

  const can = document.querySelector('#can')
  const width = window.innerWidth;
  const height = window.innerHeight;

  const scene = new THREE.Scene();

  // 2.创建相机 - 正交相机
  export const camera = (() => {
    //渲染器和相机
    const camera = new THREE.PerspectiveCamera(90, width / height, 1, 3000);
    camera.position.set(100, 100, 100);//根据渲染范围尺寸数量级设置相机位置
    camera.lookAt(0, 0, 0);
    return camera
  })();

  // 模型
  const mesh = (() => {
    const group = new Group();

    // 矩形
    const mesh = (() => {
      const geometry = new BoxGeometry(100, 60, 20);
      const material = new MeshBasicMaterial({
        color: 0x009999,
        side : DoubleSide
      });
      const mesh = new Mesh(geometry, material); //网格模型对象Mesh
      return mesh
    })();

    group.add(mesh);

    return mesh
  })();

  scene.add( mesh );

  // 光源设置
  const directionLight = (() => {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    // directionalLight.position.set(200, 200, 200);
    directionalLight.position.set(100, 60, 50);
    scene.add(directionalLight);

    // const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    // scene.add(ambient);

    return directionalLight
  })();

  // WebGL渲染器设置
  const renderer = (() => {
    const renderer = new THREE.WebGLRenderer({
      antialias: true, // 开启优化锯齿
    });
    renderer.setPixelRatio(window.devicePixelRatio); //防止输出模糊
    // 设置渲染的尺寸大小
    renderer.setSize(width, height)
  // 将webgl渲染的canvas内容添加到body
    can.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    // renderer.outputEncoding = THREE.sRGBEncoding;
    controls.addEventListener('change', function () {
      renderer.render(scene, camera); //执行渲染操作
    });//监听鼠标、键盘事件

    return renderer
  })();

  // 后处理器
  const composer = (() => {

    // 创建后处理对象EffectComposer，WebGL渲染器作为参数
    const composer = new EffectComposer(renderer);
    // 创建一个渲染器通道，场景和相机作为参数
    const renderPass = new RenderPass(scene, camera);

    // 设置renderPass通道
    composer.addPass(renderPass);

    // 创建一个发光通道
    const v2 = new THREE.Vector2(window.innerWidth, window.innerHeight);
    const bloomPass = new UnrealBloomPass(v2);
    composer.addPass(bloomPass)
    return composer
  })()

  //辅助观察的坐标系
  const axesHelper = (() => {
    const axesHelper = new THREE.AxesHelper(100);
    scene.add(axesHelper);
    return axesHelper
  })();

  // 渲染循环
  function render() {
    composer.render();
    // renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();

  window.onresize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
  ```
