# Touchable 组件

## 概述

+ 在 RN 应用开发中，点击和触摸都是比较常见的交互行为，不过并不是所有的组件都支持点击事件。为了给这些不具备点击响应的组件绑定点击事件，RN 提供了 Touchable 系列组件

+ Touchable 系列组件并不是单指某一个组件，一共有 4 个，其中跨平台的有 3 个

  + TouchableHighlight

    + Touchable 系列组件中比较常用的一个，它是在 TouchableWithoutFeedback 的基础上添加了一些 UI 上的扩展，即当手指按下的时候，该视图的不透明度会降低，同时会看到视图变暗或者变亮，该标签可以添加 style 样式属性。

  + TouchableOpacity

    + 完全和 TouchableHighlight 相同，只是不可以修改颜色，只能修改透明度

  + TouchableWithoutFeedback

    + 最基本的一个 Touchable 组件，只响应用户的点击事件，不会做任何 UI 上的改变，所以不用添加 style 样式属性，加了也没效果

  + TouchableNativeFeedback 的组件（ Android 平台）

    + TouchableNativeFeedback：为了支持 Android 5.0 的触控反馈而新增的组件。该组件在 TouchableWithoutFeedback 所支持的属性的基础上增加了触摸的水波纹效果
    + 可以通过 background 属性来自定义原生触摸操作反馈的背景。（仅限 Android 平台，IOS 平台使用会报错）

  ```js
  import React, { useState } from "react";
  import {
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Text,
  } from "react-native";

  export default function App() {
    const [count, setCount] = useState(0);

    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.touchableStyle}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.txtStyle}>点击加1</Text>
        </TouchableHighlight>

        <TouchableOpacity
          style={styles.touchableStyle}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.txtStyle}>点击加1</Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={() => setCount(count + 1)}>
          <View style={styles.touchableStyle}>
            <Text style={styles.txtStyle}>点击加1</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableNativeFeedback onPress={() => setCount(count + 1)}>
          <View style={styles.touchableStyle}>
            <Text style={styles.txtStyle}>点击加1</Text>
          </View>
        </TouchableNativeFeedback>

        <Text style={[styles.countText]}>{count !== 0 ? count : null}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#F5FCFF",
    },
    touchableStyle: {
      width: 300,
      height: 38,
      borderRadius: 5,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#06C1AE",
      marginTop: 20,
      marginBottom: 20,
    },
    txtStyle: {
      color: "#ffffff",
      textAlign: "center",
      fontSize: 18,
    },
    countText: {
      marginTop: 10,
      alignSelf: "center",
      fontSize: 38,
      color: "#06C1AE",
    },
  });
  ```

