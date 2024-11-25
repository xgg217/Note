# LayoutAnimation

## 概述

+ LayoutAnimation 是 RN 提供的一套全局布局动画 API，只需要配置好动画的相关属性（例如大小、位置、透明度），然后调用组件的状态更新方法引起重绘，这些布局变化就会在下一次渲染时以动画的形式呈现

+ 在 Andriod 设备上使用 LayoutAnimation，需要通过 UIManager 手动启用，并且需要放在任何动画代码之前，比如可以放在入口文件 App.js 中

  ```js
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  ```

  ```js
  const customAnim = {

    // 动画方式一 customSpring
    customSpring: {
      duration: 400,
      create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.6,
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.6,
      },
    },

    // 动画方式二 customLinear
    customLinear: {
      duration: 200,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    },
  };
  ```

## API

+
