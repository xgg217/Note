# redux与router

## 插件

+ `connected-react-router`

+ 用于 `redux` 和 `react-route` 进行结合

+ 本质上 router 中的某些数据可能会更数据仓库中的数据进行联动

  ```js
  npm install --save connected-react-router

  yarn add connected-react-router
  ```

+ 该组件会将下面的路由数据和仓库保持同步

  + `action`：他不是 `redux` 的 `action` ，它表示当前路由跳转的方式(`PUSH` 、 `POP` 、 `PEPLCE`)

  + `location`：它记录了当前的地址信息

    ```js
    // reducers.js
    import { combineReducers } from 'redux'
    import { connectRouter } from 'connected-react-router'

    const createRootReducer = (history) => combineReducers({
      router: connectRouter(history),
      ... // rest of your reducers
    })
    export default createRootReducer
    ```
