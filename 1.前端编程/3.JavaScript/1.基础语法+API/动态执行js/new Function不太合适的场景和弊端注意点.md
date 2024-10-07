# new Function 不太合适的场景和弊端注意点

## 概述

+ 在将 JavaScript 发布到生产环境之前，需要使用 压缩程序（minifier） 对其进行压缩

+ 压缩程序（minifier）工作原理

  + 压缩程序用于优化 JavaScript 代码，将变量名压缩成更短的名称，并删除注释、空格等无关内容。这样做能减少代码体积，提升性能
  + 压缩时，局部变量（如 `let userName`）会被替换为较短的变量名（如 `let a`），所有引用该变量的地方也会同步替换

+ `new Function` 访问外部变量的限制：

  + 使用 `new Function` 创建的函数不会像普通函数那样能够访问外部的词法作用域（即闭包环境）。它只能访问传递给它的参数和全局变量
  + 在 `new Function` 中，即使我们尝试引用外部定义的变量（如 userName），由于新函数的词法作用域与外部环境隔离，它是无法直接访问这些变量的

+ 压缩程序的影响：

  + 假设代码在开发时有一个变量 let userName，而你在 `new Function` 中尝试访问它。压缩后， `userName` 可能会变成 a。但 `new Function` 在代码压缩后才被执行，它不会知道压缩后变量名的变化，因此会导致访问出错

    ```js
    let userName = "John";
    const func = new Function("return userName;");
    ```

  + 压缩后， `userName` 可能被替换为 `a` ，但是 `new Function` 生成的函数依然试图访问 `userName` ，结果会报错，因为压缩程序不会知道 `new Function` 中定义的内容

## 解决办法：显式传递数据

+ 因为 `new Function` 无法访问外部变量，并且会受到压缩影响，推荐的做法是显式通过函数参数传递需要使用的数据，而不是依赖外部变量

  ```js
  let userName = "John";
  const func = new Function('name', 'return name;');
  console.log(func(userName));  // 这样可以正常工作
  ```

## 架构上不推荐

+ 从架构角度看，依赖 `new Function` 访问外部变量是错误的做法，因为这不仅使代码在压缩后出错，也会导致代码难以维护
+ 通过显式传递参数的方式更加安全、可控

## 总结

+ 不合适场景总结下：由于 `new Function` 不能访问外部变量，只能访问传递给它的参数和全局遍历
+ 代码压缩后，局部变量的名称可能会被替换，导致 `new Function` 中尝试访问外部变量的代码出错，为了避免这些问题，如需使用参数应该通过参数传递数据给 `new Function`
