# uniform 变量

## 概述

+ uniform 变量传输的是那些对于所有顶点都相同（或与顶点无关）的数据

## 获取 uniform 变量的存储位置

+ `gl.getUniformLocation(program, name)` 获取指定名称的 `uniform` 变量存储位置

  + 参数

    + `program` 指定包含顶点着色器和片元着色器的着色器程序对象
    + `name` 指定想要获取其存储地址的 `uniform` 变量名称

  + 返回值

    + `non-null` 指定 `uniform` 变量的位置
    + `null` 指定 `uniform` 变量不存在，或者其命名具有 `gl_` 或 `webgl_` 前缀

+ 错误

  + `INVALLD_OPERATION` 程序对象未能成功连接
  + `INVALLD_VALUE` name参数的长度大于 `uniform` 变量名的最大长度(默认256字节)

+ 注意

  + 如果不存在该变量或者该变量名为保留字则返回 `null`

## 向uniform变量赋值

+ gl.uniform4f
