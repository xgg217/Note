// @ts-check
import * as THREE from "three";
import * as CANNON from 'cannon-es';

const group = new THREE.Group();
const size = 0.02; // 乒乓球半径
const height = 1; // 高度1m
const fixedTimeStep = 1/60;

// threejs中的小球 + 地面
const mesh = (() => {
  const metr = new THREE.MeshLambertMaterial({
    color: 0x0000ff
  });
  // 小球
  const geometry = new THREE.SphereGeometry(size);
  // 创建线模型对象
  const mesh = new THREE.Mesh(geometry, metr);
  mesh.position.y = height;
  
  group.add(mesh);
  
  
  // 地面
  {
    const geometry = new THREE.PlaneGeometry(1,1);
    const metr = new THREE.MeshLambertMaterial({
      color: 0x0000ff
    });
    const mesh = new THREE.Mesh(geometry, metr);
    mesh.rotateX(-Math.PI / 2);
    group.add(mesh);
  }
  
  return mesh;
})();

// 物理引擎中的 小球 + 地面
// 按钮点击控制
const render = (() => {
  const butDom = document.querySelector(".but"); // 小球下落
  const ppbDom = document.querySelector(".ppb"); // 打开小球的声音
  const audioPDom = document.querySelector(".audioP"); // 小球落地的音频
  
  // 材质
  const sphereMaterial = new CANNON.Material(); // 小球材质
  const groundMaterial = new CANNON.Material(); // 地面材质
  
  const world = new CANNON.World();
  world.gravity.set(0,-9.8,0);

  // 1m半径球体
  const bodyShape = new CANNON.Sphere(size);

  const body = new CANNON.Body({
    mass: 0.03, // 碰撞体质量0.03kg
    position: new CANNON.Vec3(0, height, 0), // 碰撞体的三维空间中位置
    shape: bodyShape,//碰撞体的几何体形状
    material: sphereMaterial
  });
  // world.addBody(body);
  
  // 物理地面
  {
    
    // 物理地面
    const groundBody = new CANNON.Body({
      mass: 0, // 质量为0，始终保持静止，不会受到力碰撞或加速度影响
      shape:new CANNON.Plane(),
      material: groundMaterial,//地面材质
    });
    
    // 改变平面默认的方向，法线默认沿着z轴，旋转到平面向上朝着y方向
    // 旋转规律类似threejs 平面
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(groundBody);
  }
  
  // 反弹
  {
    const contactMaterial = new CANNON.ContactMaterial(groundMaterial, sphereMaterial, {
      restitution: 0.7, //反弹恢复系数
    })
    // 把关联的材质添加到物理世界中
    world.addContactMaterial(contactMaterial)
  }

  // 按钮点击设置小球下楼
  let isAdd = false;
  butDom.addEventListener('click', () => {
    body.position.y = height;
    if(!isAdd) {
      isAdd = true;
      world.addBody(body);
    }
  })
  
  // 打开声音，因为浏览器限制音频首次播放需要用户触发
  ppbDom.addEventListener('click', () => {
    audioPDom.volume = 0; // 按钮开启声音时候，设置静音
    audioPDom.play();
  })
  
  body.addEventListener('collide', event => {
    console.log(event);
    const contact = event.contact;
    
    console.log(contact.getImpactVelocityAlongNormal())
    
    const ImpactV = contact.getImpactVelocityAlongNormal();
    audioPDom.volume = ImpactV / 4.5;
    audioPDom.play();
  })
  
  // 循环渲染
  function render() {
    world.step(fixedTimeStep);//更新物理计算
    
    mesh.position.copy(body.position);
    
    // console.log('小球的位置', body.position.y,)
    requestAnimationFrame(render);
  }
  
  //
  
  return render

})();


render();



export default group;