# ActivityIndicator

## 概述

+ ActivityIndicator 组件常用于发送请求时所显示的等待圆圈，两个常见的属性 `size` 和 `color` 分别用于设置等待圆圈的尺寸和颜色

+ 官方 API 文档地址：https://reactnative.dev/docs/activityindicator

  ```js
  import React from "react";
  import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

  const App = () => (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });

  export default App;
  ```
