# Animated

## 概述

+ Animated 是 RN 提供的另一种动画方式，相较于 LayoutAnimation，它更为精细，可以只作为单个组件的单个属性，也可以更加手势的响应来设定动画（例如通过手势放大图片等行为），甚至可以将多个动画变化组合到一起，并可以根据条件中断或者修改

## Animated.timing

+ 在事件处理函数中，使用 Animated.timing 方法并设置动画参数，最后调用 start 方法启动动画

+ timing 对应的参数属性如下：

  + duration: 动画的持续时间，默认为 500
  + easing: 缓动动画，默认为 Easing.inOut
  + delay: 开始动画前的延迟时间，默认为 0
  + isInteraction: 指定本动画是否在 InteractionManager 的队列中注册以影响任务调度，默认值为 true
  + useNativeDriver: 是否启用原生动画驱动，默认为 false

## Animated.spring

## Animated.decay

## 示例

+ 入门示例:淡入淡出的效果

  ```js
  import React, { useState } from "react";
  import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

  const App = () => {
    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const [fadeInValue, setFadeInValue] = useState(new Animated.Value(0));

    const fadeIn = () => {
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(fadeInValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    };

    const fadeOut = () => {
      // Will change fadeAnim value to 0 in 3 seconds
      Animated.timing(fadeInValue, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    };

    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              // Bind opacity to animated value
              opacity: fadeInValue,
            },
          ]}
        >
          <Text style={styles.fadingText}>Fading View!</Text>
        </Animated.View>
        <View style={styles.buttonRow}>
          <Button title="Fade In View" onPress={fadeIn} />
          <Button title="Fade Out View" onPress={fadeOut} />
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    fadingContainer: {
      padding: 20,
      backgroundColor: "powderblue",
    },
    fadingText: {
      fontSize: 28,
    },
    buttonRow: {
      flexBasis: 100,
      justifyContent: "space-evenly",
      marginVertical: 16,
    },
  });

  export default App;
  ```
