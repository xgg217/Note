// @ts-check

/** @typedef {import('./types').IGeoData} IGeoData */

export default class ShapeGeo {
  /**
   * @param {[]} pathData
   */
  constructor(pathData) {
    this.pathData = pathData;
    /** @type {IGeoData[]} */
    this.geoData = [];
    this.triangles = [];
    this.vertices = [];
    this.parsePath();
    this.update();
  }

  update() {
    this.vertices = [];
    this.triangles = [];
    this.findTringle(0);
    this.upadatevertices();
  }

  parsePath() {
    this.geoData = [];
    const {pathData} = this;
    for(let i = 0; i < pathData.length; i+=2) {
      this.geoData.push({x: pathData[i], y: pathData[i+1]});
    }
  }

  // 寻找三角形
  findTringle(i) {
    const {geoData, triangles} = this;
    const len = geoData.length;
    if(len <= 3) {
      triangles.push([...geoData])
    } else {
      const [i0,i1,i2] = [
        i % len,
        (i+1 % len),
        (i+2 % len),
      ];

      /** @type {[IGeoData, IGeoData, IGeoData]} */
      const triangle = [
        geoData[i0],
        geoData[i1],
        geoData[i2]
      ];
      console.log(triangle);


      if(this.cross(triangle) > 0 && !this.includePoint(triangle)) {
        triangles.push(triangle);
        geoData.splice(i1, 1);
      }
      this.findTringle(i1);
    }
  }

  includePoint(triangle) {
    for(let ele of this.geoData) {
      if(!triangle.includes(ele)) {
        if(this.inTriangle(ele, triangle)) {
          return true
        }
      }
    }
    return false
  }

  inTriangle(p0, triangle) {
    let inPoly = true;
    for(let i = 0; i < 3; i++) {
      const j = (i + 1) % 3;
      const[p1, p2] = [triangle[i], triangle[j]];
      if(this.cross([p0, p1, p2]) < 0) {
        inPoly = false;
        break;
      }
    }
    return inPoly;
  }

  /**
   *
   * @param {[IGeoData, IGeoData, IGeoData]} param0
   * @returns {number}
   */
  cross([p0, p1, p2]) {
    const [ax, ay, bx, by] = [
      p1.x - p0.x,
      p1.y - p0.y,
      p2.x - p0.x,
      p2.y - p0.y,
    ]
    return ax * by - bx * ay;
  }

  upadatevertices() {
    const arr = [];
    this.triangles.forEach(item => {
      for(let {x,y} of item) {
        arr.push(x,y)
      }
    })
    this.vertices = arr;
  }
}