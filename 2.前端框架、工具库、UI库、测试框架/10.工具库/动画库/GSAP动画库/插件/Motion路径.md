# Motion路径

## 概述

+ 基本使用

  ```js
  import { gsap } from 'gsap'
  import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
  import { MotionPathHelper } from 'gsap/MotionPathHelper'

  gsap.registerPlugin(MotionPathPlugin, MotionPathHelper)

  gsap.to('.box', {
    duration: 4,
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: 300, y: 300 },
        { x: 500, y: 0 },
      ],
      curviness: 2,   // 弯曲程度
      autoRotate: true,
    }
  })

  MotionPathHelper.create('.box')
  ```
