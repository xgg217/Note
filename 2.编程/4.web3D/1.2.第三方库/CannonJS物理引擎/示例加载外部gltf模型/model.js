// @ts-check
import * as THREE from "three";
import * as CANNON from 'cannon-es';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const group = new THREE.Group();
// const size = 0.02; // 乒乓球半径
const height = 5; // 高度1m
const fixedTimeStep = 1/60;

let mesh;
let size;

const loader = new GLTFLoader();

try {
  // @ts-ignore
  const gltf = await loader.loadAsync("./箱子.glb");
   mesh = gltf.scene;//获取箱子网格模型
  const box3 = new THREE.Box3();
  box3.expandByObject(mesh);//计算模型包围盒
  size = new THREE.Vector3();
  box3.getSize(size);//包围盒计算箱子的尺寸
} catch (e) {
  console.error(e)
}

// threejs中的箱子 + 地面
( () => {
  
  mesh.position.y = height;

  // 设置箱子为倾斜状态
  mesh.rotation.set(Math.PI / 3, Math.PI / 3, Math.PI / 3);
  group.add(mesh);


  // 地面
  {
    const geometry = new THREE.PlaneGeometry(1,1);
    const metr = new THREE.MeshLambertMaterial({
      color: 0x0000ff,
      side: THREE.DoubleSide //两面可见
    });
    const mesh = new THREE.Mesh(geometry, metr);
    mesh.rotateX(-Math.PI / 2);
    mesh.position.y = -0.001;
    group.add(mesh);
  }

  console.log(123)

  return mesh;
})();

// 物理引擎中的 小球 + 地面
// 按钮点击控制
const render = (() => {
  const butDom = document.querySelector(".but"); // 小球下落

  // 材质
  const boxMaterial = new CANNON.Material(); // 箱子材质
  const groundMaterial = new CANNON.Material(); // 地面材质

  const world = new CANNON.World();
  world.gravity.set(0,-9.8,0);

  // x、y、z三个方向的尺寸(长宽高)，分别为1.0、0.4、0.6
  const box = new CANNON.Box(new CANNON.Vec3(size.x/2, size.y/2, size.z/2));

  const body = new CANNON.Body({
    mass: 0.3, // 碰撞体质量0.3kg
    shape: box,//碰撞体的几何体形状
    material: boxMaterial
  });
  body.position.y = height;

  // 设置箱子为倾斜状态
  body.quaternion.setFromEuler(Math.PI / 3, Math.PI / 3, Math.PI / 3);
  world.addBody(body);

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
    const contactMaterial = new CANNON.ContactMaterial(boxMaterial, groundMaterial, {
      restitution: 0.2, //反弹恢复系数
    })
    // 把关联的材质添加到物理世界中
    world.addContactMaterial(contactMaterial)
  }

  // 按钮点击设置小球下楼
  // let isAdd = false;
  // butDom.addEventListener('click', () => {
  //   body.position.y = height;
  //   if(!isAdd) {
  //     isAdd = true;
  //     world.addBody(body);
  //   }
  // })


  // 循环渲染
  function render() {
    world.step(fixedTimeStep);//更新物理计算

    mesh.position.copy(body.position);
    // 同步姿态角度
    mesh.quaternion.copy(body.quaternion);
    // console.log('小球的位置', body.position.y,)
    requestAnimationFrame(render);
  }


  return render

})();

console.log(456)
render();

export default group;