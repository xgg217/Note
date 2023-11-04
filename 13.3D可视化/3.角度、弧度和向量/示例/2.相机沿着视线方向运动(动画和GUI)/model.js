import {Mesh, Group, SphereGeometry, MeshLambertMaterial,Vector3} from 'three';

const group = new Group();

const s = new SphereGeometry(50);
const material = new MeshLambertMaterial({
  color: 0xffff00,
});

const cube = new Mesh( s, material );

group.add(cube)





export default group;