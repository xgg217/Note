// @ts-check
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import {createSphereMesh} from './utils.js'
const loader = new GLTFLoader();

const group = new THREE.Group();

(() => {

  loader.load("./工厂.glb", (gltf) => {
    const person = gltf.scene;
    group.add(person);
  })

  const fly = new THREE.Group();

  const R = 100; // 半径长度
  const H = 20; // 绕转高度
  let angle = 0;

  const a = new THREE.Vector3(0, 0 ,1); // 无人机加载进来默认正反向(飞机上相机的方向)


  loader.load("./无人机.glb", (gltf) => {
    const person = gltf.scene;
    person.scale.set(0.5, 0.5, 0.5);
    fly.add(person);
    const axesHelper = new THREE.AxesHelper(30);
    fly.add(axesHelper);//用一个坐标轴可视化模型的局部坐标系(本地坐标系)

    fly.position.set(R, H, 0); // 初始位置

    //无人机加载进来默认正反向(相机镜头方向)
    const a = new THREE.Vector3(0, 0 ,1);
    // 绕转中心的坐标
    const target = new THREE.Vector3(0, H, 0);
    // 姿态角度初始值
    const q0 = fly.quaternion.clone();

    function loop() {
        angle += 0.01;
        const x = R * Math.cos(angle);
        const z = R * Math.sin(angle);
        // fly.position.set(x, H, z);
        // 新的位置
        fly.position.x = x;
        fly.position.z = z;

        // 保持无人机镜头一直对准旋转中心(y圆弧轨迹线切线方向)
        const b = target.clone().sub(fly.position).normalize();
        const q = new THREE.Quaternion().setFromUnitVectors(a, b);
        const newQ = q0.clone().multiply(q);//初始四元数乘需要增加旋转对应四元数q
        fly.quaternion.copy(newQ);


        requestAnimationFrame(loop);

        // 保持无人机镜头沿着飞行方向(圆弧轨迹线切线方向)


    }
    loop()




    group.add(fly);
  })


})();


export default group;