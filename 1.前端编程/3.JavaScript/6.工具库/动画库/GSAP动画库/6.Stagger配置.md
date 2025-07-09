# Stagger高级配置

## stagger 交错时间

+ 参数为 数字

  ```js
  // 第一个直接开始
  // 第二个元素要等待第一个元素 0.1秒后开始
  // 第三个元素要等待第二个元素 0.1 秒后开始(也就是 0.1+0.1 秒后开始)
  gsap.to(['.box1', '.box2', '.box3'], {
    x: 100, // any properties (not limited to CSS)
    duration: 1, // seconds
    stagger: 0.1,
    repeat: -1, // 同时针对整体
    yoyo: true // 同时针对整体
  });
  ```

+ 参数为 对象：可以为每个元素单独设置 repeat yoyo

  ```js
  gsap.to(['.box1', '.box2', '.box3'], {
    x: 100, // any properties (not limited to CSS)
    duration: 1, // seconds
    stagger: {
      a
      repeat: -1, // 针对每个元素设置的重复，而不是整体的重复，所以不用等其他动画完成后再进行
      yoyo: true // 针对每个元素设置
    }
  });
  ```

## 高级配置

+ pai

  ```js
  gsap.to('.box', {
    x: 500,
    stagger: {
      amount: 1,
      from: 'center',
      grid: [4, 3],
      axis: 'x'
    }
  })
  ```


