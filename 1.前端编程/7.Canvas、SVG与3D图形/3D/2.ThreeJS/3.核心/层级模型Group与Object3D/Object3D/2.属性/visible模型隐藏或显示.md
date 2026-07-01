# 模型隐藏或显示

## 概述

+ 开发web3d项目，有时候需要临时隐藏一个模型，或者一个模型处于隐藏状态，需要重新恢复显示

## 模型属性.visible

+ 模型对象的父类Object3D封装了一个属性 `.visible` ，通过该属性可以隐藏或显示一个模型

  ```js
  mesh.visible =false; // 隐藏一个网格模型，visible的默认值是true

  group.visible =false; // 隐藏一个包含多个模型的组对象group
  ```

  ```js
  mesh.visible =true;// 使网格模型mesh处于显示状态
  ```

## 材质属性.visible

+ 材质对象的父类Material封装了一个 `.visible` 属性，通过该属性可以控制是否隐藏该材质对应的模型对象

  ```js
  // 隐藏网格模型mesh，visible的默认值是true
  mesh.material.visible =false;
  // 注意如果mesh2和mesh的.material属性指向同一个材质，mesh2也会跟着mesh隐藏
  ```

+ 注意:如果多个模型引用了同一个材质，如果该材质 `.visible` 设置为 `false` ，意味着隐藏绑定该材质的所有模型
