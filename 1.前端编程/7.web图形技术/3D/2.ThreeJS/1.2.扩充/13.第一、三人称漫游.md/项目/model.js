// @ts-check
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

const group = new THREE.Group();

/** @type {any} */
let gltf = null;
let player = null;

try {
  gltf = await loader.loadAsync("./人.glb");
  console.log('gltf', gltf);
  player = gltf.scene; // 玩家角色模型
  group.add(player)
} catch (error) {
  console.error(error);
}

//包含关键帧动画的模型作为参数创建一个播放器
const mixer = new THREE.AnimationMixer(gltf.scene);
console.log('gltf.animations', gltf.animations);

// gltf.animations包含做个动作，选择其中的步行动作
const clipAction = mixer.clipAction(gltf.animations[13]);
clipAction.play(); //播放动画


// console.log('mixer3', mixer);
export { group, mixer, player };