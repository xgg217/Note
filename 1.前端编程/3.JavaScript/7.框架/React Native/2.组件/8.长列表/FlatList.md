# FlatList

## 概述

+ FlatList 组件用于显示一个垂直的滚动列表，其中的元素之间结构近似而仅数据不同

+ FlatList 更适于长列表数据，且元素个数可以增删
+ 和 ScrollView 不同的是，FlatList 并不立即渲染所有元素，而是优先渲染屏幕上可见的元素

## 属性

+ FlatList 组件必须的两个属性是

  + data：data 是列表的数据源
  + renderItem：从数据源中逐个解析数据，然后返回一个设定好格式的组件来渲染

  ```js
  // 首先是初始化 FlatList 所需的 data，其中的每一项（行）数据之后都在 renderItem 中被渲染成了 Text 组件，最后构成整个 FlatList

  import React from "react";
  import { FlatList, StyleSheet, Text, View } from "react-native";

  export default function App() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: "Devin" },
            { key: "Dan" },
            { key: "Dominic" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      borderWidth: 1,
      borderColor: "#ccc",
      marginBottom: 10,
    },
  });
  ```
