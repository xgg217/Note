# PixelRatio

## 概述

+ PixelRatio 可以获取到设备的物理像素和 CSS 像素的比例，也就是 DPR

+ 如果 CSS 像素和设备像素 1:1 关系，那么 DPR 值就为 1。如果 1 个 CSS 像素对应 2 个设备像素，那么 DPR 值就为 2

+ 说简单点，就是一个 CSS 像素要用多少个设备像素来显示。如果 DPR 值为 1，表示用一个设备像素就够了，如果 DPR 值为 2，则表示一个 CSS 像素要用 2 个设备像素来表示

+ 以 iPhone4 为例，设备的物理像素为 640，为 CSS 像素为 320，因此 PixelRatio 值为 2

+ 在 RN 中，通过 PixelRatio.get( ) 方法即可获取 DPR 值

  ```js
  import React, { Component } from "react";
  import { View, StyleSheet, Text, PixelRatio } from "react-native";

  const dpr = PixelRatio.get();

  export default class App extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.textStyle}>DPR：{dpr}</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F5FCFF",
    },
    textStyle: {
      fontSize: 28,
    },
  });
  ```

## 屏幕像素密度

+ 常见的屏幕像素密度表如下：

| 设备像素密度 | 设备                                                       |
| ------------ | ---------------------------------------------------------- |
| 1            | iPhone2G/3G/3GS 以及 mdpi Android 设备                     |
| 1.5          | hdpi Android 设备                                          |
| 2            | iPhone4/5s/5/5c/5s/6/7/8 以及 xhdpi Android 设备           |
| 3            | iPhone6Plus/6sPlus/7Plus/X/XS/Max 以及 xxhdpi Android 设备 |
| 3.5          | Nexus6/PixelXL/2XL Android 设备                            |

## 转换

+ 在 RN 中所有尺寸都是没有单位的，例如：width: 100，这是因为 RN 中尺寸只有一个单位 dp，这是一种基于屏幕密度的抽象单位，默认省略。

+ 在 RN 中，我们可以通过 PixelRatio 来将真实像素大小和 dp 单位进行一个转换

  + static getPixelSizeForLayoutSize(layoutSize: number): number：获取一个布局元素的真实像素大小，返回值是一个四舍五入的整型
  + static roundToNearestPixel(px: number): number：将真实像素大小转为 RN 的 dp 单位

  ```js
  import { PixelRatio } from 'react-native';
  const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp);
  const px2dp = px => PixelRatio.roundToNearestPixel(px);

  //按照下面的方式可实现px与dp之间的转换（比如100px*200px的View）
  <View style={{width:px2dp(100),height:px2dp(200),backgroundColor:"red"}}/>
  ```
