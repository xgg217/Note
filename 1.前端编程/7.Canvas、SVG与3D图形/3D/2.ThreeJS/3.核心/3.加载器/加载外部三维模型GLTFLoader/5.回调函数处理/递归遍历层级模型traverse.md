# 递归遍历层级模型修改材质

## 概述

+ 加载一个外部模型，比如gltf模型，如果你想批量修改每个Mesh的材质，一个一个设置比较麻烦，可以通过递归遍历方法 `.traverse()` 批量操作更加方便

## 递归遍历方法 .traverse()

+ 递归遍历gltf所有的模型节点

  ```js
  loader.load( '工厂.glb', function ( gltf ) {
    // 递归遍历所有模型节点批量修改材质
    gltf.scene.traverse(function(obj) {
      if (obj.isMesh) {//判断是否是网格模型
        console.log('模型节点',obj);
        console.log('模型节点名字',obj.name);
      }
    });
  })
  ```

## 查看gltf默认的材质

+ .obj、.gltf、.fbx等不同格式的模型，threejs加载默认的材质可能不同，不过也不用刻意记忆，通过浏览器控制台log打印即可 `console.log(obj.material)`

  ![网络材质](./images/网络材质.jpg)

+ threejs解析gltf模型默认材质一般是 `MeshStandardMaterial` 或 `MeshPhysicalMaterial` ，相比较其它网格材质，这两个材质属于PBR物理材质，可以提供更加真实的材质效果

  ```js
  loader.load( '工厂.glb', function ( gltf ) {
    // 递归遍历所有模型节点批量修改材质
    gltf.scene.traverse(function(obj) {
      if (obj.isMesh) {
        console.log('gltf默认材质',obj.material);
      }
    });
  })
  ```

## 批量修改gltf

+ 批量修改gltf所有Mesh的材质

  ```js
  loader.load( '工厂.glb', function ( gltf ) {
    gltf.scene.traverse(function(obj) {
      if (obj.isMesh) {
        // 重新设置材质
        obj.material = new THREE.MeshLambertMaterial({
          color:0xffffff,
        });
      }
    });
  })
  ```

+ 修改颜色

  ```js
  gltf.scene.traverse(obj => {
    if(obj.isMesh) {
      console.log('mesh', obj);
      if(obj.name === 'Cylinder') {
        obj.material.color = new THREE.Color('white');
      } else if(obj.name === 'Cylinder_1') {
        obj.material.color = new THREE.Color('pink');
      }
    }
  });
  ```
