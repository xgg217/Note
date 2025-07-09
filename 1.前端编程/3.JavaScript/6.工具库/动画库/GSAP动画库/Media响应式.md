# Media响应式

## 概述

+ Media响应式

  ```js
  // create
  let mm = gsap.matchMedia();

  // add a media query. When it matches, the associated function will run
  mm.add("(min-width: 800px)", () => {

    // this setup code only runs when viewport is at least 800px wide
    gsap.to(...);
    gsap.from(...);
    ScrollTrigger.create({...});

    return () => { // optional
      // custom cleanup code here (runs when it STOPS matching)
    };
  });

  // later, if we need to revert all the animations/ScrollTriggers...
  mm.revert();
  ```
