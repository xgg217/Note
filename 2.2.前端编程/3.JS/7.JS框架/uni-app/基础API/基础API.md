# 基础API

## 网络请求

+ `uni.request` 发起网络请求

+ 为了解决 `uni.request` 网络请求API相对简单的问题，可以使用 `@escook/request-miniprogram` 进行网络请求 处理

+ 在小程序中，无法使用 `fetch` 及 `axios` 进行网络发送请求

## 上传、下载

+ 上传文件 `uni-unloadFile`

+ 下载文件 `uni-downloadFile`

## 图片处理

+ `uni-chooseImage` 从相册选择图片或者拍照

+ `uni-previewImage` 预览图片

+ `uni-getImageInfo` 获取图片信息

## 数据缓存

+ uni.getStorage 异步获取本地数据缓存

+ uni.getStorageSync

+ uni.setStorage 异步设置本地数据缓存

+ uni.setStorageSync

+ uni.removeStorage 异步删除数据

+ uni.removeStorageSync

## 交换反馈

+ uni.showToast 显示提示框
