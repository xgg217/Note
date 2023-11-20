import {Mesh, Group, SphereGeometry, MeshLambertMaterial,Vector3,BufferGeometry,ArrowHelper,BufferAttribute,LineBasicMaterial,LineLoop} from 'three';

const group = new Group();

(() => {
  function createSphereMesh(color,R) {
    const geometry = new SphereGeometry(R);
    const material = new MeshLambertMaterial({
        color: color,
    });
    const mesh = new Mesh(geometry, material);
    return mesh;
  }

  // 一条线段两点坐标A、B
  const A = new Vector3(0, 0, 10);
  const B = new Vector3(100, 0, 10);

  // 判断p1、p2两点位于线段AB同一侧，还是异侧
  const p1 = new Vector3(20, 0, 40);
  const p2 = new Vector3(80, 0, 40);//与p1同侧

  const AMesh = createSphereMesh(0xffff00,2);
  AMesh.position.copy(A);
  const BMesh = createSphereMesh(0xffff00,2);
  BMesh.position.copy(B);
  const p1Mesh = createSphereMesh(0xff0000,2);
  p1Mesh.position.copy(p1);
  const p2Mesh = createSphereMesh(0xff0000,2);
  p2Mesh.position.copy(p2);
  group.add(AMesh,BMesh,p1Mesh,p2Mesh);

  // Line可视化线段AB
  {
    const geometry = new BufferGeometry();
    const vertices = new Float32Array([
      A.x, A.y, A.z,
      B.x, B.y, B.z,
    ]);
    geometry.attributes.position = new BufferAttribute(vertices, 3);
    const material = new LineBasicMaterial({
      color: 0xffff00,
    });
    const line = new LineLoop(geometry, material);
    group.add(line);
  }


  // 箭头
  {
    const ap = A.clone().sub(p1.clone())
    const Bp = B.clone().sub(p1.clone())
    const dirAP = ap.clone().normalize(); // 单位向量表示AB方向
    const dirBP = Bp.clone().normalize(); // 单位向量表示AB方向
    const arrowHelperA = new ArrowHelper(dirAP, p1, ap.length());
    const arrowHelperB = new ArrowHelper(dirBP, p1, Bp.length());


    // 叉乘
    const c1 = ap.clone().sub(p2)
    const c2 = Bp.clone().sub(p2)
    const arrowHelperC1 = new ArrowHelper(c1.clone().normalize(), p1, c1.length());


    group.add(arrowHelperA, arrowHelperB)

  }

  // 箭头
  {
    const ap = A.clone().sub(p2.clone())
    const Bp = B.clone().sub(p2.clone())
    const dirAP = ap.clone().normalize(); // 单位向量表示AB方向
    const dirBP = Bp.clone().normalize(); // 单位向量表示AB方向
    const arrowHelperA = new ArrowHelper(dirAP, p2, ap.length(),0xff0000);
    const arrowHelperB = new ArrowHelper(dirBP, p2, Bp.length(),0xff0000);
    group.add(arrowHelperA, arrowHelperB)
  }

  // 叉乘
  {

  }



})();



export default group;
