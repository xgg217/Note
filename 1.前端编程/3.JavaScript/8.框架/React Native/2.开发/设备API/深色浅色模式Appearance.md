# Appearance

## 概述

+ Appearance 模块主要用于获取用户当前的外观偏好
+ 目前的手机系统一般都可以选择浅色模式和深色模式，通过 Appearance 模块，开发者就可以获取此信息

+ Appearance 模块提供了一个 getColorScheme 的静态方法，该方法可以获取当前用户首选的配色方案，对应的值有 3 个：

  + light: 浅色主题
  + dark: 深色主题
  + null: 没有选择外观偏好

  ```js
  import React from "react";
  import {
    StyleSheet,
    Text,
    View,
    Appearance,
  } from "react-native";

  const App = () => {
    return (
      <View style={styles.container}>
        <Text>外观偏好</Text>
        <Text style={styles.value}>{Appearance.getColorScheme()}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    value: {
      fontWeight: "600",
      padding: 4,
      marginBottom: 8,
    },
  });

  export default App;
  ```
