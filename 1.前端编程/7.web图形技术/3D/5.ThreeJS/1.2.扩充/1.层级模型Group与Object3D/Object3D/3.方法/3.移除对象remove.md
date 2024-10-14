# 移除对象.remove()

## 概述

+ `.remove()` 方法和 `.add()` 方法是相反的
+ 是把子对象从父对象的 `.children()` 属性中删除

## 查看父类Object3D的移除方法.remove()

+ 场景对象 `Scene` 、组对象 `Group` 、网格模型对象 `Mesh` 的 `.remove()` 方法都是继承自它们共同的基类(父类) `Object3D`

  ```js
  scene.remove(ambient);//移除场景中环境光
  scene.remove(model);//移除场景中模型对象
  ```

## .remove ( object : Object3D, ... ) : this

+ 从当前对象的子级中移除对象。可以移除任意数量的对象

  ```js
  // 删除一个对象
  group.remove(mesh1);

  // 删除多个对象
  group.remove(mesh1，mesh2);
  ```

+ 通过 `.remove()` 方法删除父对象的子对象之后，可以通过浏览器控制台查看 `.children()` 属性的变化

  ```js
  console.log('查看group的子对象',group.children);
  ```
