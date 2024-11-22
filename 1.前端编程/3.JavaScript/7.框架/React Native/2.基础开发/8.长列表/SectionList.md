# SectionList

## 概述

+ 如果要渲染的是一组需要分组的数据，也许还带有分组标签的，那么 SectionList 将是个不错的选择

  ```js
  import React from "react";
  import { SectionList, StyleSheet, Text, View } from "react-native";

  export default function App() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            { title: "D", data: ["Devin", "Dan", "Dominic"] },
            {
              title: "J",
              data: [
                "Jackson",
                "James",
                "Jillian",
                "Jimmy",
                "Joel",
                "John",
                "Julie",
              ],
            },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: "bold",
      backgroundColor: "rgba(247,247,247,1.0)",
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

## 属性

+ SectionList 组件的 4 个属性

  + sections（必填）：用来渲染的数据，类似于 FlatList 中的 data 属性

  + renderItem（必填）：用来渲染每一个 section 中的每一个列表项的默认渲染器。必须返回一个 react 组件

  + renderSectionHeader：在每个 section 的头部渲染。在 IOS 上，这些 headers 是默认粘接在 ScrollView 的顶部的

  + keyExtractor：此函数用于为给定的 item 生成一个不重复的 key

    + Key 的作用是使 react 能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销

    + 若不指定此函数，则默认抽取 item.key 作为 key 值
    + 若 item.key 也不存在，则使用数组下标
    + 注意这只设置了每行（item）的 key，对于每个组（section）仍然需要另外设置 key

