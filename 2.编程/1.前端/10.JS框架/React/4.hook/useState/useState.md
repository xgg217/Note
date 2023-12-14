# useState

## 资料

[useState.pptx](file/useState_UUjSR74dnK.pptx)

## 定义

+ `State Hook` 是一个在函数组件中使用的函数（ `useState` ）

+ 用于在函数中使用状态

## useState 函数

+ 使用

  ```jsx
  import React, { useState } from 'react'

  export default function Dome1() {

    const [n, setN] = useState(0); // 默认值为0
    // n: 得到状态的值
    // setN：该函数用于改变状态

    return (
      <div>
        <button onClick={ () => {
          setN(n -1);
        } }>-</button>
        <p>{ n }</p>
        <button onClick={() => {
          setN(n + 1);
        }}>+</button>
      </div>
    )
  }
  ```

## useState 细节

1. 最好写在函数的起始位置。便于阅读

2. 严禁出现在代码块中（判断、循环）中

3. 返回的函数（数组的第二项），引用不变（节约内存）

4. 如果使用函数改变数据，若数据和之前的数据完全相等（使用 `Objec.is()` 进行比较），不会重新渲染。以达到优化效率的目的

5. 使用函数改变数据，传入的值不会和原来的数据进行合并，而是直接**替换**

    ```jsx

    const [n, setN] = useState({
      x: 1,
      y: 2
    });

    // 错误
    <button onClick={ () => {
      setN({
        x: n.x - 1
      });
    } }>-</button>

    // 正确
    <button onClick={ () => {
      setN({
        ...n,
        x: n.x - 1
      });
    } }>-</button>
    ```

6. 如果要实现强制刷新组件

    1. 类组件： 使用 `forceUpdate` 函数

    2. 函数组件：使用一个空对象的 `useState`

        ```jsx
        const [n, setN] = useState({});

        <button onClick={ () => {
          setN({}); // 强制刷新
        } }>-</button>
        ```

7. 如果某些状态之间没有必然的联系，应该分化为不同的状态，而不要合并成一个对象

8. 和类组件的状态一样，函数组件中改变状态可能是异步的（在 DOM 事件中），多个状态状态变化会合并，以提高效率。此时，不能信任之前

    ```jsx
    const [n, setN] = useState(1);


    // 正确
    <button onClick={ () => {
      // 传入的函数在事件完成之后统一运行

      setN(prevN => { // 第一次执行
        // console.log(prevN)
        return prevN - 1
      });

      setN(prevN => { // 第二次执行
        return prevN - 1
      });
    }}>-</button>
    ```

## State Hook 原理

+ 当运行一个函数组件时（调用该函数）
