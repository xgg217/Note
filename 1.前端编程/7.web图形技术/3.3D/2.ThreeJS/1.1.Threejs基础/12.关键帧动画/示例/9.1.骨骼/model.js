import {Mesh, Group, Clock, AnimationMixer,SkeletonHelper} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {GUI} from 'three/addons/libs/lil-gui.module.min.js';

const group = new Group();
const gui = new GUI();
const g1 = gui.addFolder('关节');

const loader = new GLTFLoader();

loader.load("./骨骼动画.glb", function (gltf) {

  group.add(gltf.scene);
  console.log(gltf.scene);

  // 骨骼动画辅助显示
  const skeletonHelper = new SkeletonHelper(gltf.scene);
  group.add(skeletonHelper);

  // 根据骨骼关节名字获取骨关节Bone
  // 在三维软件中，骨骼关节层层展开，可以看到下面三个骨骼关节
  const bone1 = gltf.scene.getObjectByName('Bone1'); //关节1
  const bone2 = gltf.scene.getObjectByName('Bone2'); //关节2
  const bone3 = gltf.scene.getObjectByName('Bone3'); //关节3
  console.log(bone1, bone2, bone3);

  g1.add(bone1.rotation, 'x', 0, Math.PI / 3).name('关节1');
  g1.add(bone2.rotation, 'x', 0, Math.PI / 3).name('关节2');
  g1.add(bone3.rotation, 'x', 0, Math.PI / 3).name('关节3');
})



export default group;