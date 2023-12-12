import * as THREE from "./three.module.min.js"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { group,mixer, player } from './model.js'
import { camera,
  playerUpdate } from "./player.js"

console.log(THREE.Scene)

const scene = new THREE.Scene();




// 将几何体添加到场景中
scene.add( group );

// 光源设置
const directionLight = new THREE.DirectionalLight(0xffffff, 0.4);
directionLight.position.set(80, 100, 50);
scene.add(directionLight);
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);


// 初始化渲染器
const renderer = new THREE.WebGLRenderer({
  antialias: true
})
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight)
// console.log(renderer)
// renderer.setClearColor(0x444444, 1); //设置背景颜色
// 将webgl渲染的canvas内容添加到body
document.body.appendChild(renderer.domElement)

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

// 添加一个辅助网格地面
const gridHelper = new THREE.GridHelper(300, 25, 0x004444, 0x004444);
scene.add( gridHelper );

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.addEventListener('change', function () {
//   renderer.render(scene, camera); //执行渲染操作
// });//监听鼠标、键盘事件


// 渲染循环
const clock = new THREE.Clock();
function render() {
  const deltaTime = clock.getDelta();
  // 更新任务
  playerUpdate(deltaTime);
  mixer.update(deltaTime);// 更新播放器相关的时间
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();
