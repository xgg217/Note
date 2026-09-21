# for 循环

## 概述

+ glsl 中的for循环和js类似；

## 语法

+ 语法

  ```
  for(初始化表达式; 条件表达式; 循环表达式){
  ​ 循环体;
  }
  ```

+ for循环的基本规则如下

  + 循环变量只能有一个，只能是 `int` 或 `float` 类型

  + 在循环体中也可以使用 `break` 或 `continue` ，其功能和js一样

  ```js
  // 整形
  float dist=distance(gl_PointCoord,vec2(0.5,0.5));
  for(int i=0;i<4;i++){
      float r1=0.125*float(i);
      float r2=r1+0.125;
      if(dist>=r1&&dist<r2){
          gl_FragColor=m[i]/255.0;
          break;
      }else if(i==3){
          discard;
      }
  }
  ```

  ```js
  // 浮点型
  for(float f=0.0;f<=4.0;f++){
      float r1=0.125*f;
      float r2=r1+0.125;
      if(dist>=r1&&dist<r2){
          gl_FragColor=m[int(f)]/255.0;
          break;
      }else if(f==3.0){
          discard;
      }
  }
  ```
