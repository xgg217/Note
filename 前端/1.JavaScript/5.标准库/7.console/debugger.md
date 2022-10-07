# debugger

## 作用

  - `debugger` 语句主要用于除错，作用是设置断点

  - 如果有正在运行的除错工具，程序运行到 `debugger` 语句时会自动停下

  - 如果没有除错工具，`debugger` 语句不会产生任何结果，JavaScript引擎自动跳过这一句

  - 在Chrome浏览器中，当代码运行到 `debugger` 语句时，就会暂停运行，自动打开控制台界面

    ```js
    for(var i = 0; i < 5; i++){
      console.log(i);
      if (i === 2) debugger;
    }
    ```
