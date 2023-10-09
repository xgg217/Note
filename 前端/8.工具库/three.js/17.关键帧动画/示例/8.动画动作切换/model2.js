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
    let ActionState = IdleAction;//当前处于播放状态的动画动作对象

    // 通过UI按钮控制，切换动画运动状态
    document.getElementById('Idle').addEventListener('click', function () {
      ActionState.stop();//播放状态动画终止
      IdleAction.play();
      ActionState = IdleAction;
    })

    document.getElementById('Run').addEventListener('click', function () {
      ActionState.stop();//播放状态动画终止
      RunAction.play();
      ActionState = RunAction;
    })

    document.getElementById('Walk').addEventListener('click', function () {
      ActionState.stop();//播放状态动画终止
      WalkAction.play();
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