# 获取设备屏幕的宽高 Dimensions

# 概述

+  主要用于获取设备屏幕的宽高，Dimensions 的使用比较简单，只需要使用 get 方法即可获取宽高信息

  ```js
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  ```

+ 尽管尺寸立即可用，但它们可能会发生变化（例如，由于设备旋转、可折叠设备等），因此任何依赖于这些常量的渲染逻辑或样式都应尝试在每次渲染时调用此函数，而不是缓存值（例如，使用内联样式而不是在样式表中设置值）

  ```js
  import React, {Component} from 'react';
  import {View, StyleSheet, Text, Dimensions} from 'react-native';

  const {width} = Dimensions.get('window');
  const {height} = Dimensions.get('window');
  const {scale} = Dimensions.get('window');

  export default class NetInfoPage extends Component {

      render() {
          return (
              <View style={styles.container}>
                  <Text style={styles.textStyle}>屏幕宽：{width}</Text>
                  <Text style={styles.textStyle}>屏幕高：{height}</Text>
                  <Text style={styles.textStyle}>Scale：{scale}</Text>
              </View>
          );
      }
  }

  const styles = StyleSheet.create({
      container: {
          flex:1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F5FCFF'
      },
      btnContainer: {
          marginTop: 100,
          marginLeft: 10,
          marginRight: 10,
          backgroundColor: '#EE7942',
          height: 38,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
      },
      textStyle: {
          fontSize: 28
      }
  });
  ```







