import * as THREE from "./three.module.min.js"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Model from './model.js'

console.log(THREE.Scene)

const scene = new THREE.Scene();

// 2.创建相机
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

// 设置相机位置
camera.position.set(23, 43, 95);
camera.lookAt(0, 0,0);
scene.add(camera)

// 将几何体添加到场景中
scene.add( Model );

// 光源设置
const directionLight = new THREE.DirectionalLight(0xffffff, 1);
directionLight.position.set(100, 60, 50);
scene.add(directionLight);

const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);


// 初始化渲染器
const renderer = new THREE.WebGLRenderer({
  antialias: true // 开启优化锯齿
})
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight)

renderer.setPixelRatio(window.devicePixelRatio); //防止输出模糊
// 将webgl渲染的canvas内容添加到body
document.body.appendChild(renderer.domElement)

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

const controls = new OrbitControls(camera, renderer.domElement);

controls.addEventListener('change', function () {
  renderer.render(scene, camera); //执行渲染操作
});//监听鼠标、键盘事件

// 画布跟随窗口变化
window.onresize = function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};


renderer.render(scene, camera);