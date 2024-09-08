// @ts-check

export function initShaders(gl,vsSource,fsSource){
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

function loadShader(gl, type, source) {
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
export function getRandomInt(min, max) {
  const minVal = Math.ceil(min);
  const maxVal = Math.floor(max);
  return Math.floor(Math.random() * (maxVal - minVal)) + minVal; //不含最大值，含最小值
}


/**
 *
 * @typedef {object} IPoly
 * @property {WebGLRenderingContext} gl // webgl上下文对象
 * @property {number[]} vertices 顶点数据集合
 * @property {any[]} geoData 模型数据，对象数组，可解析出vertices 顶点数据
 * @property {number} size 顶点分量的数目
 * @property {string} attrName 代表顶点位置的attribute 变量名
 * @property {number} count 顶点数量
 * @property {string[]} types  绘图方式，可以用多种方式绘图
 */

// 封装多边形对象
/**
 *
 * @returns {IPoly}
 */
const defAttr=()=>{
  return {
    gl:null,
    vertices:[],
    geoData:[],
    size:2,
    attrName:'a_Position',
    count:0,
    types:['POINTS'],
  }
};

/**
 * 封装多边形对象
 */
export class Poly{
  /**
   *
   * @param {IPoly} attr
   */
  constructor(attr){
    Object.assign(this,defAttr(),attr)
    // this.init()
  }
}
