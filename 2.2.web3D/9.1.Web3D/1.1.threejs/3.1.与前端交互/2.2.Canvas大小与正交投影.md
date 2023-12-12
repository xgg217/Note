# 正投影相机-Canvas尺寸变化

## 概述

+ 一些应用场景Cnavas画布可能不是固定尺寸，而是变化的。这时候就需要重新设置WebGL渲染器、相机等参数

## WebGL渲染器更新Canvas画布尺寸

+ onresize 事件会在窗口被调整大小时发生

  ```js
  // onresize 事件会在窗口被调整大小时发生
  window.onresize = function () {
    const width = window.innerWidth; //canvas画布宽度
    const height = window.innerHeight; //canvas画布高度
    // 重置渲染器输出画布canvas尺寸
    renderer.setSize(width, height);
  };
  ```

  ```js
  window.onresize = function () {
    const width = window.innerWidth-200; //canvas画布宽度
    const height = window.innerHeight-200; //canvas画布高度
    // 重置渲染器输出画布canvas尺寸
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  ```

## 相机参数更新

+ `.aspect` 属性受到canvas画布宽高度影响，当canvas画布尺寸发生变化的时候，需要更新透视投影相机PerspectiveCamera的 `.aspect` 属性

  ```js
  window.onresize = function () {
    // width、height表示canvas画布宽高度
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  ```

+ 正投影相机 `OrthographicCamera` 的 `left` 、 `right` 属性受到canvas画布宽高比影响，所以需要随着canvas画布更新

  ```js
  const k = width / height; //canvas画布宽高比
  const s = 50;
  //控制left, right, top, bottom范围大小
  const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 8000);
  ```

  ```js
  // Canvas画布跟随窗口变化
  window.onresize = function () {
    const width = window.innerWidth; //canvas画布宽度
    const height = window.innerHeight; //canvas画布高度
    // 1. WebGL渲染器渲染的Cnavas画布尺寸更新
    renderer.setSize(width, height);
    // 2.1.更新相机参数
    const k = width / height; //canvas画布宽高比
    camera.left = -s*k;
    camera.right = s*k;
    // 2.2.相机的left, right, top, bottom属性变化了，通知threejs系统
    camera.updateProjectionMatrix();
  };
  ```

## 示例

+ 全屏

  ```js
  import * as THREE from "./three.module.min.js"

  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
  import Model from './model.js'

  console.log(THREE.Scene)

  const scene = new THREE.Scene();
  let s = 50;//控制 left, right, top, bottom范围大小
  const width = window.innerWidth; //canvas画布宽度
  const height = window.innerHeight; //canvas画布高度

  // 2.创建相机 - 正交相机
  const camera = (() => {
    const k = width / height; //canvas画布宽高比
    const camera = new THREE.OrthographicCamera(-s *k, s* k, s, -s, 1, 8000);
    camera.position.set(300, 300, 300);
    camera.lookAt(0, 0, 0); //指向坐标原点
    return camera;
  })();

  // 几何体
  (() => {
    const geometry = new THREE.BoxGeometry(50, 50, 50);
    const material = new THREE.MeshLambertMaterial({
      color: 0x00ffff,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add( mesh );

    return mesh
  })();

  // 光源设置
  const directionLight = (() => {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(100, 60, 50);
    scene.add(directionalLight);
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);
    return directionalLight
  })();

  // WebGL渲染器设置
  const renderer = (() => {
    const renderer = new THREE.WebGLRenderer({
      antialias: true, //开启优化锯齿
    });
    renderer.setPixelRatio(window.devicePixelRatio); //防止输出模糊
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    return renderer
  })();

  //辅助观察的坐标系
  const axesHelper = (() => {
    const axesHelper = new THREE.AxesHelper(1000);
    scene.add(axesHelper);
    return axesHelper
  })();

  // 渲染循环
  function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();

  window.onresize = () => {
    const width = window.innerWidth; //canvas画布宽度
    const height = window.innerHeight; //canvas画布高度
    // 1. WebGL渲染器渲染的Cnavas画布尺寸更新
    renderer.setSize(width, height);
    // 2.1.更新相机参数
    //canvas画布宽高比会影响left, right需要跟着更新
    const k = width / height; //canvas画布宽高比
    camera.left = -s*k;
    camera.right = s*k;
    // 2.2.相机的left, right等属性变化了，通知threejs系统
    camera.updateProjectionMatrix();
  }

  new OrbitControls(camera, renderer.domElement);
  ```

+ 局部展示

  ```js
  // 尺寸设置
  const width = window.innerWidth  - 200; //canvas画布宽度
  const height = window.innerHeight - 200; //canvas画布高度
  ```

  ```js
  import * as THREE from "./three.module.min.js"

  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
  import Model from './model.js'

  console.log(THREE.Scene)

  const scene = new THREE.Scene();
  let s = 50;//控制 left, right, top, bottom范围大小
  const width = window.innerWidth - 200; //canvas画布宽度
  const height = window.innerHeight - 200; //canvas画布高度

  // 2.创建相机 - 正交相机
  const camera = (() => {
    const k = width / height; //canvas画布宽高比
    const camera = new THREE.OrthographicCamera(-s *k, s* k, s, -s, 1, 8000);
    camera.position.set(300, 300, 300);
    camera.lookAt(0, 0, 0); //指向坐标原点
    return camera;
  })();

  //
  // 几何体
  (() => {
    const geometry = new THREE.BoxGeometry(50, 50, 50);
    const material = new THREE.MeshLambertMaterial({
      color: 0x00ffff,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add( mesh );

    return mesh
  })();

  // 光源设置
  const directionLight = (() => {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(100, 60, 50);
    scene.add(directionalLight);
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);
    return directionalLight
  })();

  // WebGL渲染器设置
  const renderer = (() => {
    const renderer = new THREE.WebGLRenderer({
      antialias: true, //开启优化锯齿
    });
    renderer.setPixelRatio(window.devicePixelRatio); //防止输出模糊
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    return renderer
  })();

  //辅助观察的坐标系
  const axesHelper = (() => {
    const axesHelper = new THREE.AxesHelper(1000);
    scene.add(axesHelper);
    return axesHelper
  })();

  // 渲染循环
  function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();

  window.onresize = () => {
    const width = window.innerWidth - 200; //canvas画布宽度
    const height = window.innerHeight - 200; //canvas画布高度
    // 1. WebGL渲染器渲染的Cnavas画布尺寸更新
    renderer.setSize(width, height);
    // 2.1.更新相机参数
    //canvas画布宽高比会影响left, right需要跟着更新
    const k = width / height; //canvas画布宽高比
    camera.left = -s*k;
    camera.right = s*k;
    // 2.2.相机的left, right等属性变化了，通知threejs系统
    camera.updateProjectionMatrix();

  }

  new OrbitControls(camera, renderer.domElement);
  ```
