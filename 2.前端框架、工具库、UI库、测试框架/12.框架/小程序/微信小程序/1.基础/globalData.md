# globalData

## 定义

+ globalData 在 app.js 文件中的 app() 全局应用实例中

  ```js
  // app.js
  App({
    globalData: {
      name: '小刚刚',
      age: 18
    }
  })
  ```

## 在 app.js 中使用

+ 获取数据：直接使用 `this`

  ```js
  App({
    globalData: {
      name: '小刚刚',
      age: 18
    },
    onLoad() {
      console.log(this.globalData.name)
    }
  })
  ```

+ 修改数据

  ```js
  App({
    globalData: {
      name: '小刚刚',
      age: 18
    },
    onLoad() {
      this.globalData.name = "张三"
    }
  })
  ```

## 其他文件中使用

1. 先引用 `app()` 实例

2. 获取数据

    ```js
    // index.js
    const app = getApp();
    Page({
      onLoad() {
        console.log([app.globalData.name](http://app.globalData.name "app.globalData.name"))
      }
    })

    ```

3. 修改/设置数据

    ```js
    // index.js
    const app = getApp();
    Page({
      onLoad() {
        [app.globalData.name](http://app.globalData.name "app.globalData.name") = '张三'
      }
    })
    ```
