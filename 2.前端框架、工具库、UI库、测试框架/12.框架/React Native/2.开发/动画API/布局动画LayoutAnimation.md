# LayoutAnimation

## 概述

+  LayoutAnimation 称为布局动画，这种方法使用起来非常便捷，它会在如透明度渐变、缩放这类变化时触发动画效果，动画会在下一次渲染或布局周期运行

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

+ 每一种动画都用对象来描述，包含 4 个可选值：

  + duration：动画的时长
  + create：组件创建时的动画
  + update：组件更新时的动画
  + delete：组件销毁时的动画

+ 以 customSpring 为例，对应的 duration 为 400 毫秒，而 create 和 update 包括 delete 对应的又是一个对象，其类型定义如下

  ```js
  type Anim = {
    duration? : number, // 动画时常
    delay? : number, // 动画延迟
    springDamping? : number, // 弹跳动画阻尼系数
    initialV elocity? : number, // 初始速度
    type? : $Enum<typeof TypesEnum> // 动画类型
    property? : $Enum<typeof PropertiesEnum> // 动画属性
  }
  ```

+ 其中 type 定义在 LayoutAnimation.Types 中，常见的动画类型有：

  + spring：弹跳动画
  + linear：线性动画
  + easeInEaseOut：缓入缓出动画
  + easeIn：缓入动画
  + easeOut：缓出动画

+ 动画属性 property 定义在 LayoutAnimation.Properties 中，支持的动画属性有：

  + opacity：透明度
  + scaleXY：缩放

+ 示例  customSpring 动画

  ```js
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
  ```

## 简易配置

+ 如果不想那么麻烦的进行配置，LayoutAnimation 也提供了一些 linear、spring 的替代方法，这些替代方法会直接使用默认值

  ```js
  function largePress() {
    whichAni ?
    LayoutAnimation.spring() :
    LayoutAnimation.linear();
    setWhichAni(!whichAni);
    setWidth(width + 20);
    setHeight(height + 20);
  }
  ```

## 示例

+ 示例

  ```js
  import React, { useState } from "react";
  import {
    View,
    StyleSheet,
    Text,
    LayoutAnimation,
    TouchableOpacity,
    UIManager,
  } from "react-native";

  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const customAnim = {
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

  const App = () => {
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);
    const [whichAni,setWhichAni] = useState(true);

    function largePress() {
      whichAni ?
      LayoutAnimation.configureNext(customAnim.customSpring) :
      LayoutAnimation.configureNext(customAnim.customLinear);
      setWhichAni(!whichAni);
      setWidth(width + 20);
      setHeight(height + 20);
    }

    return (
      <View style={styles.container}>
        <View style={[styles.content, { width, height }]} />
        <TouchableOpacity style={styles.btnContainer} onPress={largePress}>
          <Text style={styles.textStyle}>点击增大</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F5FCFF",
    },
    content: {
      backgroundColor: "#FF0000",
      marginBottom: 10,
    },
    btnContainer: {
      marginTop: 30,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: "#EE7942",
      height: 38,
      width: 320,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    textStyle: {
      fontSize: 18,
      color: "#ffffff",
    },
  });

  export default App;
  ```
