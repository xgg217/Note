# action

## action 基本使用

- action 是平面对象。`action.__proto__ === Object.prototype`

- `action` 是 `store` 数据的唯一来源

- 指的是需要变化的数据，**必须**要有一个 `type` 属性（类型没有要求）和一些需要在 `state` 中修改的属性。（和 `Vuex` 中 `Mutation` 的 `payload` 参数一致，因为我们是在 `Mutation` 手动写好对应关系，所以不需要传递 `type`）

    ```js
    const action = {
      type: 'add', // 描述操作类型
      payload: '' // 附件数据
    };
    ```

- 在大型项目中，由于操作类型非常多，为了避免硬编码（hard code），会将 `action` 的类型存放到一个或一些单独文件中

    ```js
    // 避免硬编码
    export const ADD = Symbol('add');
    export const DECEASE = Symbol('decease');
    ```

- 为了方便传递 `action` ，通常会使用 `action` 创建函数来创建 `action`

    ```js
    import * as actionType from './action-type';
    export const getAddAction = () => {
      return {
        type: actionType.ADD
      }
    }
    ```

- `action` 创建函数应为无副作用的纯函数

    1. 不能以任何形式修改参数；

    2. 不可以有异步；

    3. 不可以对外部环境中的数据造成影响

## binActionCreators

- 为了方便利用 `action` 创建函数来分发（触发）`action` ，`redux` 提供了一个函数 `binActionCreators`

- `binActionCreators` :该函数用于增强 `action` 创建函数的功能，使它不仅仅可以创建 `action` ，并且创建后自动完成分发

    ```js
    // action-type.js
    export const ADD = Symbol('add');
    export const DEL = Symbol('del');
    export const SET = Symbol('set');
    ```

    ```js
    // number-action
    import * as actionType from './action-type';

    export const getAddAction = () => {
      return {
        type: actionType.ADD
      }
    }

    export const getDelAction = () => {
      return {
        type: actionType.DEL
      }
    }

    export const getSetAction = (num) => {
      return {
        type: actionType.SET,
        payload: num
      }
    }
    ```

    ```js
    // 设置 使用
    import { createStore, bindActionCreators } from 'redux'
    import * as actionType from './action/action-type';
    import * as numberAction from './action/number-action';

      /**
     * reducer 本质就是一个普通的函数
    * @param state 之前仓库中的状态（数据）
    * @param action 描述要做什么的对象
    * 返回一个新的状态
    */
    function reducer(state = 10, action) {
      if(action.type === actionType.ADD) {
        return state + 1;
      } else if(action.type === actionType.DEL) {
        return state - 1;
      } else if(action.type === actionType.SET) {
        return action.payload;
      }

      return state;
    }

    // 创建仓库
    const store = createStore(reducer);

    // 分发-方法1
    store.dispatch(numberAction.getSetAction(1)); // 向仓库分发 action

    // 分发-方法2：利用bindActionCreators
    /**
     * 第一个参数：是 action 创建函数合并的对象
    * 第二个参数：仓库的 dispatch 函数
    * 返回值： 得到一个新的对象，对象中的属性名与第一个参数名一致
    */
    const bindAction = bindActionCreators(numberAction, store.dispatch);
    bindAction.getSetAction(111); // 直接分发
    ```
