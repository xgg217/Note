import * as THREE from 'three';
import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';


const loader = new GLTFLoader();
const model = new THREE.Group();
loader.load("../人.glb", function (gltf) {
    console.log('控制台查看gltf对象结构', gltf);
    model.add(gltf.scene);

    const mesh = gltf.scene.children[0];
    // 创建变形动画权重系数的关键帧数据
    mesh.name = "per"; //关键帧动画控制的模型对象命名
    // 设置变形目标1对应权重随着时间的变化
    const KF1 = new THREE.KeyframeTrack('per.morphTargetInfluences[0]', [0, 5], [0, 1]);
    const clip = new THREE.AnimationClip("t", 5, [KF1]);


    //包含关键帧动画的模型作为参数创建一个播放器
    const mixer = new THREE.AnimationMixer(gltf.scene);
    const clipAction = mixer.clipAction(clip);
    clipAction.play();

    const clock = new THREE.Clock();
    function loop() {
        requestAnimationFrame(loop);
        const frameT = clock.getDelta();
        // 更新播放器相关的时间
        mixer.update(frameT);
    }
    loop();
})


export default model;