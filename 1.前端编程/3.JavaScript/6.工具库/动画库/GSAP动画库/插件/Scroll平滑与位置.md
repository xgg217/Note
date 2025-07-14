# Scroll平滑与位置

## 概述

+ 基于插件 `ScrollTrigger` 的插件

## 基本使用

+ 基本使用

  ```js
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { ScrollSmoother } from 'gsap/ScrollSmoother'

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

  const smoother = ScrollSmoother.create({
    smooth: 1, // 1s 滑动时间
    effects: true, // 支持一些功能的启动： speed、lag
  })

  // effects: false 不会有效果
  smoother.effects('.box', {
    speed: (i) => (i + 1) / 2 // 速度
    lag: (i) => (i + 1) / 2 // 滞后
  })

  smoother.scrollTo('.box', true, 'top center')
  ```
