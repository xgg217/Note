# KeyboardAvoidingComponent

## 概述

+ 我们在开发的时候，经常会遇到手机上弹出的键盘常常会挡住当前的视图，所以该组件的功能就是解决这个常见问题的，它可以自动根据手机上键盘的位置，调整自身的 `position` 或底部的 `padding` ，以避免被遮挡

+ 常用属性：

  + behavior 该参数的可选值为：height、position、padding，来定义其自适应的方式

  + contentContainerStyle 如果设定 behavior 值为 position，则会生成一个 View 作为内容容器。此属性用于指定此内容容器的样式

  + keyboardVerticalOffset 视图离屏幕顶部有一定距离时，利用这个属性来补偿修正这段距离（键盘在竖直方向上的偏移量）

  ```js
  import { KeyboardAvoidingView } from 'react-native';

  <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    ... 在这里放置需要根据键盘调整位置的组件 ...
  </KeyboardAvoidingView>
  ```

## 示例

+ 遮挡输入框的示例

  ```js
  import React from "react";
  import { View, TextInput, Image, StyleSheet, Dimensions } from "react-native";
  import logo from "./assets/logo.png";

  const window = Dimensions.get("window");

  const IMAGE_HEIGHT = window.width / 2;

  const App = () => {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
        <TextInput placeholder="Confirm Password" style={styles.input} />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#4c69a5",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      height: 50,
      backgroundColor: "#fff",
      marginHorizontal: 10,
      marginVertical: 5,
      width: window.width - 30,
      paddingLeft: 10,
    },
    logo: {
      height: IMAGE_HEIGHT,
      resizeMode: "contain",
      marginBottom: 20,
      padding: 10,
      marginTop: 20,
    },
    register: {
      marginBottom: 20,
      width: window.width - 100,
      alignItems: "center",
      justifyContent: "center",
      height: 50,
      backgroundColor: "#ffae",
    },
  });

  export default App;
  ```

+ 下来我们需要做的，就是使用 KeyboardAvoidingView 替换 View，然后给它加一个 behavior 的 prop

  ```html
  <!-- 使用 KeyboardAvoidingView 替换了最外层的 View，并设置 behavior 属性的值为 padding，keyboardVerticalOffset 属性也就是用户屏幕顶部和原生视图之间的距离设置为了 -150，从而避免了键盘遮挡输入框 -->
  <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    keyboardVerticalOffset={-150}
  >
    ...
  </KeyboardAvoidingView>
    ```
