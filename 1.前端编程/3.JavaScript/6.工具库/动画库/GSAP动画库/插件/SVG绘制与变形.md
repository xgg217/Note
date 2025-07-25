# SVG绘制与变形

## 概述

+ 基本使用

  ```html
  <div>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="520px" height="190px">
      <path id="template" d="M9.13,99.99c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37" />
      <path id="path" d="M9.13,99.99c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37" />
    </svg>
  </div>
  <script>
  import { gsap } from 'gsap'
  import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

  gsap.registerPlugin(DrawSVGPlugin)

  gsap.to("#path", {
    drawSVG: "40% 70%",
    duration: 2,
    repeat: -1,
    yoyo: true
  })
  </script>
  ```

  ```html
  <div>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="500px">
      <path id="circle" d="M490.1 250.649c0 44.459-36.041 80.5-80.5 80.5s-80.5-36.041-80.5-80.5 36.041-80.5 80.5-80.5 80.5 36.041 80.5 80.5z" />
      <path id="hippo" d="M149 245c2.7-36.7 16.11-69.08 40.1-97.06 27.04-31.6 60.92-47.39 101.63-47.39 15.48 0 38.48 2.45 69.02 7.29 30.54 4.89 53.53 7.28 69.03 7.28 23.69 0 57.87 8.85 102.53 26.48 7.91 3.01 17.47 11.24 28.7 24.59 6.38 7.89 16.26 19.77 29.62 35.57 3.04 2.14 7 5.32 11.86 9.6 4.86 4.22 8.19 6.06 10 5.46.62-1.84 2.15-4.4 4.58-7.74 1.21-1.23 1.96-1.83 2.26-1.83.93.61 1.83 1.21 2.75 1.83.91.62 1.21 2.42.91 5.46-.62 5.47-.91 7.14-.91 5-.33 3.06-.76 5.01-1.37 5.95-3.95 6.67-5.48 11.85-4.55 15.47.92 3.32 3.77 8.67 8.64 15.96 4.87 7.29 7.59 12.76 8.19 16.4-.3 2.73-.43 7.12-.43 13.21l-4.57 11.38c0 8.51 9.86 23.11 29.62 43.78 9.44 4.22 14.12 18.83 14.12 43.71 0 19.47-16.09 29.17-48.27 29.17-4.26 0-8.81-.13-13.68-.47-3.34-1.2-8.2-2.56-14.58-4.07-7.59-.93-12.76-3.49-15.48-7.77-4.88-6.95-12.78-13.51-23.71-19.58-1.82-.88-4.48-4.22-7.98-10.02-3.5-5.77-6.61-9.42-9.33-10.95-2.72-1.49-6.68-1.81-11.86-.88-8.81 1.49-13.68 2.26-14.57 2.26-2.14 0-5.25-.6-9.34-1.83-4.11-1.21-7.05-1.83-8.89-1.83-2.11 9.73-2.59 19.15-1.36 28.25.3 2.45 1.83 4.43 4.56 5.92 4.27 3.05 6.53 4.71 6.85 5.05 2.72 2.11 5.61 5.61 8.64 10.45.62 1.85-.52 4.95-3.42 9.34-2.89 4.41-5.22 7.01-7.06 7.74-1.81.79-5.77 1.18-11.85 1.18-8.82 0-29.45-2.45-30.98-2.73-7.59-1.53-14.13-3.94-19.58-7.3-2.76-1.81-5.91-10.33-9.56-25.52-3.68-16.41-6.72-26.27-9.14-29.64-.6-.9-1.36-1.33-2.26-1.33-1.53 0-4.05 1.49-7.53 4.56-3.49 2.99-5.86 4.65-7.05 5.01-4.24 17.9-6.4 26.4-6.4 25.47 0 7.01 1.97 12.89 5.92 17.77 3.94 4.86 8.06 9.57 12.32 14.11 5.16 5.77 7.74 10.78 7.74 15.04 0 2.41-.75 4.52-2.28 6.37-6.38 7.89-17.02 11.85-31.9 11.85-16.71 0-27.64-2.28-32.79-6.84-6.7-5.77-10.95-11.86-12.76-18.2-.3-1.53-1.05-6.09-2.28-13.68-.61-4.58-1.98-7.29-4.08-8.18-6.1-.92-13.69-2.58-22.78-5.01-1.84-1.21-3.81-4.26-5.94-9.12-3.93-9.4-6.83-15.79-8.66-19.13-9.13-4.56-23.7-9.7-43.76-15.45-.92 1.83-1.35 4.37-1.35 7.72 3.34 4.26 8.34 10.8 15.03 19.58 5.47 7.29 8.2 14.3 8.2 20.96 0 12.78-8.2 19.13-24.61 19.13-12.45 0-20.96-.88-25.52-2.71-6.67-2.73-12.29-9.14-16.85-19.13-7.6-16.74-11.85-26.16-12.76-28.27-4.87-11.23-8.2-21.13-10.01-29.65-1.23-6.05-3.06-15.35-5.49-27.8-2.12-10.3-5.46-18.36-10.01-24.13C155.33 279.36 147.5 260.6 149 245z" />
      </svg>
  </div>
  <script>
  import { gsap } from 'gsap'
  import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

  gsap.registerPlugin(MorphSVGPlugin)

  gsap.to("#circle", {
    duration: 1,
    morphSVG: "#hippo",
    repeat: 1,
    yoyo: true,
    repeatDelay: 0.2
  })
  </script>
  ```
