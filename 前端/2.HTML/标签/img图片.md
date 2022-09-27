# img图片

## 概述

  - `<img>` 元素用于插入图片，主要继承了 `HTMLImageElement` 接口

  - 浏览器提供一个原生构造函数 `Image` ，用于生成 `HTMLImageElement` 实例

    ```javascript
    var img = new Image();
    img instanceof Image // true
    img instanceof HTMLImageElement // true
    ```

  - `Image` 构造函数可以接受两个整数作为参数，分别表示 `<img>` 元素的宽度和高度

    ```javascript
    // 语法
    Image(width, height)

    // 用法
    var myImage = new Image(100, 200);
    ```

  - `<img>` 实例的 `src` 属性可以定义图像的网址

    ```javascript
    var img = new Image();
    img.src = 'picture.jpg';
    ```

  - 新生成的 `<img>` 实例并不属于文档的一部分

  - 如果想让它显示在文档中，必须手动插入文档

    ```javascript
    var img = new Image();
    img.src = 'image1.png';
    document.body.appendChild(img);
    ```

## 与a标签联用

  - 代码

    ```html
    <a>
      <img src="" alt="" />
    </a>
    ```

# 与map元素联用

  - map 子元素：area

## figure元素

  - 指代、定义

  - 通常用于把图片、图片标题、描述包裹起来

  - 子元素：figcaption(标题)

    ```html
    <figure>
      <figcaption>
        <h2>标题</h2>
      </figcaption>
      <a href="https://timgsa.baidu.com/.jpg">链接</a>
      <img src="https://timgsa.baidu.com/803686.jpg" alt="">
    </figure>
    ```

## 事件属性

  - 图像加载完成，会触发 `onload` 属性指定的回调函数

    ```javascript
    // HTML 代码为 <img src="example.jpg" onload="loadImage()">
    function loadImage() {
      console.log('Image is loaded');
    }
    ```

  - 图像加载过程中发生错误，会触发 `onerror` 属性指定的回调函数

    ```javascript
    // HTML 代码为 <img src="image.gif" onerror="myFunction()">
    function myFunction() {
      console.log('There is something wrong');
    }
    ```
