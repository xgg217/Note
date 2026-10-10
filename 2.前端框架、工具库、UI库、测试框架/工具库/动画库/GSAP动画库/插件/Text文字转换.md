# Text文字转换

## 概述

+ 基本使用

  ```js
  import { gsap } from 'gsap'
  import { TextPlugin } from 'gsap/TextPlugin'

  gsap.registerPlugin(TextPlugin)

  gsap.to('.text', {
    duration: 2,
    text: {
      value: 'thank you for waiting',
      delimiter: ' ',
      newClass: 'red',
      oldClass: 'green',
      padSpace: true,
      rtl: true,
    }
  })
  ```

  ```js
  import { gsap } from 'gsap'
  import { SplitText } from 'gsap/SplitText'

  gsap.registerPlugin(SplitText)

  const split = SplitText.create(".text", { type: "words", mask: 'words' })

  gsap.from(split.words, {
    duration: 1,
    y: -50,
    opacity: 0,
    stagger: 0.2,
    onComplete: () => split.revert()
  })
  ```
