import {Mesh, Group, Clock, AnimationMixer} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const group = new Group();

(() => {
  const gltfloader = new GLTFLoader();


  gltfloader.load("./士兵.glb", gltf => {
    group.add(gltf.scene);

    console.log(gltf);

    const mixer = new AnimationMixer(gltf.scene);

    // const clipAction = mixer.clipAction(gltf.animations[2]);
    // clipAction.play();
    // idle 休息
    // run 跑步
    // TPose T形静止展开
    // walk 走路

    const IdleAction = mixer.clipAction(gltf.animations[0]);
    const RunAction = mixer.clipAction(gltf.animations[1]);
    const WalkAction = mixer.clipAction(gltf.animations[3]);

    IdleAction.play();
    RunAction.play();
    WalkAction.play();
    // 跑步和走路动画对人影响程度为0，人处于休闲状态
    IdleAction.weight = 1.0;
    RunAction.weight = 0.0;
    WalkAction.weight = 0.0;

    let ActionState = IdleAction;//标记当前处于播放状态的动画动作对象

    // 通过UI按钮控制，切换动画运动状态
    document.getElementById('Idle').addEventListener('click', function () {
      ActionState.weight = 0.0;//播放状态动画权重设置为0
      IdleAction.weight = 1.0;
      ActionState = IdleAction;
    })

    document.getElementById('Run').addEventListener('click', function () {
      ActionState.weight = 0.0;//播放状态动画权重设置为0
      RunAction.weight = 1.0;
      ActionState = RunAction;
    })

    document.getElementById('Walk').addEventListener('click', function () {
      ActionState.weight = 0.0;//播放状态动画权重设置为0
      WalkAction.weight = 1.0;
      ActionState = WalkAction;
    })

    const clock = new Clock();

    const loop = () => {
      requestAnimationFrame(loop);
      const frameT = clock.getDelta();

      mixer.update(frameT);
    };
    loop();
  })
})();



export default group;