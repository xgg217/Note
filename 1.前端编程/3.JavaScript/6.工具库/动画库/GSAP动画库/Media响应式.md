# Media响应式

## 概述

+ Media响应式

  ```js
  // create
  let mm = gsap.matchMedia();

  // 当大于等于 800px 的时候，才会触发动画
  mm.add("(min-width: 800px)", () => {

    // this setup code only runs when viewport is at least 800px wide
    gsap.to(...);
    gsap.from(...);
    ScrollTrigger.create({...});

    return () => { // optional
      // custom cleanup code here (runs when it STOPS matching)
    };
  }, 作用的范围);

  // later, if we need to revert all the animations/ScrollTriggers...
  mm.revert();
  ```
