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
  player = gltf.scene;//玩家角色模型
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



(() => {
  const v = new THREE.Vector3(0, 0, 3);
  
  // 声明一个对象keyStates用来记录键盘事件状态
  const keyStates = {
    // 使用W、A、S、D按键来控制前、后、左、右运动
    // false表示没有按下，true表示按下状态
    W: false,
    A: false,
    S: false,
    D: false,
  };
  // 当某个键盘按下设置对应属性设置为true
  document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyW') keyStates.W = true;
    if (event.code === 'KeyA') keyStates.A = true;
    if (event.code === 'KeyS') keyStates.S = true;
    if (event.code === 'KeyD') keyStates.D = true;
  });
  // 当某个键盘抬起设置对应属性设置为false
  document.addEventListener('keyup', (event) => {
    if (event.code === 'KeyW') keyStates.W = false;
    if (event.code === 'KeyA') keyStates.A = false;
    if (event.code === 'KeyS') keyStates.S = false;
    if (event.code === 'KeyD') keyStates.D = false;
  });
  
  const clock = new THREE.Clock();

  // 循环执行的函数中测试W键盘状态值
  function render() {
    const deltaTime = clock.getDelta();
    if(keyStates.W){
        console.log('W键按下');
      const deltaPos = v.clone().multiplyScalar(deltaTime);
      player.position.add(deltaPos);//更新玩家角色的位置
    }else{
        console.log('W键松开');
    }
    requestAnimationFrame(render);
  }
  render();
})();


// console.log('mixer3', mixer);
export { group, mixer };