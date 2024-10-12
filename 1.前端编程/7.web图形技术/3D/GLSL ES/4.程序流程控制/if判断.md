# if 判断

## 概述

+ glsl 中的if 判断和js 里的if 写法是一样的
+ 都有一套if、else if、else 判断

  ```js
  float dist=distance(gl_PointCoord,vec2(0.5,0.5));

  if(dist>=0.0&&dist<0.125){
      gl_FragColor=m[0]/255.0;
  }else if(dist>=0.125&&dist<0.25){
      gl_FragColor=m[1]/255.0;
  }else if(dist>=0.25&&dist<0.375){
      gl_FragColor=m[2]/255.0;
  }else if(dist>=0.375&&dist<0.5){
      gl_FragColor=m[3]/255.0;
  }else{
      discard;
  }
  ```

+ if 语句写太多会降低着色器执行速度，然而glsl 还没有switch 语句，大家需要注意一下
