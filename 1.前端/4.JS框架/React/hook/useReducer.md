# useReducer

## useReducer 使用

*   代码

    ```javascript
    import React,{ useState, useReducer } from 'react'

    function nReducer(state, {type, payload}) {
      switch (type) {
        case 'add':
          return state + 1;

        case 'dec':
          if(state <= 0) {
            return 0
          } else {
            return state - 1;
          }

        default:
          return state
      }
    }

    const Reducer = () => {
      // 使用
      const [n, dispatch] = useReducer(nReducer, 0);

      return (
        <div>
          <button onClick={ () => { dispatch({type: 'dec'}) } }>减少</button>
          <p>{ n }</p>
          <button onClick={ () => { dispatch({type: 'add'}) } }>增加</button>
        </div>
      )
    }

    export default Reducer
    ```

*   `useReducer` 第三个参数的使用。会将第**二**个参数传入第三个函数的**参数**中，然后第三个函数的返回值作为默认值

    ```javascript
    const [n, dispatch] = useReducer(nReducer, 10, (asg) => {
      return 100
    });
    ```

## 源码

*   代码

    ```javascript
    import React, { useState } from 'react'
    /**
     * @param {function} reduccer reducer 函数，标准格式 {type: '...', payload: '...'}
     * @param {any} initialState 初始状态
     * @param {function} initFun (可选参数) 用于计算初始值，将 initialState 作为参数，返回结果作为初始值
     */
    function useReducer (reduccer, initialState, initFun) {
      // const [n, setN] = useState(0);
      const [state, setState] = useState(initFun ? initFun(initialState) : initialState);

      function dispatch(action) {
        const newState = reducer(state, action);
        console.log(`日志：n的值从${state}变化到${newState}`);
        setState(newState)
      }

      return [state, dispatch]
    }
    ```
