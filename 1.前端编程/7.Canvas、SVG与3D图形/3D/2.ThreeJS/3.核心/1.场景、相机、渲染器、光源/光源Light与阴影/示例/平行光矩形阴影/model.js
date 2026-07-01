import {Mesh, Group, PlaneGeometry,MeshLambertMaterial, BoxGeometry} from 'three';
const group = new Group();

// 长方体模型
const mesh = (() => {
    const geometry = new BoxGeometry( 50, 100, 50,);
    const material = new MeshLambertMaterial( {color: 0x00ffff} );
    const mesh = new Mesh( geometry, material );
    mesh.position.y = 50;

    // 设置产生投影的网格模型
    mesh.castShadow = true;

    return mesh
})();

// 矩形平面模型
const planeMesh = (() => {
    const plane = new PlaneGeometry(400,250);
    const material = new MeshLambertMaterial( {color: 0x999999} );
    const planeMesh = new Mesh( plane, material );
    planeMesh.rotation.x = -Math.PI / 2;

    // 设置接收阴影的投影面
    planeMesh.receiveShadow = true;

    return planeMesh
})();

group.add(mesh,planeMesh);
// group.add(planeMesh);

export default group;