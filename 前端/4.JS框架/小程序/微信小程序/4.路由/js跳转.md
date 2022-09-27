# js跳转

## wx.switchTab

  - 跳转到 tabBar 页面，并关闭其他所有非 `tabBar` 页面

  - 路径后不能带参数

    ```javascript
    // 需在 app.json 的 tabBar 字段定义的页面
    {
      "tabBar": {
        "list": [{
          "pagePath": "index",
          "text": "首页"
        },{
          "pagePath": "other",
          "text": "其他"
        }]
      }
    }
    ```

    ```javascript
    wx.switchTab({
      url: '/index'
    })
    ```

## wx.reLaunch

  - 关闭所有页面，打开到应用内的某个页面

    ```javascript
    wx.reLaunch({
      url: 'test?id=1&key2=value2'
    })
    ```

    ```javascript
    // 获取参数
    // test 页面
    Page({
      onLoad (option) {
        console.log(option.query)
      }
    })
    ```

## wx.redirectTo

  - 关闭当前页面，跳转到应用内的某个页面

  - 但是不允许跳转到 `tabbar` 页面

    ```javascript
    wx.redirectTo({
      url: 'test?id=1'
    })
    ```

## wx.navigateTo

  - 保留当前页面，跳转到应用内的某个页面

  - 但是不能跳到 `tabbar` 页面

  - 使用 `wx.navigateBack` 可以返回到原页面

  - 小程序中页面栈最多十层

    ```javascript
    wx.navigateTo({
      url: 'test?id=1'
    })
    ```

## wx.navigateBack

  - 关闭当前页面，返回上一页面或多级页面

  - 可通过 `getCurrentPages` 获取当前的页面栈，决定需要返回几层

    ```javascript
    // 注意：调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，而 redirectTo 方法则不会。见下方示例代码

    // 此处是A页面
    wx.navigateTo({
      url: 'B?id=1'
    })

    // 此处是B页面
    wx.navigateTo({
      url: 'C?id=1'
    })

    // 在C页面内 navigateBack，将返回A页面
    wx.navigateBack({
      delta: 2
    })
    ```
