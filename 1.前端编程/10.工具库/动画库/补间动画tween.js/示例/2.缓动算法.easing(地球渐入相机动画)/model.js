import * as THREE from 'three';

const geometry = new THREE.SphereGeometry(100);
const texLoader = new THREE.TextureLoader();
const texture = texLoader.load('./earth.jpg');
const material = new THREE.MeshLambertMaterial({
    map: texture,
});
const mesh = new THREE.Mesh(geometry, material);



export default mesh;