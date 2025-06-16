# AppState

## 概述

+ 在 RN 开发中，经常会遇到前后台切换的场景。为了监控应用的运行状态，RN 提供了 AppState。通过 AppState 开发者可以很容易地获取应用当前的状态

+ 在 AppState 中，应用的状态被分为：

  + active：应用正在前台运行
  + background：应用正在后台运行。用户可能面对以下几种情况：
    + 在别的应用中
    + 停留在桌面
    + 对 Android 来说还可能处在另一个Activity中（即便是由你的应用拉起的）

  + [iOS] inactive：此状态表示应用正在前后台的切换过程中，或是处在系统的多任务视图，又或是处在来电状态中

+ 要获取当前的状态，你可以使用 AppState.currentState，这个变量会一直保持更新
+ 不过在启动的过程中，currentState 可能为 null，直到 AppState 从原生代码得到通知为止

  ```js
  import React, { useRef, useState, useEffect } from "react";
  import { AppState, StyleSheet, Text, View } from "react-native";

  const AppStateExample = () => {
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);

    useEffect(() => {
      const subscription = AppState.addEventListener("change", nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === "active"
        ) {
          console.log("App has come to the foreground!");
        }

        appState.current = nextAppState;
        setAppStateVisible(appState.current);
        console.log("AppState", appState.current);
      });

      return () => {
        subscription.remove();
      };
    }, []);

    return (
      <View style={styles.container}>
        <Text>Current state is: {appStateVisible}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  export default AppStateExample;
  ```
