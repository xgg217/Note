# reducer

## Reducer 基本使用

+ 是用于改变数据的函数

+ 因为 `store` 在收到我们传递过去的 `action` 之后需要对 `state` 进行更新，这个计算过程就叫做 `reducer`

+ 一个数据仓库，有且仅有一个 `reducer`，并且通常情况下，一个工程有且仅有一个仓库

+ `reducer` 是一个函数，接受 `state` 和 `action` 作为参数，返回一个新的 `state`。（和Vuex中的 `Mutation` 一致）

+ 为了方便管理，通常会将 `reducer` 放到单独的文件中

## reducer 被调用的时机

1. 通过 `store.dispatch()` 分发一个 `action`

2. 当创建一个 `store` 的时候，会调用一次

3. 可以利用这点用于 `reducer` 初始化状态

4. 创建仓库时，不传递任何默认值

5. 将 `reducer` 的参数 `state` 设置一个默认值

    ```js
    import { ADD, DEL, SET } from "redux/action/action-type";

    export default function reducer(state = 10, { type, payload = {} }) {
      console.log(11111);
      console.log(state);
      console.log(type);
      console.log(11111);

      switch (type) {
        case ADD:
          return state + 1;
        case DEL:
          return state - 1;
        case SET:
          return payload.value;
        default:
          return state
      }
    }
    ```

## reducer 设置

+ `reducer` 内部通常使用 `switch` 来判断 `type` 的值

  ```js
  /**
   * @param {*} state 之前的数据
   * @param {*} action 描述要做什么的对象
   * 返回一个新的状态
   */
  export default function reducer(state = 10, action) {
    switch (action.type) {
      case actionType.ADD:
        return state + 1
      case actionType.DEC:
        return state - 1
      case actionType.SET:
        return action.payload
      default:
        return state
    }
  }

  ```

## reducer 要求

+ `reducer` **必须**是一个没有副作用的**纯函数**

+ 有利于测试和调试

+ 有利于还原数据

+ 有利于将来和 `react` 结合时的优化

+ 不能改变参数，一次因此若要让状态变化，必须得到一个新的状态

+ 不能有异步

+ 不能对外部环境（`cookie` `localStorge`）造成影响

## combineReducers

+ 由于在大中型项目中，操作比较复杂，数据结构也比较复杂，因此需要对 `reducer` 进行细化

+ `redux` 提供了方法（`combineReducers`），可以帮助我们更加方便的合并 `reducer`

+ `combineReducers`：合并 `reducer` 得到一个新的 `reducer`，该新的 `reducer` 管理一个对象，该对象中的每一个属性交给对应的 `reducer` 管理

  ```js
  import { createStore, bindActionCreators } from 'redux'
  import reducer from './reducer/reducer';
  import * as numberAction from './action/number-action';
  ```

  ```js
  // reducer.js
  import { combineReducers } from 'redux'
  import LoginUser from './LoginUser'
  import users from './users';

  export default combineReducers({
    LoginUser,
    users
  });



  // combineReducers 函数的原理
  // export default (state = {}, action) => {
  //   const newState = {
  //     LoginUser: LoginUser(state.loginUser, action),
  //     users: users(state.users, action)
  //   };
  //   return newState;
  // }
  ```

## 示例代码

+ action 设置

  ```js
  // usersAction.js
  export const ADD_USER = Symbol('add-user')
  export const DEL_USER = Symbol('del-user')
  export const UPDATE_USER = Symbol('update-user')

  // 添加用户
  export const addUser = (user) => {
    return {
      type: ADD_USER,
      payload: user
    }
  }

  // 删除用户
  export const delUser = (ids) => {
    return {
      type: DEL_USER,
      payload: {
        ids
      }
    }
  }

  // 更新用户
  export const updateUser = (ids, newUserData) => {
    return {
      type: UPDATE_USER,
      payload: {
        ...newUserData,
        ids
      }
    }
  }
  ```

  ```js
  // users.js

  import * as usersAction from './../action/usersAction'

  const initialState = [
    { id: 1, name: '小花', age: 12 },
    { id: 21, name: '阿萨', age: 110 },
    { id: 38, name: '小刚刚', age: 5 },
  ];

  export default function(state = initialState, { type, payload }) {
    const newState = JSON.parse(JSON.stringify(state));

    switch (type) {
      case usersAction.ADD_USER:
        console.log('add')
        console.log(newState)
        console.log(payload)
        return [...newState, payload];
      case usersAction.DEL_USER:
        return newState.filter(item => {
          return (item.id !== payload.ids)
        });
      case usersAction.UPDATE_USER:
        return newState.map(item => {
          if(item.id === payload.ids) {
            return {...item, ...payload}
          } else {
            return item
          }
        });
      default:
        return state;
    }
  }
  ```

  ```js
  // reducer/index.js
  import { combineReducers } from 'redux' // 方法2 需要的函数
  import LoginUser from './loginUser'
  import users from './users'

  // 合并方法1
  export default function reducer(state = {}, action) {
    const newState = {
      LoginUser: LoginUser(state.LoginUser, action),
      users: users(state.users, action)
    }
    return newState;
  }

  // 合并方法2
  export default combineReducers({
    LoginUser,
    users
  });
  ```

  ```js
  import { createStore } from 'redux'
  import reducer from './reducer/index'
  import { addUser, delUser, updateUser } from './action/usersAction'

  console.log(store.getState()); // 查看仓库数据
  store.dispatch(addUser({ id: 1200, name: '渣渣', age: 120 }))； // 添加
  console.log(store.getState())
  store.dispatch(delUser(21)) // 删除
  console.log(store.getState())
  ```

+ 使用

+ 合并 reducer

+ 细分 reducer
