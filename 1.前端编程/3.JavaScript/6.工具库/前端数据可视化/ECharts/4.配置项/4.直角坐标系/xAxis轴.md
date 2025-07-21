# X 轴

## 概述

+ 直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠

## 属性

+ id
+ show 默认 `true`

+ gridIndex  详见下面

+ alignTicks

  + 在多个 x 轴为数值轴的时候，可以开启该配置项自动对齐刻度。只对'value'和'log'类型的轴有效

+ position

  + x 轴的位置
  + 可选：

    + 'top'
    + 'bottom' 默认值

  + 默认 grid 中的第一个 x 轴在 grid 的下方（'bottom'），第二个 x 轴视第一个 x 轴的位置放在另一侧
  + 注：若未将 xAxis.axisLine.onZero 设为 false , 则该项无法生效

+ offset `number` 默认0

  + X 轴相对于默认位置的偏移，在相同的 position 上有多个 X 轴的时候有用
  + 注：若未将 xAxis.axisLine.onZero 设为 false , 则该项无法生效

+ type 详见下面

+ name

  + 坐标轴名称

  ![alt text](images/xAxis之name.png)

+ nameLocation

  + 坐标轴名称显示位置

  + 可选：

    + 'start'
    + 'middle' 或者 'center'
    + 'end' `默认值`

  ![alt text](images/xAxis之nameLocation.png)

+ nameTextStyle
+ nameGap 坐标轴名称与轴线之间的距离

  ![alt text](images/xAxis之nameGap.png)

+ nameRotate 坐标轴名字旋转，角度值
+ nameTruncate
+ inverse
+ boundaryGap
+ min `number | string | Function`

  + 坐标轴刻度最小值
  + 不设置时会自动计算最小值保证坐标轴刻度的均匀分布。

  + 在类目轴中，也可以设置为类目的序数（如类目轴 `data: ['类A', '类B', '类C']` 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）

  + 类型

    + `number`
    + `string` 只有一个固定值 `'dataMin'` 此时取数据在该轴上的最小值作为最小刻度

      ![alt text](images/xAxis之min与max.png)

    + `Function` 可以根据计算得出的数据最大最小值设定坐标轴的最小值。这个函数可返回坐标轴的最小值，也可返回 `null` / `undefined` 来表示“自动计算最小值”（返回 null/undefined 从 v4.8.0 开始支持）

      ```js
      // alue 是一个包含 min 和 max 的对象，分别表示数据的最大最小值
      min: function (value) {
        return value.min - 20;
      }
      ```

+ max

  + 坐标轴刻度最大值

+ scale
+ splitNumber
+ minInterval
+ maxInterval
+ interval
+ logBase
+ startValue
+ silent
+ triggerEvent
+ axisLine
+ axisTick
+ minorTick
+ axisLabel
+ splitLine
+ minorSplitLine
+ splitArea
+ data
+ axisPointer
+ tooltip
+ animation
+ animationThreshold
+ animationDuration
+ animationEasing
+ animationDelay
+ animationDurationUpdate
+ animationEasingUpdate
+ animationDelayUpdate
+ zlevel
+ z

## xAxis 之 gridIndex

+ gridIndex `number` x 轴所在的 grid 的索引，默认位于第一个 grid

  + 在多个坐标系中才用用处
  + 默认值 0

  ```js
  grid: [
    { left: '7%', top: '7%', width: '38%', height: '38%' },
    { right: '7%', top: '7%', width: '38%', height: '38%' },
    { left: '7%', bottom: '7%', width: '38%', height: '38%' },
    { right: '7%', bottom: '7%', width: '38%', height: '38%' }
  ],
  xAxis: [
    { gridIndex: 0, min: 0, max: 20 },
    { gridIndex: 1, min: 0, max: 20 },
    { gridIndex: 2, min: 0, max: 20 },
    { gridIndex: 3, min: 0, max: 20 }
  ],
  ```

  ![alt text](images/xAxis之gridIndex对应关系.png)

## xAxis 之 type

+ 坐标轴类型

+ 默认值 `category`

+ 可选：

  + 'value' 数值轴，适用于连续数据

    ![alt text](images/xAxis之type数值轴.png)

    + 要求 serie的data里面的数据都要是数字，如果是非数字，则不显示

      ```js
      series: [
        {
          name: "1号销量",
          type: "bar", // 图标的类型
          data: [5, 20, 36, 10, 10, 20], // 图标的数据
        }
      ],
      ```

      ![alt text](images/xAxis之type数值轴非数字.png)

  + 'category' 类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据

    ![alt text](images/xAxis之type类目轴.png)

    ```js
    // x 轴 配置
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      type: "category",
    },

    // 系列列表
    series: [
      {
        // name: "1号销量",
        type: "bar", // 图标的类型
        data: [5, 7, 36, 11, 14, 25], // 图标的数据
      },
    ]
    ```

      ![alt text](images/xAxis之type类目轴示例.png)


  + 'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度

    ```js
    // x 轴 配置
    xAxis: {
      // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      type: "time",
    },
    series: [
      {
        type: "bar", // 图标的类型

        // 数据格式
        data: [
          ["1997/10/1", 199],
          ["1997/10/2", 299],
          ["1997/10/3", 399],
          ["1997/10/4", 499],
          ["1997/10/5", 599],
          ["1997/10/6", 699],
        ],
      },
    ],
    ```

  + 'log' 对数轴。适用于对数数据。对数轴下的堆积柱状图或堆积折线图可能带来很大的视觉误差，并且在一定情况下可能存在非预期效果，应避免使用
