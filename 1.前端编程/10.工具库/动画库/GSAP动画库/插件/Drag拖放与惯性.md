# Drag拖放与惯性

## 概述

+ 基本使用

  ```js
  import { gsap } from 'gsap'
  import { Draggable } from 'gsap/Draggable'
  import { InertiaPlugin } from 'gsap/InertiaPlugin'

  gsap.registerPlugin(Draggable, InertiaPlugin)

  Draggable.create(".red", {
    type: "x",
  })

  Draggable.create(".green", {
    type: 'y'
  })

  Draggable.create(".blue", {
    type: 'rotation',
    inertia: true,   // 启动惯性
    snap: function (value) {
      return Math.round(value / 90) * 90;
    },
  })
  ```
