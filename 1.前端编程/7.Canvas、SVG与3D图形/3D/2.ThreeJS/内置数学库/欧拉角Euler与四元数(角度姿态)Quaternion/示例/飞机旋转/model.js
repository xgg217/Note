// @ts-check
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import {createSphereMesh} from './utils.js'
const loader = new GLTFLoader();

const group = new THREE.Group();

(() => {

  loader.load("./飞机1.glb", (gltf) => {
    const fly = gltf.scene;
    group.add(fly);

    fly.position.set(10, 10, 0);//相对世界坐标系坐标原点偏移
    const axesHelper = new THREE.AxesHelper(10);
    fly.add(axesHelper);//用一个坐标轴可视化模型的局部坐标系(本地坐标系)
    // fly.rotateY(Math.PI / 2);

    // 可视化飞机方向
    const a = new THREE.Vector3(0, 0, -1); // 飞机初始的飞行方向
    const O = fly.position.clone(); // 飞机位置坐标箭头起点

    group.add(new THREE.ArrowHelper(new THREE.Vector3(-1, 0, 0), O, 30, 0xff0000));

    // 飞机旋转后的飞行方向
    const b = new THREE.Vector3(-1, -1, -1).normalize();
    // const bn = new THREE.Vector3(-1,-1,-1).normalize();
    group.add(new THREE.ArrowHelper(b, O, 30, 0x00ff00));

    // a旋转到b构成的四元数
    const quaternion = new THREE.Quaternion().setFromUnitVectors(a,b); // 从a旋转到b的过程
    fly.quaternion.multiply(quaternion); // 旋转
  })


})();


export default group;