# showOpenFilePicker

## 概述

+ 用于显示一个允许用户选择一个或多个文件的文件选择器，并返回这些文件的句柄

## 语法

+ 语法

  ```js
  showOpenFilePicker()
  showOpenFilePicker(options)
  ```

+ 参数

  + options

    + excludeAcceptAllOption 可选

      + 布尔值，默认为 false
      + 默认情况下，选择器应包含一个不应用任何文件类型过滤器的选项（通过下面的类型选项启动）。将此选项设置为 true 意味着该选项不可用。

    + id 可选

      + 通过指定 ID，浏览器可以记住不同 ID 所对应的目录。如果在另一个选择器中使用了相同的 ID，则选择器将在同一目录中打开。

    + multiple 可选

      + 布尔值，默认为 `false`
      + 当设置为 `true` 时，可以选择多个文件

    + startIn 可选

      + 一个 FileSystemHandle 对象或一个众所周知的目录（"desktop"、"documents"、"downloads"、"music"、"pictures" 或 "videos"）以指定打开选择器的起始目录


    + types 可选 允许选择的文件类型的数组。每个项目都是一个具有以下选项的对象：

      + description 可选

        + 允许的文件类型类别的可选描述
        + 默认为空字符串

      + accept

        + 一个 Object，其键设置为 MIME 类型，值设置为文件扩展名的数组（参见下面的示例）


+ 返回值 一个 Promise 对象，其兑现一个包含 FileSystemFileHandle 对象的数组

+ 异常

  + AbortError DOMException

    + 如果用户在没有做出选择的情况下关闭提示，或者如果用户代理认为任何选定的文件过于敏感或危险，则抛出此异常。

  + SecurityError DOMException

    + 如果调用被同源策略阻止，或者不是通过用户交互（例如按下按钮）调用，则抛出该异常。

  + TypeError 如果无法处理接受类型，则抛出该异常，它可能会在出现以下情况时发生：

    + types 选项中任何项目的 accept 选项的任何键字符串都无法解析为有效的 MIME 类型。
    + types 选项中任何项目的 accept 选项的任何值字符串都是无效的，例如，如果它不以 . 开头，或者它以 . 结尾，或者它包含任何无效的值码点且长度大于 16。
    + types 选项为空，excludeAcceptAllOption 选项为 true

## 示例

+ 示例1

  ```js
  const pickerOpts = {
    types: [
      {
        description: "Images",
        accept: {
          "image/*": [".png", ".gif", ".jpeg", ".jpg"],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  };

  async function getFile() {
    // 打开文件选择器，解构返回的数组中的第一个元素
    const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

    // 获取文件内容
    const fileData = await fileHandle.getFile();
  }
  ```
