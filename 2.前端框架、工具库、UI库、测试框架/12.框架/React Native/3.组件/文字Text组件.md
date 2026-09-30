# Text 组件

## 概述

+ 在 RN 中，Text 是一个用来显示文本内容的组件，也是使用频率极高的组件，它支持文本和样式的嵌套以及触摸事件的处理

+ API 文档地址：https://reactnative.dev/docs/text

  ```js
  import React, { useState } from "react";
  import { View, Text, StyleSheet } from "react-native";

  const TextInANest = () => {
    const [titleText, setTitleText] = useState("Bird's Nest");
    const bodyText = "This is not really a bird nest.";

    const onPressTitle = () => {
      setTitleText("Bird's Nest [pressed]");
    };

    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>
          {/* 除了继承 baseText 样式以外，有自己的样式 */}
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {"\n"}
            {"\n"}
          </Text>
          {/* 继承 baseText 的样式 */}
          <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    baseText: {
      fontSize: 30,
    },
    titleText: {
      fontSize: 20,
      fontWeight: "400",
    },
  });

  export default TextInANest;
  ```

## 布局

+ 从布局上讲，Text 组件没有类似于 CSS 行内元素这样的概念，所以单个 Text 组件也是独占一行（因为它相当于网页中的 p 元素），但它属于 Flex 布局范畴，可以使用 flexDirection 属性设置行内并列的效果

  ```js
  import React from "react";
  import { View, Text } from "react-native";

  const ViewBoxesWithColorAndText = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View>
          <Text style={{ fontSize: 40, borderWidth: 1 }}>1</Text>
          <Text style={{ fontSize: 40, borderWidth: 1 }}>2</Text>
          <Text style={{ fontSize: 40, borderWidth: 1 }}>3</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 40, borderWidth: 1 }}>1</Text>
          <Text style={{ fontSize: 40, borderWidth: 1 }}>2</Text>
          <Text style={{ fontSize: 40, borderWidth: 1 }}>3</Text>
        </View>
      </View>
    );
  };

  export default ViewBoxesWithColorAndText;
  ```

## 嵌套

+ Text 的嵌套主要是为了满足文本某些特定场景的需求。例如在一些信息展示类的场景中，通常需要将同一段落的部分文字的字号，颜色另外设置值，以达到视觉上的区分

+ 以前在 PC 端书写网页时，我们是通过嵌套 span 标签来处理此需求的，而在 RN 中则是使用 Text 的嵌套来实现

  ```js
  import React from "react";
  import { Text, StyleSheet, View } from "react-native";

  const BoldAndBeautiful = () => {
    return (
      <View style={styles.container}>
        <Text>
          <Text style={{fontSize:28,color:'#999'}}>First part</Text>
          <Text>and</Text>
          <Text style={{fontSize:20,color:'red'}}>second part</Text>
        </Text>
        <View>
          <Text>First part and </Text>
          <Text>second part</Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    baseText: {
      fontWeight: "bold",
    },
    innerText: {
      color: "red",
    },
  });

  export default BoldAndBeautiful;
  ```

## Text 嵌套存在的问题

+ 被嵌套组件与位置相关的 style 样式几乎都不生效

  ```js
  import React from "react";
  import { Text, View } from "react-native";

  const BoldAndBeautiful = () => {
    return (
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 28 }}>
          我是一段普通文字
          <Text style={{ paddingLeft: 10, borderWidth: 1 }}>左Padding 10</Text>
          <Text style={{ marginLeft: 10, borderWidth: 1 }}>左Margin 10</Text>
        </Text>
      </View>
    );
  };

  export default BoldAndBeautiful;
  ```

+ 内嵌 Text 的 numberOfLines 属性会失效

  ```js
  import React from "react";
  import { Text, View } from "react-native";

  const BoldAndBeautiful = () => {
    return (
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 28, borderWidth: 1 }}>
          1.{" "}
          <Text numberOfLines={2} ellipsizeMode={"tail"}>
            我是一段普通文字我是一段普通文字我是一段普通文字我是一段普通文字我是一段普通文字
          </Text>
        </Text>
      </View>
    );
  };

  export default BoldAndBeautiful;
  ```

+ 如果使用不同的 Text 组件设置不同的字号，那么对齐的方式仍然是使用 Flex 布局对齐

  ```js
  // 垂直居中
  import React from "react";
  import { Text, View } from "react-native";

  const App = () => {
    return (
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            borderWidth: 1,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20 }}>我是文字</Text>
          <Text style={{ fontSize: 30 }}>我是大一点的文字</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            borderWidth: 1,
            alignItems: "flex-start",
          }}
        >
          <Text style={{ fontSize: 20 }}>我是文字</Text>
          <Text style={{ fontSize: 30 }}>我是大一点的文字</Text>
        </View>
      </View>
    );
  };

  export default App;
  ```

+ 不过需要注意的是，由于字号大小不一，小字号文字的上边距会略小，例如将上例中 alignItems 值修改为 flex-start，但是由于不同的字体大小可以明显的看到上边距是不同的。如果想要不同字体大小的文字边距相同，可以利用 padding 进行微调
