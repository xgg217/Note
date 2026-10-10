# RefreshControl

## 概述

+ 该组件在 `ScrollView` 或 `ListView` 中用于添加拉动刷新功能
+ 当 `ScrollView` 在 `scrollY: 0` 时，向下滑动会触发 `onRefresh` 事件

+ 官方 API 文档地址：https://reactnative.dev/docs/refreshcontrol

  ```js
  import React from 'react';
  import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const App = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <Text>Pull down to see RefreshControl indicator</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default App;
  ```
