// @ts-check

/** @typedef {import('./types').IPoly} IPolyItem */

/**
 * 封装多边形对象
 */
export default class Poly {
  /**
   *
   * @param {IPolyItem} attr 配置
   */
  constructor(attr) {
    // 配置
    /** @type {IPolyItem} */
    this.op = {
      gl: null,
      vertices: [],
      geoData: [],
      size: 2,
      attrName: 'a_Position',
      count: 0,
      types: ['POINTS'],
      // ...defAttr(),
      ...attr
    };
    this.init();
  }

  /**
   * 初始化方法，建立缓冲对象，并将其绑定到webgl 上下文对象上
   * 然后向其中写入顶点数据
   * 将缓冲对象交给attribute变量，并开启attribute 变量的批处理功能
   * @returns
   */
  init () {

    const { attrName, size, gl } = this.op;

    if (!gl) {
      throw new Error("请传入缓冲区对象")
      return
    }

    // 建立缓冲区
    const vertexBuffer = gl.createBuffer();
    // 绑定缓冲区对象
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    this.updateBuffer();
    // 获取 attribute 变量
    const a_Position = gl.getAttribLocation(gl.program, attrName);
    // 修改 attribute 变量
    gl.vertexAttribPointer(a_Position, size, gl.FLOAT, false, 0, 0);
    // 批处理
    gl.enableVertexAttribArray(a_Position);


  }

  /**
   * 添加顶点
   * @param  {...number} params
   */
  addVertice (...params) {
    this.op.vertices.push(...params);
    this.updateBuffer();
  }

  /**
   * 删除最后一个顶点
   */
  popVertice () {
    const { vertices, size } = this.op;
    const len = vertices.length;
    vertices.splice(len - size, len);
    this.updateCount();
  }
  /**
   * 根据索引位置设置顶点
   * @param {number} ind 索引
   * @param  {...number} params
   */
  setVertice (ind, ...params) {
    const { vertices, size } = this.op;
    const i = ind * size;
    params.forEach((param, paramInd) => {
      vertices[i + paramInd] = param;
    })
  }

  /**
   * 更新缓冲区数据，同时更新顶点数量
   */
  updateBuffer () {
    const { gl, vertices } = this.op;
    this.updateCount();
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  }

  /**
   * 更新顶点数量
   */
  updateCount () {
    const { vertices, size } = this.op;
    this.op.count = vertices.length / size;
  }

  /**
   * 基于geoData 解析出 vetices 数据
   * @param {*} params
   */
  updateVertices (params) {
    const { geoData } = this.op;
    const vertices = [];
    geoData.forEach(data => {
      params.forEach(key => {
        vertices.push(data[key]);
      })
    })
    this.op.vertices = vertices;
  }

  /**
   * 绘图方法
   * @param {string[]} types
   */
  draw (types = this.op.types) {
    // console.log(types);

    const { gl, count } = this.op;

    // console.log(types,count);
    for (let type of types) {
      gl.drawArrays(gl[type], 0, count);
    }
  }
}