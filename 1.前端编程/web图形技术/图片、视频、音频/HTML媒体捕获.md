# HTML 媒体捕获

## 概述

+ HTML媒体捕获是HTML表单的一个扩展，它允许用户通过一个文件上传控件方便地访问设备的媒体捕获功能，如照相机、麦克风等。这个API通过元素的capture属性来实现，可以直接从设备的摄像头或麦克风获取媒体数据
+ 它的使用非常简单，只需要在元素中设置capture属性为"camera"或"microphone"即可

+ HTML媒体捕获的API使得开发者能够更容易地获取用户的媒体输入，并将其集成到Web应用中

  + 例如，可以使用这个API来创建一个简单的照片上传功能，让用户能够直接从他们的设备摄像头拍摄照片并上传到网站
  + 同样，也可以用于音频录制或视频录制等场景

  ```html
  <!-- 是一个带有 capture 属性的文件输入控件。accept="image/*" 表示该控件只接受图片文件，而 capture="camera" 则指示浏览器使用设备的摄像头来捕获照片。 -->
  <input type="file" accept="image/*" capture="camera">
  ```

## controlslist 属性

+ controlslist 是 `<video>` 和 `<audio>` 元素的一个属性，它允许开发者更细致地控制视频或音频播放器的默认控件的显示与隐藏
+ 通过 `controlslist` 属性，你可以指定哪些控件应该被显示或隐藏

+ 这个属性接受一系列的值，每个值对应一个控件。下面是一些可能的值：

  + nodownload：禁止显示下载按钮

  + nofullscreen：禁止显示全屏按钮

  + noremoteplayback：禁止显示远程播放按钮（例如，在电视上播放）

  + noplaybackrate：禁止显示播放速率按钮（例如，加快或减慢播放速度）

  + nodirection（对于视频）：禁止显示方向按钮（例如，在360度视频中使用的方向控件）

+ 可以通过组合这些值来定义你想要的控件列表

  + 例如，如果你想要隐藏下载、全屏和远程播放按钮，可以将 `controlslist` 属性的值设置为 `"nodownload nofullscreen noremoteplayback"`

    ```html
    <video src="example.mp4" controls controlslist="nodownload nofullscreen"></video>
    ```
