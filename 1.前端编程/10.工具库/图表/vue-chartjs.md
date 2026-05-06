# vue-chartjs

## 概述

+ vue-chartjs 是一个用于在 Vue 项目中创建图表的库，它基于 Chart.js 构建
+ Chart.js 是一个简单而灵活的 JS 图表库，提供了多种类型的图表
+ vue-chartjs 提供了与 Vue 的无缝集成，让在 Vue 应用中创建和管理图表变得更加方便

## vue-chartjs 的特性：

1. 与 Chart.js 集成
2. 响应式图表
3. 可定制性
4. 组件化

## 基本使用

+ 安装

  ```bash
  npm i vue-chartjs chart.js
  ```

+ 安装的版本信息：

  + "chart.js": "^4.4.3"
  + "vue-chartjs": "^5.3.1"

+ 基础示例核心代码：

  ```html
  <template>
    <Bar :data="data" :options="options" />
  </template>

  <script setup>
  import { ref } from 'vue'
  // 接下来需要从 chart.js 里面引入一些组件
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'
  import { Bar } from 'vue-chartjs'

  // 首先需要注册从 chart.js 引入的组件
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  const data = ref({
    // 图表的X轴
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    datasets: [
      {
        label: '月份销售数据',
        backgroundColor: '#f87979', // 数据集的背景颜色
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11] // 数据集的数据(Y轴)
      }
    ]
  })

  const options = ref({
    responsive: true // 响应式，图表会根据容器大小自动调整
  })
  </script>
  ```

+ 核心：

  1. 从 chartjs 里面引入一组组件，进行注册
  2. 从 vue-chartjs 里面导入图表组件，一般需要传入的参数：data、options

## 其他细节

+ vue-chartjs 基于 Chart.js，因此支持 Chart.js 提供的所有图表类型。以下是 Chart.js 提供的图表类型，这些图表类型在 vue-chartjs 中也可以使用：

  + Line Chart（折线图）
  + Bar Chart（柱状图）
  + Radar Chart（雷达图）
  + Doughnut Chart（圆环图）
  + Pie Chart（饼图）
  + Polar Area Chart（极地区域图）
  + Bubble Chart（气泡图）
  + Scatter Chart（散点图）

+ 注册组件是什么意思

  + 注册组件代码：

    ```js
    ChartJS.register(ArcElement, Title, Tooltip, Legend);
    ```

  + 这是因为从 Chart.js 4.x 版本开始采用模块化设计，以减少最终构建的文件大小，并提高性能
  + 每个图表被分为了多个组件，为了让这些组件在图表中生效，需要在使用之前将它们注册到 Chart.js 中


## options有哪些配置项

[vue-chartjs官网](https://vue-chartjs.org/)

[Chart.js官网](https://www.chartjs.org/docs/latest/)

## 使用插件

+ Chart.js 配置项里面其中的一项，是配置插件：

  ```js
  const config = {
    type: 'line',
    data: {},
    options: {},
    plugins: []
  }
  ```

+ vue-chartjs 自然也支持插件机制

+ 使用插件示例：缩放插件（chartjs-plugin-zoom）用于在图表中添加缩放和平移功能
