# getObjectByName

## 概述

+ Threejs和前端DOM一样，可以通过一个方法查找树结构父元素的某个后代对象
+ 对于普通前端而言可以通过name或id等方式查找一个或多个DOM元素，
+ Threejs同样可以通过一些方法查找一个模型树中的某个节点
+ 更多的查找方法和方法的使用细节可以查看基类Object3D

## 语法

+ `.getObjectByName ( name : String ) : Object3D`

  + 参数

    + name —— 用于来匹配子物体中Object3D.name属性的字符串

  + 返回值：从该对象开始，搜索一个对象及其子级，返回第一个带有匹配name的子对象

+ 请注意，大多数的对象中name默认是一个空字符串，要使用这个方法，你将需要手动地设置 `name` 属性

  ```js
  // 返回名.name为"4号楼"对应的对象
  const nameNode = scene.getObjectByName ("4号楼");
  nameNode.material.color.set(0xff0000);
  ```

## 示例

+ 在 gltf 中查找

  ```js
  loader.load("./士兵.glb", function (gltf) {

    group.add(gltf.scene);
    console.log(gltf.scene);

    // 根据骨骼关节名字获取骨关节Bone
    // 在三维软件中，骨骼关节层层展开，可以看到下面三个骨骼关节
    const bone1 = gltf.scene.getObjectByName('mixamorigRightArm'); //关节1
  })
  ```
