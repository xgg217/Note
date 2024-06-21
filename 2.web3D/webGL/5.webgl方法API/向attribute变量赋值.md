# 向 attribute 变量赋值

## API

+ gl.vertexAttrib3f(location, v0, v1, v2) 将数据 (v0, v1, v2) 传给由 location 参数指定的 attribute 变量

  + 参数

    + location 指定将要修改的 attribute 变量的存储位置
    + v0 指定填充 attribute 变量第一个分量的值
    + v1 指定填充 attribute 变量第二个分量的值
    + v2 指定填充 attribute 变量第三个分量的值

  + 没有返回值

+ 错误

  + `INVALLD_OPERATION` 没有当前的 program 对象
  + `INVALLD_VALUE` 大于等于 `attribute` 变量名的最大长度(默认8)
