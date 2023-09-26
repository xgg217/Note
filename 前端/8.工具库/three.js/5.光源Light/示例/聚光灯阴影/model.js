import {Mesh, Group, PlaneGeometry,MeshLambertMaterial} from 'three';
const group = new Group();

const geometry = new PlaneGeometry( 400, 200,);
const material = new MeshLambertMaterial( {color: 0x00ffff} );
const plane = new Mesh( geometry, material );
plane.rotation.x = -Math.PI / 2; // 角度设置为平铺

group.add(plane);

export default group;