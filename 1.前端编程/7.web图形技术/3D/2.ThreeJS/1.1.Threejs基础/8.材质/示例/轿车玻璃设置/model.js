import {Mesh, Group, PlaneGeometry,MeshLambertMaterial, MeshPhysicalMaterial, CubeTextureLoader} from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import gui from "./gui.js";


const matFolder = gui.addFolder("车外壳");
const group = new Group();
const loader = new GLTFLoader();
const  textureCube = new CubeTextureLoader().setPath("./环境贴图/环境贴图1/").load(["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]);

loader.load("./轿车.glb", function (gltf) {
  // const mesh = gltf.scene.getObjectByName('外壳01');

  // mesh.material = new MeshPhysicalMaterial( {
  //   color: mesh.material.color, // 默认颜色（保留颜色）
  //   metalness: 0.9, // 车外壳金属度
  //   roughness: 0.5, // 车外壳粗糙度
  //   envMap: textureCube, // 环境贴图
  //   envMapIntensity: 2.5, // 环境贴图对Mesh表面影响程度
  //   clearcoat: 1.0,//物体表面清漆层或者说透明涂层的厚度
	//   clearcoatRoughness: 0.1,//透明涂层表面的粗糙度
  // });

  const mesh = gltf.scene.getObjectByName('玻璃01');
  mesh.material = new MeshPhysicalMaterial( {
    metalness: 0.0, // 玻璃非金属
    roughness: 0.0, // 玻璃表面光滑
    envMap:textureCube,// 环境贴图
    envMapIntensity: 1.0, // 环境贴图对Mesh表面影响程度
    transmission: 1.0, //玻璃材质透光率，transmission替代opacity
    ior:1.5,//折射率
  });

  matFolder.add(mesh.material,'metalness',0,1).name("金属度");
  matFolder.add(mesh.material,'roughness',0,1).name("粗糙度");
  matFolder.add(mesh.material,'clearcoat',0,1).name("透明涂层的厚度");
  matFolder.add(mesh.material,'clearcoatRoughness',0,1).name("透明涂层表面的粗糙度");
  matFolder.add(mesh.material,'envMapIntensity',0,10).name("环境贴图对Mesh表面影响程度");
  matFolder.add(mesh.material,'transmission',0,1).name("玻璃材质透光率");
  matFolder.add(mesh.material,'ior',0,3).name("玻璃材质透光率");

  group.add(gltf.scene);
});



export default group;