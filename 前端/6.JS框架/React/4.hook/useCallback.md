# useCallback

## 概述

+ 用于得到固定引用值的函数

+ 通常用它进行性能优化

## useCallback 使用方法

+ useCallback 函数有两个参数

    1. 函数：useCallback 会固定该函数的引用，只要依赖项没有发生变化，则始终返回之前函数的地址，

    2. 数组，记录依赖

+ useCallback 函数返回：引用相对固定的函数地址

+ 示例

    ```js
    const callback = () => {
      doSomething(a, b);
    }

    const memoizedCallback = useCallback(callback, [a, b])
    ```
