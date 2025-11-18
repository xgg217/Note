# 全屏

## 概述

+ `Element.requestFullscreen()` 方法用于发出异步请求使元素进入全屏模式

+ 调用此 API 并不能保证元素一定能够进入全屏模式
+ 如果元素被允许进入全屏幕模式，返回的Promise会 resolve，并且该元素会收到一个fullscreenchange事件，通知它已经进入全屏模式
+ 如果全屏请求被拒绝，返回的 promise 会变成 rejected 并且该元素会收到一个fullscreenerror事件
+ 如果该元素已经从原来的文档中分离，那么该文档将会收到这些事件

## 语法

+ API

  ```js
  requestFullscreen()
  requestFullscreen(options)
  ```

+ 参数

  + options

    + navigationUI 可选 控制元素处于全屏模式时是否显示导航 UI。默认值为 "auto"，表示浏览器应该决定要做什么

      + "hide" 浏览器的导航界面将被隐藏，并且整个屏幕尺寸将分配给显示元素

      + "show" 浏览器将显示页面导航控件和可能的其他用户界面；元素的尺寸（以及感知的屏幕尺寸）将被限制以便为该用户界面留出空间。

      + "auto" 浏览器将选择应用上述哪种设置。这是默认值

    + screen 可选 *实验性* 指定要在哪个屏幕上将元素置于全屏模式。这需要代表所选屏幕的 ScreenDetailed 对象作为值

+ 返回值 一个 Promise，当全屏模式完成时，兑现 `undefined`

## 示例

+ `<video>` 元素切换为全屏模式或退出全屏模式

  ```js
  function toggleFullscreen() {
    let elem = document.querySelector("video");

    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err) => {
        alert(`尝试启用全屏模式时出错：${err.message}（${err.name}）`);
      });
    } else {
      document.exitFullscreen();
    }
  }
  ```

+ 使用 navigationUI

  ```js
  let elem = document.documentElement;

  elem
    .requestFullscreen({ navigationUI: "show" })
    .then(() => {})
    .catch((err) => {
      alert(`尝试切换到全屏模式时发生错误：${err.message}（${err.name}）`);
    });
  ```

+ 使用 screen 选项

  ```js
  try {
    const primaryScreen = (await getScreenDetails()).screens.find(
      (screen) => screen.isPrimary,
    );
    await document.body.requestFullscreen({ screen: primaryScreen });
  } catch (err) {
    console.error(err.name, err.message);
  }
  ```
