import * as THREE from "./three.module.min.js"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { group,mixer, player } from './model.js'

console.log(THREE.Scene)

const scene = new THREE.Scene();

// 2.创建相机
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);

// 设置相机位置
// camera.position.set(5, 5, 5);
// camera.lookAt(0, 0,0);
// scene.add(camera)
camera.position.set(0, 1.6, -5.5); // 玩家角色后面一点
camera.lookAt(0, 1.6, 0);//对着人身上某个点  视线大致沿着人的正前方
player.add(camera); // 第三人称视角：相机作为人的子对象，会跟着人运动

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

(() => {
  // 用三维向量表示玩家角色(人)运动漫游速度
  const v = new THREE.Vector3(0, 0, 0);//初始速度设置为0
  const a = 12;//加速度：调节按键加速快慢
  const vMax = 5;//限制玩家角色最大速度
  const damping = -0.04; // 阻尼
  let leftButtonBool = false;//记录鼠标左键状态
  const clock = new THREE.Clock();

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
    // 按下W键
    if (event.code === 'KeyW') {
      keyStates.W = true;
      return
    }

    // 按下A键
    if (event.code === 'KeyA') {
      keyStates.A = true;
      return
    }

    // 按下S键
    if (event.code === 'KeyS') {
      keyStates.S = true;
      return
    }

    // 按下D键
    if (event.code === 'KeyD') {
      keyStates.D = true
      return
    };
  });

  // 当某个键盘抬起设置对应属性设置为false
  document.addEventListener('keyup', (event) => {
    // 按下W键
    if (event.code === 'KeyW') {
      keyStates.W = false;
      return
    }

    // 按下A键
    if (event.code === 'KeyA') {
      keyStates.A = false;
      return
    }

    // 按下S键
    if (event.code === 'KeyS') {
      keyStates.S = false;
      return
    }

    // 按下D键
    if (event.code === 'KeyD') {
      keyStates.D = false
      return
    };
  });


  // 鼠标左键按下时候，旋转
  document.addEventListener('mousedown', () => {
    leftButtonBool = true;
  });

  // 鼠标左键抬起时候，不再旋转
  document.addEventListener('mouseup', () => {
    leftButtonBool = false;
  });

  // 鼠标左键按下时候，才旋转玩家角色
  document.addEventListener('mousemove', (event) => {
    // console.log('event.movementX', event.movementX);

    //鼠标左键按下时候，才旋转玩家角色
    if(leftButtonBool){

      player.rotation.y -= event.movementX / 600;
    }
  });


  // 循环执行的函数中测试W键盘状态值
  function render() {
    const deltaTime = clock.getDelta();
    if (v.length() < vMax) {//限制最高速度

      if(keyStates.W){
        console.log('W键按下');
        //先假设W键对应运动方向为z
        const front = new THREE.Vector3();
        player.getWorldDirection(front);//获取玩家角色(相机)正前方

        // W键按下时候，速度随着时间增加
        // front.multiplyScalar(a * deltaTime) 速度的改变量
        // v（当前速度） + 速度的改变量
        v.add(front.multiplyScalar(a * deltaTime));


        // return;
      }

      if(keyStates.S){
        // 与W按键相反方向
        const front = new THREE.Vector3();
        player.getWorldDirection(front);

        // - a：与W按键反向相反
        v.add(front.multiplyScalar(-a * deltaTime));
      }
    }

    // 阻尼减速
    v.addScaledVector(v, damping);

    // console.log(v)
    const deltaPos = v.clone().multiplyScalar(deltaTime);
    player.position.add(deltaPos);//更新玩家角色的位置


    requestAnimationFrame(render);
  }
  render();
})();

// 渲染循环
const clock = new THREE.Clock();
function render() {
  const deltaTime = clock.getDelta();
  mixer.update(deltaTime);// 更新播放器相关的时间
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();
