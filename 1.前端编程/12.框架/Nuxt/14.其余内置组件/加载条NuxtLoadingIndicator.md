# NuxtLoadingIndicator

# 概述

+ 这是一个加载条组件
+ 当进行页面切换的时候，会提供一个加载条，支持的 props 有：

  + color：设置颜色，设置为 false 则是关闭颜色显示样式
  + errorColor：当 error 为 true 时加载条的颜色
  + height：设置加载条的高度，默认为 3
  + duration：加载时常，默认为 2000ms
  + throttle：加载条出现和隐藏的时常，默认为 200ms

+ 该组件一般放在和 NuxtPage 组件同级
