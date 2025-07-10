# Scroll平滑与位置

## 概述

+ 基本使用

  ```js
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { ScrollSmoother } from 'gsap/ScrollSmoother'

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

  const smoother = ScrollSmoother.create({
    smooth: 1,
    effects: true,
  })

  smoother.effects('.box', {
    speed: (i) => (i + 1) / 2
    lag: (i) => (i + 1) / 2
  })

  smoother.scrollTo('.box', true, 'top center')
  ```
