# 阴影半径 .shadow.radius

## .shadow.radius

+ 如果你在项目中，希望阴影的边缘弱化或者说模糊化,可以通过阴影半径 `.shadow.radius` 属性设置

  ```js
  // 模糊弱化阴影边缘
  console.log('.shadow.radius',directionalLight.shadow.radius);
  ```

+ 适当提升 `.shadow.radius` ,你可以感到阴影边缘与非阴影区域是渐变过渡，或者说阴影边缘逐渐弱化或模糊化，没有很明显的边界感

  ```js
  directionalLight.shadow.radius = 3;
  ```
