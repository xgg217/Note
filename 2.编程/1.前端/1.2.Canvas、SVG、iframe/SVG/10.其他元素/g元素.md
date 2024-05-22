# g元素

## 概述

+ 用来组合多个图形的容器，g元素本身没有任何效果

+ 对一组图形统一设置（属性，动画，引用）

  ```html
  <g id="g2" fill="none" stroke-width="1">
    <circle id="c2" cx="20" cy="20" r="10" stroke="#fac"/>
    <rect id="r2" x="10" y="10" width="20" height="20" stroke="blue" />
    <circle cx="20" cy="20" r="5" fill="red"/>
  </g>

  <use xlink:href="#g2" x="20" y="20" />
  <use xlink:href="#g2" x="40" y="40" />
  ```

  ![alt text](images/g元素.png)
