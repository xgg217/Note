# attribute 变量

## 概述

+ `attribute` 变量传输的是那些与顶点相关的数据

+ `attribute` 变量是一种 GLSL ES 变量，被用来从外部向顶点着色器内传输数据，只有顶点着色器能使用它

## 使用 attribute 变量步骤

1. 在顶点着色器中，声明 `attribute` 变量
2. 将 `attribute` 变量赋值給 `gl_Position` 变量
3. 向 `attribute` 变量传输数据

## 命名方式

+ 约定：所有的 `attribute` 变量都以 `a_` 前缀开始

  ```js
  // attribute 变量的声明
  attribute vec4 a_Position
  ```

## 获取 attribute 存储位置

+ `gl.getAttribLocation(program, name)` 获取由 `name` 参数指定的 `attribute` 变量的存储地址

  + 参数

    + `program` 指定包含顶点着色器和片元着色器程序对象
    + `name` 指定想要获取其存储地址的 `attribute` 变量名称

  + 返回值

    + 大于等于0： `attribute` 变量的存储地址
    + -1： 指定的 `attribute` 变量不存在，或者其命名具有 `gl_` 或 `webgl_` 前缀

  ```js
  const a_Position = gl.getAttribLocation(program, "a_Position");

  if(a_Position < 0) {
    return;
  }
  ```

+ 错误

  + `INVALLD_OPERATION` 程序对象未能成功连接
  + `INVALLD_VALUE` name参数的长度大于 `attribute` 变量名的最大长度(默认256字节)

+ 注意

  + 如果不存在该变量或者该变量名为保留字 则返回-1

## 向 attribute 变量赋值

+ `.vertexAttrib1f()` 将数据 (v0, v1, v2) 传给由 `location` 参数指定的 `attribute` 变量

  ```js
  void gl.vertexAttrib1f(index, v0);
  void gl.vertexAttrib2f(index, v0, v1);
  void gl.vertexAttrib3f(index, v0, v1, v2);
  void gl.vertexAttrib4f(index, v0, v1, v2, v3);

  void gl.vertexAttrib1fv(index, value);
  void gl.vertexAttrib2fv(index, value);
  void gl.vertexAttrib3fv(index, value);
  void gl.vertexAttrib4fv(index, value);
  ```

  + 参数

    + `location` 指定将要修改的 `attribute` 变量的存储位置
    + v0 指定填充 `attribute` 变量第一个分量的值
    + v1 指定填充 `attribute` 变量第二个分量的值
    + v2 指定填充 `attribute` 变量第三个分量的值

  + 返回值 无

+ 错误

  + `INVALLD_OPERATION` 没有当前的 program 对象
  + `INVALLD_VALUE` 大于等于 `attribute` 变量名的最大长度(默认8)
