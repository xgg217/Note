# ScrollTrigger滚动

## 概述

+ 基本使用

  ```js
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  gsap.to('.box', {
    x: 500,
    duration: 4,
    scrollTrigger: {
      trigger: '.box',
      start: 'top center',
      toggleActions: 'restart pause resume reset',
      scrub: true,
      scrub: 1,
      pin: true,
      markers: true,
    }
  })
  ```
