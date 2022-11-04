# 纯组件PureComponent

## 含义

- 纯组件用于避免不必要的渲染（运行 `render` 函数），从而提高效率

## 优化

- 如果一个组件得属性和状态都没有发生变化，重新渲染该组件是没有必要的

## 类组件 PureComponent

- PureComponent 是一个组件，如果某个组件继承自该组件，则该组件得 `shouldComponentUpdate` 会进行优化

- 优化：对属性和状态进行**浅**比较，如果相等则不会重新渲染

    ```js
    // 比较函数
    const ObjectEqual = (obj1, obj2) => {
      for(let prop in obj1) {
        if(Object.is(obj1[prop], obj2[prop])) {
          return false;
        }
      }
      return true;
    };

    // 钩子函数
    shouldComponentUpdate(nextProps, nextState) {
      console.log('重新渲染')
      if(ObjectEqual(this.props, nextProps) && ObjectEqual(this.state, nextState)) {
        return false;
      }
      return true;
    }
    ```

- React 自带 `PureComponent`

    ```jsx
    // 原来
    import React, { Component } from 'react';

    // 现在
    import React, { PureComponent } from 'react'
    ```

## 注意

- `PureComponent` 是浅比较。所以为了效率应该尽量使用 `PureComponent`

- 所以在使用时：不要改动之前得状态，永远创建新的状态进行覆盖
