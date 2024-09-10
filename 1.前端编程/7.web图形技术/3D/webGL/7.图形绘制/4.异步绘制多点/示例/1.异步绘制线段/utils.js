// @ts-check

/**
 * 创建着色器
 * @param {WebGLRenderingContext} gl webgl
 * @param {string} vsSource 顶点着色器
 * @param {string} fsSource 片元着色器
 * @returns {boolean}
 */
export function initShaders (gl, vsSource, fsSource) {
  //创建程序对象
  const program = gl.createProgram();
  //建立着色对象
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  //把顶点着色对象装进程序对象中
  gl.attachShader(program, vertexShader);

  //把片元着色对象装进程序对象中
  gl.attachShader(program, fragmentShader);

  //连接webgl上下文对象和程序对象
  gl.linkProgram(program);

  //启动程序对象
  gl.useProgram(program);

  //将程序对象挂到上下文对象上
  gl.program = program;
  return true;
}

/**
 * 创建
 * @param {WebGLRenderingContext} gl webgl
 * @param {number} type 着色器类型
 * @param {string} source 着色器程序
 * @returns {WebGLShader} 着色器
 */
function loadShader (gl, type, source) {
  //根据着色类型，建立着色器对象
  const shader = gl.createShader(type);
  //将着色器源文件传入着色器对象中
  gl.shaderSource(shader, source);
  //编译着色器对象
  gl.compileShader(shader);
  //返回着色器对象
  return shader;
}

/**
 * 获取随机整数（不含最大值，含最小值）
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number}
 */
export function getRandomInt (min, max) {
  const minVal = Math.ceil(min);
  const maxVal = Math.floor(max);
  return Math.floor(Math.random() * (maxVal - minVal)) + minVal; //不含最大值，含最小值
}

/** @typedef {import('./types').IPoly} IPolyItem */

/**
 * 封装多边形对象
 */
export class Poly {
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
