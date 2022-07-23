# redux-devtools-extension

## react-Devtools 浏览器插件

## npm 安装 redux-devtools-extension

  - `npm install --save redux-devtools-extension`

  - 使用

    ```javascript
    import { createStore, applyMiddleware } from 'redux';
    import { composeWithDevTools } from 'redux-devtools-extension'
    import thunk from 'redux-thunk';
    import reducer from './reducer/index';


    export default createStore(reducer, composeWithDevTools(
      applyMiddleware(thunk)
    ));
    ```
