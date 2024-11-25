# Keyboard

## 概述

+ Keyboard 模块用来控制键盘相关的事件

+ 利用 Keyboard 模块，可以监听原生键盘事件以做出相应回应，比如收回键盘

  ```js
  import React, { useState, useEffect } from "react";
  import { Keyboard, Text, TextInput, StyleSheet, View } from "react-native";

  const Example = () => {
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);

    useEffect(() => {
      const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardStatus("Keyboard Shown");
      });
      const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardStatus("Keyboard Hidden");
      });

      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, []);

    return (
      <View style={style.container}>
        <TextInput
          style={style.input}
          placeholder='Click here…'
          onSubmitEditing={Keyboard.dismiss}
        />
        <Text style={style.status}>{keyboardStatus}</Text>
      </View>
    );
  }

  const style = StyleSheet.create({
    container: {
      flex: 1,
      padding: 36
    },
    input: {
      padding: 10,
      borderWidth: 0.5,
      borderRadius: 4
    },
    status: {
      padding: 10,
      textAlign: "center"
    }
  });

  export default Example;
  ```
