# selection对象

## 概述

+ d3操作元素时会产生一个selection对象，包含了我们操作的标签元素(多个)

  + 可能是已有的标签元素 （查找）
  + 可能是新创建的标签元素（新建）

## 查找已有的标签元素

+ 方法可以传递选择器，根据选择器找到匹配的元素，并包装成selection
+ 方法可以传递dom对象，包装成selection
+ selection可以使用select 和 selectAll方法继续查找子级标签

  ```js
  const selection = d3.select(..)
  const selection = d3.selectAll(..)
  ```

## 新建标签元素

+ 需要配合insert ， append才能在窗口中展示新标签效果

  ```js
  const selection = d3.create('div');
  ```

## 获得selection中包含标签元素的个数

+ 需要配合insert ， append才能在窗口中展示新标签效果

  ```js
  selection.size(); // 3
  ```

## 遍历每一个标签元素

+ 这里不要使用箭头函数，否则this无法表示标签元素

  ```js
  selection.each(function(d,i){
    //d 是后面要讲到的给元素绑定的数据，目前是undefined (暂时忽略)
    //i 元素下标
    //this 就是当前元素
    console.log(d , i , this);
  })
  ```

## 获得包含的所有标签元素

+ 获得selection中包含的元素对象

  ```js
  const node = selection.node(); // 获得第一个p
  const nodeList = selection.nodes() //[p,p,p]
  ```
