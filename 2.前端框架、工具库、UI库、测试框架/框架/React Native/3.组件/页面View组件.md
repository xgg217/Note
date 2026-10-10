# View 组件

## 概述

+ 在 RN 中，View 容器组件支持 Flexbox 布局、样式、触摸事件处理和一些无障碍功能，它可以被放到其他容器组件里面，也可以包含任意多个子组件

+ 无论是 iOS 还是 Andriod，View 组件都会直接对应平台的原生视图，其作用等同于 iOS 的 UIView 或者 Andriod 的 ViewGroup

+ API 文档地址：https://reactnative.dev/docs/view

  ```js
  import React from "react";
  import { View, StyleSheet } from "react-native";

  const App = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          flexWrap: "wrap",
          justifyContent: "space-between",
          borderWidth: 1,
        }}
      >
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
      </View>
    );
  };

  const styles = StyleSheet.create({
    item: {
      width: 50,
      height: 50,
      borderWidth: 1,
      margin: 10,
    },
  });

  export default App;
  ```
