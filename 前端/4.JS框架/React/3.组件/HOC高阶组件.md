# HOC高阶组件

## 高阶函数 HOF Higher-Order Function

  - 高阶函数：以函数作为参数，并返回一个函数

    ```js
    function name(func) {
      return function() {
      }
    }
    ```

## 高阶组件 HOC： Higher-Order Component

  - 高阶组件：以组件作为参数，并返回一个组件

## 高阶组件作用

  - 通常可以了利用 HOC 实现横切关注点

  - 例如：2个组件，每个组件在创建组件和销毁组件时，需要作日志记录

## 高阶组件注意点

  - 不要在 `render` 中使用高阶组件

      - 因为如果更新 `state`，就会触发 render 函数，每次又要重新 创建新的组件 和 销毁上次创建的组件。浪费性能

    ```react&#x20;jsx
    import withTest from './HOC/withTest.jsx';

    function A() {
      return <h1>h1标签</h1>
    }

    const BPush = withTest(A); // 正确

    export default function dad() {
      return class Push extends Component {
        render() {
          const BPush = withTest(A); // 错误使用
          return (
            <div>
              12
            </div>
          )
        }
      }
    }
    ```

  - 不要在高阶组件内部**更改**传入的抓紧

## 高阶组件命名

  - 建议一般以 `with` 开头，后面接功能。例如：`withTest.jsx`

    ```react&#x20;jsx
    import React, { Component } from 'react'

    export default function withTest(Comp) {
      return class Push extends Component {
        render() {
          return <Comp {...this.props} />
        }
      }
    }
    ```

    ```react&#x20;jsx
    import withTest from './HOC/withTest.jsx';

    function A() {
      return <h1>h1标签</h1>
    }

    const BPush = withTest(A);

    function App() {

      return (
        <div className="App">
          <BPush />
        </div>
      );
    }

    export default App;
    ```

## 高阶组件继续包装高阶组件

  - 代码

    ```react&#x20;jsx
    import withTest from './HOC/withTest.jsx';
    import withLogin from './HOC/withLogin.jsx';

    function A() {
      return <h1>h1标签</h1>
    }

    const BPush = withLogin(withTest(A));

    function App() {

      return (
        <div className="App">
          <BPush />
        </div>
      );
    }
    ```
