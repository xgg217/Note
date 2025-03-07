import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import model from './model.js'; //模型对象

//场景
const scene = new THREE.Scene();
scene.add(model); //模型对象添加到场景中

//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);


//光源设置
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 60, 50);
scene.add(directionalLight);
// const ambient = new THREE.AmbientLight(0xffffff, 0.4);
// scene.add(ambient);
// 聚光灯光源
const spotLight = new THREE.SpotLight(0xffffff,1.0);
scene.add(spotLight);//光源添加到场景中
spotLight.angle = Math.PI / 6;//光锥角度的二分之一
spotLight.position.set(0, 50, 0);// 设置聚光光源位置
console.log('聚广源指向目标',spotLight.target);

spotLight.target.position.set(50,0,0);
scene.add(spotLight.target);
const spotLightHelper = new THREE.SpotLightHelper(spotLight,0xffffff)
scene.add(spotLightHelper);


//相机
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
camera.position.set(292, 223, 185);
camera.lookAt(0, 0, 0);

// WebGL渲染器设置
const renderer = new THREE.WebGLRenderer({
    antialias: true, //开启优化锯齿
});
renderer.setPixelRatio(window.devicePixelRatio); //防止输出模糊
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);



// 渲染循环
function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();


const controls = new OrbitControls(camera, renderer.domElement);


// 画布跟随窗口变化
window.onresize = function () {
    const width = window.innerWidth;
    const height = window.innerHeight;
    // cnavas画布宽高度重新设置
    renderer.setSize(width,height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
};