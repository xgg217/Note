# Alert 对话框

## 概述

+ Alert 主要用于显示一个带有指定标题和消息的警报对话框
+ Alert.alert 方法接收 3 个参数

  + 参数一 警报对话框的标题
  + 参数二 警报内容
  + 参数三 一个数组，数组的每一项是按钮对象

+ 官方 API 文档：https://reactnative.dev/docs/alert

  ```js
  import React, { useState } from "react";
  import { View, StyleSheet, Button, Alert } from "react-native";

  const App = () => {
    const createTwoButtonAlert = () =>
      Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );

    const createThreeButtonAlert = () =>
      Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          {
            text: "Ask me later",
            onPress: () => console.log("Ask me later pressed")
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );

    return (
      <View style={styles.container}>
        <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
        <Button title={"3-Button Alert"} onPress={createThreeButtonAlert} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center"
    }
  });

  export default App;
  ```
