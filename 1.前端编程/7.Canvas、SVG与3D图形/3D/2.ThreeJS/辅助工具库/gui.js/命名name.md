# name() 方法

## 概述

+ `.add()` 创建的交互界面，会默认显示所改变属性的名字，为了通过交互界面更好理解你改变的某个对象属性
+ 你可以通过 `.name()` 方法改变gui生成交互界面显示的内容

  ```js
  const gui = new GUI();//创建GUI对象
  gui.add(ambient, 'intensity', 0, 2.0).name('环境光强度');
  gui.add(directionalLight, 'intensity', 0, 2.0).name('平行光强度');
  ```
