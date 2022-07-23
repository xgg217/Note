# store

## store 用于保存数据

  - 通过 `createStore` 方法创建的对象

    ```javascript
    import reducer from './reducer/index';

    const stort = createStore(reducer);
    ```

## store 方法

  - `dispatch` ： 分发一个 `action`

  - `getState` ： 得到当前仓库保存的数据

  - `replaceReducer` ： 替换 `reducer`

  - `subscribe` : 注册一个监听器

      - 监听器：是一个无参函数，当分发一个 `action` 后，会运行注册的监听器。

      - 监听器会返回一个函数，用于取消监听

    ```javascript
    const stort = createStore(reducer);
    console.log(stort)；

    // 注册监听器
    const unListen = stort.subscribe(() => {
      console.log('12121')
    });

    // 取消监听
    unListen();
    ```
