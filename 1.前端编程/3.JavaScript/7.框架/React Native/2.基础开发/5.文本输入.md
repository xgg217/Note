# 文本输入

## 概述

+ RN 中提供了一个 `TextInput` 组件，该组件是一个允许用户输入文本的基础组件
+ 它有一个名为 `onChangeText` 的属性，此属性接受一个函数，而此函数会在文本变化时被调用
+ 另外还有一个名为 `onSubmitEditing` 的属性，会在文本被提交后（用户按下软键盘上的提交键）调用

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
