# Color(颜色函数)

## 概述

+ sass包含很多操作颜色的函数

  + 例如：lighten() 与 darken()函数可用于调亮或调暗颜色
  + opacify()函数使颜色透明度减少
  + transparent()函数使颜色透明度增加
  + mix()函数可用来混合两种颜色

  ```css
  p {
    height: 30px;
  }

  .p0 {
    background-color: #5c7a29;
  }

  .p1 {
    /*
        让颜色变亮
        lighten($color, $amount)
        $amount 的取值在0% - 100% 之间
    */
    background-color: lighten(#5c7a29, 30%);
  }

  .p2 {
    // 让颜色变暗  通常使用color.scale()代替该方案
    background-color: darken(#5c7a29, 15%);
  }

  .p3 {
    // 降低颜色透明度  通常使用color.scale()代替该方案
    // background-color: opacify(#5c7a29,0.5);
    background-color: opacify(rgba(#5c7a29, 0.1), 0.5);
  }
  ```
