# Flip结构转换

## 概述

+ 基本使用

  ```js
  import { gsap } from 'gsap'
  import { Flip } from 'gsap/Flip'

  gsap.registerPlugin(Flip)

  const state = Flip.getState([red, green])

  red.before(green)

  Flip.from(state, {
    duration: 1,
    repeat: -1,
    yoyo: true,
    scale: true,
    spin: true,
  })
  ```
