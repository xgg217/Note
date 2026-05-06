import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
// 引入渲染器通道RenderPass
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
// 引入OutlinePass通道
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
import {GammaCorrectionShader} from 'three/addons/shaders/GammaCorrectionShader.js';
import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js';
import {SMAAPass} from 'three/addons/postprocessing/SMAAPass.js';
import {CSS2DRenderer} from 'three/addons/renderers/CSS2DRenderer.js';
import tag from './tag.js';
import TWEEN from '@tweenjs/tween.js';

import  {group}  from './model.js';//模型对象

const can = document.querySelector('#can')
//场景
const scene = new THREE.Scene();
scene.add(group); //模型对象添加到场景中

//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

//光源设置
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(202, 123, 125);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

//渲染器和相机
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
camera.position.set(202, 123, 125);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);
can.appendChild(renderer.domElement);

const css2Renderer = (() =>{
  // 创建一个CSS2渲染器CSS2DRenderer
  const css2Renderer = new CSS2DRenderer();
  css2Renderer.setSize(width, height);
  // HTML标签<div id="tag"></div>外面父元素叠加到canvas画布上且重合
  css2Renderer.domElement.style.position = 'absolute';
  css2Renderer.domElement.style.top = '0px';
  //设置.pointerEvents=none，解决HTML元素标签对threejs canvas画布鼠标事件的遮挡
  css2Renderer.domElement.style.pointerEvents = 'none';
  document.body.appendChild(css2Renderer.domElement);

  return css2Renderer
})();

// 后处理器
const {composer, outlinePass} = (() => {

  // 创建后处理对象EffectComposer，WebGL渲染器作为参数
  const composer = new EffectComposer(renderer);
  // 创建一个渲染器通道，场景和相机作为参数
  const renderPass = new RenderPass(scene, camera);

  // 设置renderPass通道
  composer.addPass(renderPass);

  // OutlinePass第一个参数v2的尺寸和canvas画布保持一致
  const v2 = new THREE.Vector2(window.innerWidth, window.innerWidth);
  // const v2 = new THREE.Vector2(800, 600);
  const outlinePass = new OutlinePass(v2, scene, camera);
  outlinePass.visibleEdgeColor.set(0x00ffff);
  outlinePass.edgeThickness = 4;
  outlinePass.edgeStrength = 6;


  // 一个模型对象
  // outlinePass.selectedObjects = [mesh];
  composer.addPass(outlinePass)

  //获取.setPixelRatio()设置的设备像素比
  const pixelRatio = renderer.getPixelRatio();

  // width、height是canva画布的宽高度
  const smaaPass = new SMAAPass(width * pixelRatio, height * pixelRatio);
  composer.addPass(smaaPass);

  // 创建伽马校正
  const gammaPass = new ShaderPass(GammaCorrectionShader);
  composer.addPass(gammaPass);
  return {composer, outlinePass}
})();


(() => {
  let chooseObj = null;
  const span = document.querySelector('#name');
  const close = document.getElementById('close');

  renderer.domElement.addEventListener('click', (e) => {
    const px = e.offsetX;
    const py = e.offsetY;
    console.log(px, py);

    //屏幕坐标px、py转WebGL标准设备坐标x、y
    //width、height表示canvas画布宽高度
    const x = (px / window.innerWidth) * 2 - 1;
    const y = -(py / window.innerHeight) * 2 + 1;

    //创建一个射线投射器`Raycaster`
    const raycaster = new THREE.Raycaster();
    //.setFromCamera()计算射线投射器`Raycaster`的射线属性.ray
    // 形象点说就是在点击位置创建一条射线，用来选中拾取模型对象
    raycaster.setFromCamera(new THREE.Vector2(x, y), camera);

    const cunchu = group.getObjectByName("存储罐");

    for (let i = 0; i < cunchu.children.length; i++) {
      const group = cunchu.children[i];
      //递归遍历chooseObj，并给chooseObj的所有子孙后代设置一个ancestors属性指向自己
      group.traverse(function (obj) {
        if (obj.isMesh) {
          obj.ancestors = group;
        }
      })
    }

    const intersects = raycaster.intersectObjects(cunchu.children);
    // // intersects.length大于0说明，说明选中了模型
    if (intersects.length > 0) {

      chooseObj = intersects[0].object.ancestors;
      outlinePass.selectedObjects = [chooseObj];
      chooseObj.add(tag);
      span.innerHTML = chooseObj.name;

      // 预览
      const pos = new THREE.Vector3();
      chooseObj.getWorldPosition(pos);
      // 相机飞行到的位置和观察目标拉开一定的距离
      const pos2 = pos.clone().addScalar(30);
      createCameraTween(pos2, pos);
    }
    else {
      // 把原来选中模型对应的标签和发光描边隐藏
      // if(chooseObj) {
      //   outlinePass.selectedObjects = [];//无发光描边
      //   chooseObj.remove(tag);//从场景移除
      // }
    }
  });

  // 相机整体预览对应的位置和观察目标
  const cameraPos0 = new THREE.Vector3(202, 123, 125)
  const target0 = new THREE.Vector3(0, 0, 0);

  // 关闭按钮
  close.addEventListener('click', () => {
    if (chooseObj) {//把原来选中模型对应的标签和发光描边隐藏
      outlinePass.selectedObjects = []; //无发光描边
      chooseObj.remove(tag); //从场景移除

      createCameraTween(cameraPos0, target0);
    }
  })

  // 相机动画函数，从A点飞行到B点，A点表示相机当前所处状态
  // pos: 三维向量Vector3，表示动画结束相机位置
  // target: 三维向量Vector3，表示相机动画结束lookAt指向的目标观察点
  function createCameraTween(endPos,endTarget){
    new TWEEN.Tween({
        // 不管相机此刻处于什么状态，直接读取当前的位置和目标观察点
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
        tx: controls.target.x,
        ty: controls.target.y,
        tz: controls.target.z,
    })
    .to({
        // 动画结束相机位置坐标
        x: endPos.x,
        y: endPos.y,
        z: endPos.z,
        // 动画结束相机指向的目标观察点
        tx: endTarget.x,
        ty: endTarget.y,
        tz: endTarget.z,
    }, 2000)
    .onUpdate(function (obj) {
        // 动态改变相机位置
        camera.position.set(obj.x, obj.y, obj.z);
        // 动态计算相机视线
        // camera.lookAt(obj.tx, obj.ty, obj.tz);
        controls.target.set(obj.tx, obj.ty, obj.tz);
        controls.update();//内部会执行.lookAt()
    })
    .start();
  }
})();


// 渲染循环
function render() {
  css2Renderer.render(scene, camera);
  composer.render();
  TWEEN.update();//tween更新
  // renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();


const controls = new OrbitControls(camera, renderer.domElement);

// 画布跟随窗口变化
window.onresize = function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};