# PlatformColor

## 概述

+ 每个平台都有系统定义的颜色，尽管可以通过 AppearanceAPI 或 AccessibilityInfo 检测并设置其中的某些样式，但是这样的操作不仅开发成本高昂，而且还局限

+ RN 从 0.63 版本开始提供了一个开箱即用的解决方案来使用这些系统颜色。PlatformColor 是一个新的 API，可以像 RN 中的其它任何颜色一样使用

+ 例如，在 iOS 上，系统提供一种颜色 labelColor，可以在 RN 中这样使用 PlatformColor：

  ```js
  import { Text, PlatformColor } from 'react-native';

  <Text style={{ color: PlatformColor('labelColor') }}>
    This is a label
  </Text>;
  ```

+ 另一方面，Android 提供像 colorButtonNormal 这样的颜色，可以在 RN 中这样使用 PlatformColor：

  ```js
  import { View, Text, PlatformColor } from 'react-native';

  <View
    style={{
      backgroundColor: PlatformColor('?attr/colorButtonNormal')
    }}>
    <Text>This is colored like a button!</Text>
  </View>;
  ```

+ 同时 DynamicColorIOS 是仅限于 iOS 的 API，可以定义在浅色和深色模式下使用的颜色。与 PlatformColor 相似，可以在任何可以使用颜色的地方使用

  ```js
  import { Text, DynamicColorIOS } from 'react-native';

  const customDynamicTextColor = DynamicColorIOS({
    dark: 'lightskyblue',
    light: 'midnightblue'
  });

  <Text style={{ color: customDynamicTextColor }}>
    This color changes automatically based on the system theme!
  </Text>;
  ```

## 示例

+ 示例

  ```js
  import React from 'react';
  import {
    Platform,
    PlatformColor,
    StyleSheet,
    Text,
    View
  } from 'react-native';

  const App = () => (
    <View style={styles.container}>
      <Text style={styles.label}>
        I am a special label color!
      </Text>
    </View>
  );

  const styles = StyleSheet.create({
    label: {
      padding: 16,
      ...Platform.select({
        ios: {
          color: PlatformColor('label'),
          backgroundColor:
            PlatformColor('systemTealColor'),
        },
        android: {
          color: PlatformColor('?android:attr/textColor'),
          backgroundColor:
            PlatformColor('@android:color/holo_blue_bright'),
        },
        default: { color: 'black' }
      })
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  export default App;
  ```

