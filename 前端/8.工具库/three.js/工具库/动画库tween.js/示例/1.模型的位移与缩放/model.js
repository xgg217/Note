import {Mesh, Group, BoxGeometry, MeshLambertMaterial} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import TWEEN from '@tweenjs/tween.js';

const group = new Group();

const mesh = (() => {

  const geo = new BoxGeometry(50,50,50);
  const material = new MeshLambertMaterial({
    color: 0x00ffff
  });
  const mesh  = new Mesh(geo, material);

  group.add(mesh);

  return mesh
})();


// 位移
// new TWEEN.Tween(mesh.position).to({
//   x: 100,
//   y: 50
// }, 2000).start();

// 缩放
new TWEEN.Tween(mesh.scale).to({
  x: 10,
  y: 5
}, 2000).start();


// const pos = {x: 0,y: 0};
// const tween = new TWEEN.Tween(pos);//创建一段tween动画

// //经过2000毫秒，pos对象的x和y属性分别从零变化为100、50
// tween.to({x: 100,y: 50}, 2000);

// //tween动画开始执行
// tween.start();

function loop() {
  TWEEN.update();//tween更新
  // console.log('x', pos);
  requestAnimationFrame(loop);
}

loop()


export default group;