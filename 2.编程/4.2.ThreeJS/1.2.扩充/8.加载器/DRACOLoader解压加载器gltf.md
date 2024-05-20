# DRACOLoader

## 概述

+ 通过Draco压缩工具，把gltf模型里面的几何顶点数据进一步压缩

## 加载压缩的gltf文件

+ 压缩之后的gltf文件，threejs渲染的时候，还需要借助别的js库解压缩

+ 文件 `node_modules`，找到目录`three\examples\jsm\libs\draco\gltf`，把里面文件复制到vue的public中，可以创建一个文件夹 `draco` ,复制到这个文件夹里面也行
