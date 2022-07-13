# wx.canUse

## 作用

*   判断小程序的API，回调，参数，组件等是否在当前版本可用

## 语法

*   `${API}` 代表 API 名字

*   `${method}` 代表调用方式，有效值为return, success, object,callback

*   `${param}` 代表参数或者返回值

*   `${option}` 代表参数的可选值或者返回值的属性

*   `${component}` 代表组件名字

*   `${attribute}` 代表组件属性

*   `${option}` 代表组件属性的可选值

## 使用

*   代码

    ```javascript
    // 对象的属性或方法
    wx.canIUse('console.log')
    wx.canIUse('CameraContext.onCameraFrame')
    wx.canIUse('CameraFrameListener.start')
    wx.canIUse('Image.src')

    // wx接口参数、回调或者返回值
    wx.canIUse('openBluetoothAdapter')
    wx.canIUse('getSystemInfoSync.return.safeArea.left')
    wx.canIUse('getSystemInfo.success.screenWidth')
    wx.canIUse('showToast.object.image')
    wx.canIUse('onCompassChange.callback.direction')
    wx.canIUse('request.object.method.GET')

    // 组件的属性
    wx.canIUse('live-player')
    wx.canIUse('text.selectable')
    wx.canIUse('button.open-type.contact')
    ```
