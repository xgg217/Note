## 类型 inside 内置型

## 概述

+ type: 'inside'
+ id
+ disabled `boolean`

  + 默认 `false`
  + 是否停止组件的功能

+ xAxisIndex `number | Array`

  + 设置 dataZoom-inside 组件控制的 x轴（即xAxis，是直角坐标系中的概念，参见 grid）

  + 不指定时，当 dataZoom-inside.orient 为 'horizontal'时，默认控制和 dataZoom 平行的第一个 xAxis。但是不建议使用默认值，建议显式指定。

  + 如果是 number 表示控制一个轴，如果是 Array 表示控制多个轴

  ![alt text](images/xAxisIndex.png)


  ```js
  option: {
    xAxis: [
      {...}, // 第一个 xAxis
      {...}, // 第二个 xAxis
      {...}, // 第三个 xAxis
      {...}  // 第四个 xAxis
    ],
    dataZoom: [
      { // 第一个 dataZoom 组件
          xAxisIndex: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 xAxis
      },
      { // 第二个 dataZoom 组件
          xAxisIndex: 3      // 表示这个 dataZoom 组件控制 第四个 xAxis
      }
    ]
  }
  ```

+ yAxisIndex
+ radiusAxisIndex
+ angleAxisIndex
+ filterMode 详见下面
+ atart
+ end
+ startValue
+ endValue
+ minSpan
+ maxSpan
+ minValueSpan
+ maxValueSpan
+ orient
+ zoomLock
+ throttle
+ rangeMode
+ zoomOnMouseWheel
+ moveOnMouseMove
+ moveOnMouseWheel
+ preventDefaultMouseMove
+

### 之 filterMode

+ dataZoom 的运行原理是通过 数据过滤 以及在内部设置轴的显示窗口来达到 数据窗口缩放 的效果

+ 数据过滤模式（dataZoom.filterMode）的设置不同，效果也不同。

+ 可选值为：

  + 'filter'：当前数据窗口外的数据，被 过滤掉。即 会 影响其他轴的数据范围。每个数据项，只要有一个维度在数据窗口外，整个数据项就会被过滤掉 **默认值**

  + 'weakFilter'：当前数据窗口外的数据，被 过滤掉。即 会 影响其他轴的数据范围。每个数据项，只有当全部维度都在数据窗口同侧外部，整个数据项才会被过滤掉

  + 'empty'：当前数据窗口外的数据，被 设置为空。即 不会 影响其他轴的数据范围

  + 'none': 不过滤数据，只改变数轴范围

+ 如何设置，由用户根据场景和需求自己决定。经验来说：

  + 当『只有 X 轴 或 只有 Y 轴受 dataZoom 组件控制』时，常使用 `filterMode: 'filter'` ，这样能使另一个轴自适应过滤后的数值范围

  + 当『X 轴 Y 轴分别受 dataZoom 组件控制』时：

    + 如果 X 轴和 Y 轴是『同等地位的、不应互相影响的』，比如在『双数值轴散点图』中，那么两个轴可都设为 `filterMode: 'empty'`

    + 如果 X 轴为主，Y 轴为辅，比如在『柱状图』中，需要『拖动 dataZoomX 改变 X 轴过滤柱子时，Y 轴的范围也自适应剩余柱子的高度』，『拖动 dataZoomY 改变 Y 轴过滤柱子时，X 轴范围不受影响』，那么就 X轴设为 `filterMode: 'filter'` ，Y 轴设为 `filterMode: 'empty'` ，即主轴 'filter'，辅轴 'empty'


    ```js
    option = {
      dataZoom: [
        {
          id: 'dataZoomX',
          type: 'slider',
          xAxisIndex: [0],
          filterMode: 'filter'
        },
        {
          id: 'dataZoomY',
          type: 'slider',
          yAxisIndex: [0],
          filterMode: 'empty'
        }
      ],
      xAxis: {type: 'value'},
      yAxis: {type: 'value'},
      series{
        type: 'bar',
        data: [
          // 第一列对应 X 轴，第二列对应 Y 轴。
          [12, 24, 36],
          [90, 80, 70],
          [3, 9, 27],
          [1, 11, 111]
        ]
      }
    }
    ```


