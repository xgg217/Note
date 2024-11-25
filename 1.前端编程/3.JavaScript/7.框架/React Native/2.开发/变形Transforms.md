# Transforms

## 概述

+ Transforms 类似于 CSS 中的变形。可以帮助我们使用 2D 或者 3D 变换来修改组件的外观和位置。

+ 但是需要注意的是，一旦应用了变换，变换后的组件周围的布局将保持不变，因此它可能会与附近的组件重叠

  ```js
  import React from "react";
  import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

  const App = () => (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
      >
        <View style={styles.box}>
          <Text style={styles.text}>Original Object</Text>
        </View>

        <View style={[styles.box, {
          transform: [{ scale: 2 }]
        }]}>
          <Text style={styles.text}>Scale by 2</Text>
        </View>

        <View style={[styles.box, {
          transform: [{ scaleX: 2 }]
        }]}>
          <Text style={styles.text}>ScaleX by 2</Text>
        </View>

        <View style={[styles.box, {
          transform: [{ scaleY: 2 }]
        }]}>
          <Text style={styles.text}>ScaleY by 2</Text>
        </View>

        <View style={[styles.box, {
          transform: [{ rotate: "45deg" }]
        }]}>
          <Text style={styles.text}>Rotate by 45 deg</Text>
        </View>

        <View style={[styles.box, {
          transform: [
            { rotateX: "45deg" },
            { rotateZ: "45deg" }
          ]
        }]}>
          <Text style={styles.text}>Rotate X&Z by 45 deg</Text>
        </View>

        <View style={[styles.box, {
          transform: [
            { rotateY: "45deg" },
            { rotateZ: "45deg" }
          ]
        }]}>
          <Text style={styles.text}>Rotate Y&Z by 45 deg</Text>
        </View>

        <View style={[styles.box, {
          transform: [{ skewX: "45deg" }]
        }]}>
          <Text style={styles.text}>SkewX by 45 deg</Text>
        </View>

        <View style={[styles.box, {
          transform: [{ skewY: "45deg" }]
        }]}>
          <Text style={styles.text}>SkewY by 45 deg</Text>
        </View>

        <View style={[styles.box, {
          transform: [
            { skewX: "30deg" },
            { skewY: "30deg" }
          ]
        }]}>
          <Text style={styles.text}>Skew X&Y by 30 deg</Text>
        </View>

        <View style={[styles.box, {
          transform: [{ translateX: -50 }]
        }]}>
          <Text style={styles.text}>TranslateX by -50 </Text>
        </View>

        <View style={[styles.box, {
          transform: [{ translateY: 50 }]
        }]}>
          <Text style={styles.text}>TranslateY by 50 </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    scrollContentContainer: {
      alignItems: "center",
      paddingBottom: 60
    },
    box: {
      height: 100,
      width: 100,
      borderRadius: 5,
      marginVertical: 40,
      backgroundColor: "#61dafb",
      alignItems: "center",
      justifyContent: "center"
    },
    text: {
      fontSize: 14,
      fontWeight: "bold",
      margin: 8,
      color: "#000",
      textAlign: "center"
    }
  });

  export default App;
  ```
