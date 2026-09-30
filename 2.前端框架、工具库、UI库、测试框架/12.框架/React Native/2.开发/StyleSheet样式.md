# 样式

## 概述

+ 在 RN 中，所有组件都接受名为 `style` 的属性，属性值为一个对象，用来书写 CSS 样式

+ StyleSheet 是一种类似于 CSS StyleSheets 的抽象

## 注意点

+ 并不是所有的 CSS 属性在 StyleSheet 中都支持

+ 书写样式时要使用驼峰命名法，例如将 `background-color` 改为 `backgroundColor`

+ 还有就是在 RN 中无法使用缩写样式，例如` border:1px solid` 这样的样式是无法使用的，只能分成两条样式来写 `borderWidth:1` ,`borderStyle:'solid'`

## 属性

+ hairlineWidth: 自适应不同设备生成一条线

  ```js
  var styles = StyleSheet.create({
    separator: {
      borderBottomColor: '#bbb',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
  ```

+ `adsoluteFill: (position: 'absolute', left: 0, right: 0, top: 0, bottom: 0)` 的缩写形式

  ```js
  const styles = StyleSheet.create({
    wrapper: {
      ...StyleSheet.absoluteFill,
      top: 10,
      backgroundColor: 'transparent',
    },
  });

  // 相当于以下代码的缩写
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
  ```

## 方法

+ create: 根据对象创建样式表
+ flatten: 可以把样式对象的数组整合成一个样式对象，重复的样式属性以后一个为准

  ```js
  var styles = StyleSheet.create({
    listItem: {
      flex: 1,
      fontSize: 16,
      color: 'white',
    },
    selectedListItem: {
      color: 'green',
    },
  });

  console.log(StyleSheet.flatten([styles.listItem, styles.selectedListItem]));
  // returns { flex: 1, fontSize: 16, color: 'green' }
  ```

## 复用

+ 如果要复用 `StyleSheet.create` 中所定义的样式，可以传入一个数组，但是要注意在数组中位置居后的样式对象比居前的优先级更高，这样你可以间接实现样式的继承

  ```html
  <Text style={[styles.bigBlue, styles.red]}>bigBlue,then red</Text>
  <Text style={[styles.red, styles.bigBlue]}>red,then bigBlue</Text>
  ```

  ```js
  import { View, StyleSheet, Text } from 'react-native';

  export default function HomeScreen() {
    return (
      <View
        style={styles.warpp}
      >
        // 颜色会被覆盖，但是其他属性会被继承
        <Text style={[styles.red, styles.blue]}>12</Text>
        <Text style={[styles.red, styles.blue]}>14</Text>

      </View>
    );
  }

  const styles = StyleSheet.create({
    warpp: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    red: {
      color: "red",
      fontWeight: "300",
      fontSize: 50
    },

    blue: {
      color: "blue",
    },
  });
  ```

## 示例

+ 示例

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


