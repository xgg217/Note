# UI交互按钮与3D场景交互

## 概述

+ 实际开发的时候，往往会通过前端的HTML、CSS代码创建按钮等交互界面，用来与3D场景交互

+ 如果你是用vue或react开发web3d项目，也可以不用HTML、CSS自己写，可以使用UI组件库

## UI按钮改变Mesh颜色

+ 通过UI按钮与3D场景交互，改变mesh颜色

  ```html
  <div id="red" class="bu">红</div>
  <div id="green" class="bu" style="margin-left: 10px;">绿</div>

  <script>
  document.getElementById('red').addEventListener('click',function(){
    mesh.material.color.set(0xff0000);
  })

  document.getElementById('green').addEventListener('click',function(){
    mesh.material.color.set(0x00ff00);
  })
  </script>
  ```
