import {Mesh, Group, PlaneGeometry,MeshLambertMaterial, BoxGeometry, CubeTextureLoader} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const group = new Group();

const box = new BoxGeometry( 100, 100, 100 );
const material = new MeshLambertMaterial( { color: 0x00ffff } );
const cube = new Mesh( box, material );

group.add(cube);

export default group;