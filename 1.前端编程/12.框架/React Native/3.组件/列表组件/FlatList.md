# FlatList

## 概述

+ `FlatList` 组件用于显示一个垂直的滚动列表，其中的元素之间结构近似而仅数据不同

+ `FlatList` 更适于长列表数据，且元素个数可以增删
+ 和 `ScrollView` 不同的是， `latList` 并不立即渲染所有元素，而是优先渲染屏幕上可见的元素

## 属性

+ FlatList 组件必须的两个属性是

  + `data` data 是列表的数据源(一般为数组格式)
  + `renderItem` 表示每行的绘制方法（从数据源中逐个解析数据，然后返回一个设定好格式的组件来渲染）
  + `keyExtractor` item 的 key：使用 FlatList 组件实现列表效果时，系统要求给每一行子组件设置一个 `key` ， `key` 是列表项的唯一标识，目的是当某个子视图的数据发生改变时可以快速地重绘改变的子组件

    + 一般，我们使用 FlatList 组件提供的 `keyExtractor` 属性来达到此效果

  + `ListHeaderComponent`
  + `ListFooterComponent`
  + `seperator` 分割线 `FlatList` 组件本身的分割线并不是很明显，如果要实现分割线，主要有两种策略：设置 `borderBottom` 或者 `ItemSeperatorComponent` 属性

    + 如果只是一条简单的分割线，在 Item 组件里面添加 `borderBottom` 相关属性即可

    + 需要注意的是，使用 `borderBottom` 实现分割线时，列表顶部和底部的组件是不需要绘制的

    ```html
    <View style={{borderTopWidth: 0, borderBottomWidth: 1}}>
      ...
    </View>
    ```

  + ItemSeparatorComponent

    + 参阅官方文档：https://reactnative.dev/docs/flatlist

  + ...

+ 官方文档：https://reactnative.dev/docs/flatlist#itemseparatorcomponent

  ```html
  <FlatList
    data={[{key:"a"},{key:"b"}]}
      renderItem={({ item }) => {
        return (
          <Text>{item.key}</Text>
        )
      }}
      keyExtractor={(item) => item.key}
  />
  ```

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

## 下拉刷新

+ 下拉刷新是一个常见的需求，当用户已经处于列表的最顶端，此时继续往下拉动页面的话，就会有一个数据刷新的操作

+ 在 FlatList 中，提供了下拉刷新的功能，我们只需要设置 onRefresh 和 refreshing 这两个属性值即可。

  + onRefresh：下拉刷新操作触发时要进行的动作，对应是一个函数
  + refreshing：是否显示下拉刷新的等待图标，对应一个布尔值

  ```js
  // 渲染电影列表
  function renderList() {
      return (
        <FlatList
          data={movieList}
          renderItem={renderItem}
          keyExtractor={(item) =>
            item.id + new Date().getTime() + Math.floor(Math.random() * 99999 + 1)
          }
          onRefresh={beginHeaderRefresh}
          refreshing={isHeaderRefreshing}
        />
      );
  }

  // 当用户下拉刷新时，触发 onRefresh 所对应的 beginHeaderRefresh 函数，此函数对应的操作如下

  // 下拉刷新
  function beginHeaderRefresh() {
    setIsHeaderRefreshing(true);
    // 模拟刷新了两条数据
    const newMovie = randomRefreshMovies();
    const data = [...movieList];
    data.unshift(newMovie[0], newMovie[1]);
    setTimeout(() => {
      setMovieList(data);
      setIsHeaderRefreshing(false)
    }, 1000);
  }
  ```

## 上拉加载更多

+ 上拉加载也是列表中一个常见的操作，上拉加载其实质就是以前 PC 端的分页效果。因为数据量过多，所以一般我们不会一次性加载所有的数据，此时就会进行一个分页的显示
+ 而在移动端，分页显示变成了上拉加载的形式，当用户到达列表底部时，自动获取下一页的数据，并且拼接到原有数据的后面

+ 这里我们会用到两个属性，分别是：

  + onEndReached：上拉加载操作触发时要进行的动作，对应是一个函数
  + onEndReachedThreshold：表示距离底部多远时触发 onEndReached

  ```js
  // 渲染电影列表
  function renderList() {
      return (
      <FlatList
        data={movieList}
        renderItem={renderItem}
        keyExtractor={(item) =>
          item.id + new Date().getTime() + Math.floor(Math.random() * 99999 + 1)
        }
        onRefresh={beginHeaderRefresh}
        refreshing={isHeaderRefreshing}
        onEndReached={beginFooterRefresh}
        onEndReachedThreshold={0.1} // 这里取值0.1，可以根据实际情况调整，取值尽量小
      />
    );
  }

  // 上拉加载
  function beginFooterRefresh() {
      setIsFooterLoad(true);
      if (currentPage < totalPage) {
        currentPage++;
        const newMovie = queryMovies(currentPage, 10);
        const data = [...movieList];
        data.push(...newMovie);
        setTimeout(() => {
          setMovieList(data);
          setIsFooterLoad(false);
        }, 1000);
      }
  }
  ```

+ 在 onEndReached 对应的 beginFooterRefresh 函数中，我们首先设置 isFooterLoad 值为 true，这样就能显示下拉加载的等待画面，对应的代码如下：

  ```js
  function renderFooterLoad() {
    if (isFooterLoad) {
      return (
        <View style={styles.footerStyle}>
          <ActivityIndicator animating={true} size="small" />
          <Text style={{ color: "#666", paddingLeft: 10 }}>努力加载中</Text>
        </View>
      );
    }
  }

  return (
    <SafeAreaView style={styles.flex}>
      {/* 标题区域 */}
      {renderTitle()}
      {/* 加载条 */}
      {renderLoad()}
      {/* 列表区域 */}
      {renderList()}
      {/* 根据 isFooterLoad 的值决定是否渲染下拉加载的等待画面 */}
      {renderFooterLoad()}
    </SafeAreaView>
  );
  ```

## 示例

+ 示例：定义了一个名为 MovieItemCell 的电影项目组件，用于渲染具体的电影项目，包含电影的标题、上映日期、评分、海报、导演、主演等信息

  ```js
  import React from "react";
  import {
    TouchableHighlight,
    View,
    Image,
    Text,
    StyleSheet,
  } from "react-native";

  export default function MovieItemCell(props) {
    const moveInfo = props.movie.item;
    let hasAverageScore = moveInfo.average != "0";
    return (
      <TouchableHighlight onPress={props.onPress}>
        <View style={styles.container}>
          <Image source={{ uri: moveInfo.movieImg }} style={styles.thumbnail} />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{moveInfo.title}</Text>
            <Text style={styles.year}>{moveInfo.year}</Text>
            {hasAverageScore ? (
              <View style={styles.horizontalView}>
                <Text style={styles.titleTag}>评分：</Text>
                <Text style={styles.score}>{moveInfo.average}</Text>
              </View>
            ) : (
              <View style={styles.horizontalView}>
                <Text style={styles.titleTag}>暂无评分</Text>
              </View>
            )}
            <View style={styles.horizontalView}>
              <Text style={styles.titleTag}>导演：</Text>
              <Text style={styles.name}>{moveInfo.directors}</Text>
            </View>
            <View style={styles.horizontalView}>
              <Text style={styles.titleTag}>主演：</Text>
              <Text style={styles.name}>
                {moveInfo.casts.length > 13
                  ? moveInfo.casts.slice(0, 13) + "..."
                  : moveInfo.casts}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "#F5FCFF",
      padding: 10,
      borderBottomWidth: 1,
      borderColor: "#e0e0e0",
    },
    thumbnail: {
      width: 110,
      height: 150,
      backgroundColor: "#f0f0f0",
    },
    rightContainer: {
      flex: 1,
      paddingLeft: 10,
      paddingTop: 5,
      paddingBottom: 5,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#333333",
      textAlign: "left",
    },
    year: {
      textAlign: "left",
      color: "#777777",
      marginTop: 10,
    },
    horizontalView: {
      flexDirection: "row",
      marginTop: 10,
    },
    titleTag: {
      color: "#666666",
    },
    score: {
      color: "#ff8800",
      fontWeight: "bold",
    },
    name: {
      color: "#333333",
      flex: 1,
    },
  });
  ```

