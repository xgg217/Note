# 基础

## animation 属性

+ `animation-name` 执行动画的 `keyframe` 名

+ `animation-duration` 时长

+ `animation-timing-function` 速率

+ `animation-delay` 执行延迟时间

+ `animation-direction` 是否往返播放

+ `animation-iteration-count`  播放次数

+ `animation-fill-mode` 结束后的处理

+ `animation-play-state` 用来控制元素动画的状态

## 语法

+ 语法

  ```css
  animation: 3s ease-in 1s 2 reverse both paused slidein;

  animation: 3s linear 1s slidein;

  /* 属性用来指定多组动画，每组之间用逗号相隔 */
  animation:
    3s linear slidein,
    3s ease-out 5s slideout;
  ```

## animation-direction

+ 取值

  ```css
  /* 每一轮动画方向都是 0%→100%、0%→100% */
  animation-direction: normal;

  /* 每一轮动画方向都是 100%→0%、100%→0% */
  animation-direction: alternate;

  /* 每一轮动画方向都是 0%→100%、100%→0% */
  animation-direction: reverse;

  /* 每一轮动画方向都是 100%→0%，0%→100% */
  animation-direction: alternate-reverse;
  ```

## animation-iteration-count

+ 取值

  ```css
  /* 具体次数 默认值 1 */
  animation-iteration-count: 1;

  /* 无限循环播放动画. */
  animation-iteration-count: infinite;
  ```

  ```css
  /* 值为关键字 */
  animation-iteration-count: infinite;

  /* 值为数字 */
  animation-iteration-count: 3;
  animation-iteration-count: 2.4;

  /* 指定多个值 */
  animation-iteration-count: 2, 0, infinite;
  ```

## animation-fill-mode 动画结束状态

+ 取值

  ```css
  /* 默认值 在完成最后一帧时，回到初始值 */
  animation-fill-mode: none;

  /* 停留在最后一帧 */
  animation-fill-mode: forwards;

  /* 回到初始值 */
  animation-fill-mode: backwards;

  /*  */
  animation-fill-mode: both;
  ```

  ```css
  /* Single animation */
  animation-fill-mode: none;
  animation-fill-mode: forwards;
  animation-fill-mode: backwards;
  animation-fill-mode: both;

  /* Multiple animations */
  animation-fill-mode: none, backwards;
  animation-fill-mode: both, forwards, none;
  ```

## animation-play-state

+ 取值

  ```css
  /* 播放 */
  animation-play-state: running;

  /* 暂停 */
  animation-play-state: paused;
  ```
