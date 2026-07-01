// @ts-check
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import {createSphereMesh} from './utils.js'
const loader = new GLTFLoader();

const group = new THREE.Group();

(() => {

  loader.load("./人.glb", (gltf) => {
    const person = gltf.scene;
    group.add(person);

    person.position.set(0, 0, 2);//人的位置
    const a = new THREE.Vector3(0, 0, -1); // 人的朝向
    const b = new THREE.Vector3(2, 0, -3).normalize(); // 旋转后人的方向

    const axesHelperA = new THREE.ArrowHelper(a,person.position, 5, 0xff0000);
    const axesHelperB = new THREE.ArrowHelper(b,person.position, 5, 0x00ff00);
    group.add(axesHelperA,axesHelperB);

    // a旋转到b构成的四元数
    const quaternion = new THREE.Quaternion().setFromUnitVectors(a,b); // 从a旋转到b的过程
    person.quaternion.multiply(quaternion); // 旋转
  })


})();


export default group;