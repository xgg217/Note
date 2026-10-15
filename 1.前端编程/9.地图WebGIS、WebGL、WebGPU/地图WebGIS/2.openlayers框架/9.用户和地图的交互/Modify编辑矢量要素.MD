# Modify 修改已绘制图形

## 概述

+ OpenLayers 的 Modify 交互用来直接编辑地图上已有的矢量要素
+ 核心就是‌拖拽顶点改形状‌，按住 ‌Alt + 点击‌可以删除顶点

  ![alt text](<images/Modify 修改已绘制图形.gif>)

## API

+ `new Modify(options)`

+ 参数

  + condition：设置一个函数，在修改时监听点击事件，返回一个布尔值表示是否处理该点击事件。比如返回false时，选中点后，点击选中的点再移动鼠标时将不处理移动事件

  + source / features‌：指定可编辑的数据源，‌二选一必须传一个‌

    + source 传矢量数据源
    + features 传要素集合（比如配合 Select 交互的选中结果）

  + ‌deleteCondition‌：删除顶点的条件，默认是 altKeyOnly + singleClick（即 Alt + 单击）

  + ‌insertVertexCondition‌：是否允许在边线上插入新顶点，默认允许

  + ‌style‌：编辑时顶点或边的样式，不配置会用默认蓝色样式

  + ‌pixelTolerance‌：鼠标离顶点或边线多近算命中，默认 10

  ```js
  import { Modify } from 'ol/interaction'

  // 对矢量图层添加修改交互，alt + click 可以删除顶点
  map.addInteraction(
    new Modify({
      source: vectorSource,
    })
  )
  ```

## 方法

+ removePoint：删除当前正在编辑的点

## 事件

+ modifyend 编辑接触时触发
+ modifystart 编辑开始时触发

  ```js
  modify.on('modifystart', (event) => {
    // 编辑开始，event.features 是被编辑的要素集合
  });

  modify.on('modifyend', (event) => {

    // 编辑结束，此时几何已经变了
    event.features.forEach((feature) => {
      const newGeometry = feature.getGeometry().clone();
      // 在这里同步你的业务数据
    });
  });
  ```

## 实用小技巧

+ ‌限制只编辑某类要素‌：用 filter 选项过滤

  ```js
  filter: (feature) => feature.get('type') === 'polygon'
  ```

+ ‌点要素命中优化‌：点太小不好点，可以设置 hitDetection: true 或传一个图层，让点按实际渲染外观来命中
‌
+ Trace 追踪功能‌：Modify 还支持 trace 和 traceSource，可以沿着其他几何的边来绘制，适合做地块边界对齐之类的场景

+ ‌拖拽矩形保持形状‌：Modify 默认拖多边形顶点会改变整体形状，如果想拖拽时保持矩形，需要监听 modifystart 记录对角点，再在 modifyend 里重算矩形几何
