// @ts-check

/** @typedef {import('./types').IPoly} IPolyItem */

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
 * 获取 canvas 与 webgl 坐标转换
 * @param {MouseEvent} event 事件对象
 * @param {HTMLCanvasElement} canvasElement
 * @returns {[number, number]} 返回转换后的坐标
 */
export const getMousePosInWebgl = (event, canvasElement) => {
  const { clientX, clientY } = event;
  const { left, top, width, height } = canvasElement.getBoundingClientRect();
  const [cssX, cssY] = [
    clientX - left,
    clientY - top
  ];
  const [halfWidth, halfHeight] = [width / 2, height / 2];
  const [xBaseCenter, yBaseCenter] = [cssX - halfWidth, cssY - halfHeight];
  const yBaseCenterTop = -yBaseCenter;
  const [x, y] = [xBaseCenter / halfWidth, yBaseCenterTop / halfHeight];

  return [x, y]
}



