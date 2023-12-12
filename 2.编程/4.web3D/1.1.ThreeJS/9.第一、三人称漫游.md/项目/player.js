// @ts-check
import * as THREE from "./three.module.min.js"
// @ts-ignore
import { group,mixer, player } from './model.js'

// 2.创建相机
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);

// 设置相机位置
// camera.position.set(5, 5, 5);
// camera.lookAt(0, 0,0);
// scene.add(camera)
// @ts-ignore
camera.position.set(0, 1.6, -5.5); // 玩家角色后面一点
camera.lookAt(0, 1.6, 0);//对着人身上某个点  视线大致沿着人的正前方

const cameraGroup = new THREE.Group();
// 层级关系：player <—— cameraGroup <—— camera
cameraGroup.add(camera);
player.add(cameraGroup); // 第三人称视角：相机作为人的子对象，会跟着人运动

const { keyStates } = (() => {

  // 用三维向量表示玩家角色(人)运动漫游速度

  let leftButtonBool = false;//记录鼠标左键状态
  // 上下俯仰角度范围
  const angleMin = THREE.MathUtils.degToRad(-15);//角度转弧度
  const angleMax = THREE.MathUtils.degToRad(15);
  // @ts-ignore
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
    if (event.code === 'KeyW'  || event.code === 'ArrowUp') {
      keyStates.W = true;
    }

    // 按下A键
    if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
      keyStates.A = true;
    }

    // 按下S键
    if (event.code === 'KeyS'  || event.code === 'ArrowDown') {
      keyStates.S = true;
    }

    // 按下D键
    if (event.code === 'KeyD'  || event.code === 'ArrowRight') {
      keyStates.D = true
    };
  });

  // 当某个键盘抬起设置对应属性设置为false
  document.addEventListener('keyup', (event) => {
    // console.log('event.code', event.code);

    // 按下W键
    if (event.code === 'KeyW' || event.code === 'ArrowUp') {
      keyStates.W = false;
    }

    // 按下A键
    if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
      keyStates.A = false;
    }

    // 按下S键
    if (event.code === 'KeyS' || event.code === 'ArrowDown') {
      keyStates.S = false;
    }

    // 按下D键
    if (event.code === 'KeyD' || event.code === 'ArrowRight') {
      keyStates.D = false
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
      // 左右旋转
      player.rotation.y -= event.movementX / 600;

      // 鼠标上下滑动，让相机视线上下转动
      // 相机父对象cameraGroup绕着x轴旋转,camera跟着转动
      // @ts-ignore
      let x = cameraGroup.rotation.x - event.movementY / 600;

      // 上下俯仰角度范围
      // @ts-ignore
      if (cameraGroup.rotation.x < angleMin) {
        x = angleMin;
      }
      // @ts-ignore
      if (cameraGroup.rotation.x > angleMax) {
        x = angleMax
      };

      // @ts-ignore
      cameraGroup.rotation.x = x;
    }
  });

  return {
    keyStates
  }


})();

const { playerUpdate } = (() => {
  const v = new THREE.Vector3(0, 0, 0);//初始速度设置为0
  const a = 12;//加速度：调节按键加速快慢
  const vMax = 5;//限制玩家角色最大速度
  const damping = -0.04; // 阻尼

  // 循环执行的函数中测试W键盘状态值
  function playerUpdate(deltaTime) {
    // const deltaTime = clock.getDelta();
    const front = new THREE.Vector3();
    if (v.length() < vMax) {//限制最高速度

      if(keyStates.W){
        console.log('W键按下');
        //先假设W键对应运动方向为z

        player.getWorldDirection(front);//获取玩家角色(相机)正前方

        // W键按下时候，速度随着时间增加
        // front.multiplyScalar(a * deltaTime) 速度的改变量
        // v（当前速度） + 速度的改变量
        v.add(front.multiplyScalar(a * deltaTime));
      }

      if(keyStates.S){
        // 与W按键相反方向
        player.getWorldDirection(front);

        // - a：与W按键反向相反
        v.add(front.multiplyScalar(-a * deltaTime));
      }

      if (keyStates.A) {//向左运动
      }

      if (keyStates.D) {//向右运动
      }
    }

    // 阻尼减速
    v.addScaledVector(v, damping);

    // console.log(v)
    const deltaPos = v.clone().multiplyScalar(deltaTime);
    player.position.add(deltaPos);//更新玩家角色的位置
  }

  return {
    playerUpdate
  }
})();

export {
  camera,
  playerUpdate
}

