# 样式

## 概述

+ 在 RN 中，所有组件都接受名为 `style` 的属性，属性值为一个对象，用来书写 CSS 样式

+ StyleSheet 是一种类似于 CSS StyleSheets 的抽象

## 注意点

+ 并不是所有的 CSS 属性在 StyleSheet 中都支持

+ 书写样式时要使用驼峰命名法，例如将 `background-color` 改为 `backgroundColor`

+ 还有就是在 RN 中无法使用缩写样式，例如` border:1px solid` 这样的样式是无法使用的，只能分成两条样式来写 `borderWidth:1` ,`borderStyle:'solid'`

## StyleSheet.create

+ 在 RN 中提供了一个 `StyleSheet.create` 方法来集中定义组件的样式

  ```js
  import { StyleSheet, Text, View } from "react-native";

  export default function App() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red", textDecorationLine: "underline" }}>
          内嵌样式
        </Text>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
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
    bigBlue: {
      color: "blue",
      fontWeight: "bold",
      fontSize: 30,
    },
    red: {
      color: "red",
    },
  });
  ```

## 复用 StyleSheet.create

+ 如果要复用 `StyleSheet.create` 中所定义的样式，可以传入一个数组，但是要注意在数组中位置居后的样式对象比居前的优先级更高，这样你可以间接实现样式的继承

  ```html
  <Text style={[styles.bigBlue, styles.red]}>bigBlue,then red</Text>
  <Text style={[styles.red, styles.bigBlue]}>red,then bigBlue</Text>
  ```
