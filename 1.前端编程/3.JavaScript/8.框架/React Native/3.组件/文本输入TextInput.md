# 文本输入

## 概述

+ RN 中提供了一个 `TextInput` 组件，该组件是一个允许用户输入文本的基础组件

+ 属性

  + `defaultValue` 默认值
  + `onChangeText` 接受一个函数，而此函数会在文本变化时被调用
  + `onSubmitEditing` 在文本被提交后（用户按下软键盘上的提交键）调用

  ```js
  import React, { useState } from "react";
  import { Text, TextInput, View, StyleSheet } from "react-native";

  export default function App() {
    const [text, setText] = useState("");
    return (
      <View style={styles.container}>
        <TextInput
          style={{ width: 300, height: 40, borderWidth: 1, borderColor: "#000" }}
          placeholder="Type here to translate!"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Text style={{ padding: 10, fontSize: 18 }}>你输入的内容为：</Text>
        <Text>{text}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  ```
