# ScrollView 组件 动视图

## 概述

+ ScrollView 是一个支持横向或竖向的滚动组件，几乎所有页面都会用到

+ ScrollView 组件类似于 Web 中的 html 或 body 标签，浏览器中的页面之所以能上下滚动，就是因为 html 或 body 标签默认有一个 overflow-y: scroll 的属性，如果你把标签的属性设置为 overflow-y: hidden，页面就不能滚动了。

+ ReactNative 的 ScrollView 组件在 Android 的底层实现用的是 ScrollView 和 HorizontalScrollView，在 iOS 的底层实现用的是 UIScrollView

+ 使用 ScrollView 组件时，必须要有一个确定的高度才能正常工作。如果不知道容器的准确高度，可以将 ScrollView 组件的样式设置为 {flex: 1}，让其自动填充父容器的空余空间。

+ ScrollView 通常包裹在视图的外面，用于控制视图的滚动，并且很多时候我们并不直接给 ScrollView 设置固定高度或宽度，而是给其父组件设置固定高度或宽度

+ API 文档地址：https://reactnative.dev/docs/scrollview

## 滑屏操作

+ ScrollView 是一个通用的可滚动的容器，你可以在其中放入多个组件和视图，而且这些组件并不需要是同类型的
+ ScrollView 不仅可以垂直滚动，还能水平滚动（通过 horizontal 属性来设置）

  ```js
  import React from "react";
  import { Image, ScrollView, Text } from "react-native";

  const logo = {
    uri: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F31%2F92%2F5810d2ed3fda3_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654851583&t=cebc2481560183caea4c8dca86fa88b6",
    width: 64,
    height: 64,
  };

  export default function App() {
    return (
      <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>If you like</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>Scrolling down</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>What's the best</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>Framework around?</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 80 }}>React Native</Text>
      </ScrollView>
    );
  }
  ```
