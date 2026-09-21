# isMesh

## 判断是否是网格模型

+ code

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
