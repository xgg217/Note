# Observer监听

## 概述

+ 基本使用

  ```js
  import { gsap } from 'gsap'
  import { Observer } from 'gsap/Observer'

  gsap.registerPlugin(Observer)

  Observer.create({
    target: '.box',
    type: "wheel",
    lockAxis: true,
    onChangeY() {
      console.log('onChangeY')
    },
    onChangeX() {
      console.log('onChangeX')
    },
    onDown () {
      console.log("down")
    },
    onUp() {
      console.log("up")
    }
  })
  ```
