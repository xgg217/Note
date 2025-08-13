# piecewise 分段型视觉映射组件

## 概述

+ 分段型视觉映射组件（visualMapPiecewise）

  ![alt text](images/type之piecewise.png)

## 分段型视觉映射组件模式

+ 分段型视觉映射组件，有三种模式：

+ 连续型数据平均分段: 依据 visualMap-piecewise.splitNumber 来自动平均分割成若干块

  ```js
  visualMap: {
    type: "piecewise",
    // show: true,
    min: 0,
    max: 1000,
    splitNumber: 4
  },
  ```

+ 连续型数据自定义分段: 依据 visualMap-piecewise.pieces 来定义每块范围
+ 离散数据根据类别分段: 类别定义在 visualMap-piecewise.categories 中

## 属性

+ type

  + `piecewise`

+ id
+ splitNumber `number`

  + 对于连续型数据，自动平均切分成几段
  + 默认为5段
  + 连续数据的范围需要 `max` 和 `min` 来指定

+ pieces
+ categories
+ min
+ max
+ minOpen
+ maxOpen
+ selectedMode
+ inverse
+ precision
+ itemWidth
+ itemHeight
+ align
+ text
+ textGap
+ showLabel
+ itemGap
+ itemSymbol
+ show
+ dimension
+ seriesIndex
+ seriesId
+ hoverLink
+ inRange
+ outOfRange

