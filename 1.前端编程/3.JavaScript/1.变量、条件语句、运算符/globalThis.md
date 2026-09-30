# globalThis

## 定义

+ 全局属性 `globalThis` 包含全局的 `this` 值，类似于全局对象(global object)

## 描述

+ 事实上，在不同的 JavaScript 环境中拿到全局对象是需要不同的语句的

  + 在 Web 中，可以通过 `window`、`self` 或者 `frames` 取到全局对象，

  + 是在 `Web Workers` 中只有 `self` 可以

  + 在 Node.js 中，它们都无法获取，必须使用 `global`

  + 在松散模式下，可以在函数中返回 `this` 来获取全局对象，但是在严格模式下 `this` 会返回 `undefined`

+ `globalThis` 提供了一个标准的方式去获取不同环境下的全局对象

+ 它不像 `window` 或者 `self` 这些属性，而是确保可以在有无窗口的环境下都可以正常工作

+ 所以你可以安心的使用 `globalThis` ，不必担心它的运行环境

+ 便于记忆，你只需要记住**全局对象自己** 翻译过来就是 `globalThis`

## 示例

+ 未使用 `globalThis`

  ```js
  var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
  };

  var globals = getGlobal();

  if (typeof globals.setTimeout !== 'function') {
    // 此环境中没有 setTimeout 方法！
  }
  ```

+ 有了 `globalThis` 之后，只需要

  ```js
  if (typeof globalThis.setTimeout !== 'function') {
    //  此环境中没有 setTimeout 方法！
  }
  ```
