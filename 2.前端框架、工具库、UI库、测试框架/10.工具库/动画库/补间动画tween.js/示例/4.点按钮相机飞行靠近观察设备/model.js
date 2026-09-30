import {Mesh, Group, Clock, AnimationMixer,SkeletonHelper,Vector3} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {GUI} from 'three/addons/libs/lil-gui.module.min.js';


const group = new Group();

const loader = new GLTFLoader();

loader.load("./工厂.glb", function (gltf) {

  group.add(gltf.scene);
  // console.log(gltf.scene);



})

// function render() {
//   TWEEN.update();
//   requestAnimationFrame(render);
// }
// render();



export default group;