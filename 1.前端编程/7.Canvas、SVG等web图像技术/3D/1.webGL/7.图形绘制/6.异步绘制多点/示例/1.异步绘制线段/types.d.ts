
// 给 WebGLRenderingContext 扩展一个属性
declare global {
  interface WebGLRenderingContext {
    program: WebGLProgram;
  }
}

// 配置
export type IPoly = {
  gl: WebGLRenderingContext; // webgl上下文对象
  vertices:number[]; // 顶点数据集合
  geoData:any[]; // 模型数据，对象数组，可解析出vertices 顶点数据
  size:number; // 顶点分量的数目
  attrName: string; // 代表顶点位置的attribute 变量名
  count:number; // 顶点数量
  types: string[] //  绘图方式，可以用多种方式绘图
}
