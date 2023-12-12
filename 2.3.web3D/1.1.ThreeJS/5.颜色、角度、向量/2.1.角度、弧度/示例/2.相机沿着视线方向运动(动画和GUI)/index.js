import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import model from './model.js'; //模型对象
import TWEEN from '@tweenjs/tween.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

const width = window.innerWidth;
const height = window.innerHeight;


//场景
const scene = new THREE.Scene();
scene.add(model); //模型对象添加到场景中

//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);


//光源设置 平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 60, 50);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);



//相机
const {camera} = (() => {

    const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
    camera.position.set(502, 123, 125);
    camera.lookAt(0, 0, 0);

    const dir = new THREE.Vector3();
    // 获取相机的视线方向
    camera.getWorldDirection(dir);

    console.log('单位向量',dir);
    console.log('单位向量',dir.length());

    // const dis = dir.clone().multiplyScalar(300); //
    // 相机沿着视线方向平移
    // camera.position.add(dis);
    // new TWEEN.Tween(camera.position)
    // .to(camera.position.clone().add(dis), 3000)
    // .start();

    // console.log('camera.position',camera.position);
    // console.log('camera.position',camera.lookAt);

    const pos0 = camera.position.clone();//记录相机初始位置
    const gui = new GUI();
    // L：相机沿着视线移动距离，从0~200
    gui.add({L: 0}, 'L', 0, 200).onChange(function(v){
    const dis = dir.clone().multiplyScalar(v);//相机沿着视线偏移长度v
    const newPos = pos0.clone().add(dis);//相机初始位置+相机偏移向量
    camera.position.copy(newPos);//新的位置赋值给相机位置
});

    return {camera}
})();



// WebGL渲染器设置
const renderer = new THREE.WebGLRenderer({
    antialias: true, //开启优化锯齿
});
renderer.setPixelRatio(window.devicePixelRatio); //防止输出模糊
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
// 设置渲染器，允许光源阴影渲染
renderer.shadowMap.enabled = true;



// 渲染循环
function render() {
    TWEEN.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();


const controls = new OrbitControls(camera, renderer.domElement);


// 画布跟随窗口变化
window.onresize = function () {
    const width = window.innerWidth;
    const height = window.innerHeight;
    // cnavas画布宽高度重新设置
    renderer.setSize(width,height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
};