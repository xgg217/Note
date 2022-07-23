# ReactRouterDom

## React Router Dom

  - `react-router-dom` 是应用程序中路由的库。`React`库中没有路由功能，需要单独安装`react-router-dom`。

    ```javascript
    http://127.0.0.1:3000/article/num1
    ```

  - `react-router-dom` 提供两个路由器 `BrowserRouter` 和 `HashRoauter`。前者基于 `url` 的 `pathname` 段，后者基于 `hash` 段。

    ```javascript
    http://127.0.0.1:3000/#/article/num1（不一定是这样，但#是少不了的）
    ```

## react-router-dom 组件

  - `BrowserRouter` 和 `HashRouter` 是路由器。

  - `Route` 用于路由匹配。

  - `Link` 组件用于在应用程序中创建链接。 它将在HTML中渲染为锚标记。

  - `NavLink`是突出显示当前活动链接的特殊链接。

  - `Switch` 不是必需的，但在组合路由时很有用。

  - `Redirect` 用于强制路由重定向

## 安装和使用

  - 安装

    ```javascript
    npm install react-router-dom -S
    ```

  - 引入

    ```javascript
    import {BrowserRouter as Router} from 'react-router-dom'
    // 或者
    import {HashHistory as Router} from 'react-router-dom'
    ```

  - 使用

## BrowserRouter 和 HashRouter 路由形式

  - `BrowserRouter` 浏览器路由。URL 形式 `example.com/some/path`

    ```javascript
    import { HashRouter, Route } from "react-router-dom";

    <BrowserRouter>
      // 只能存在一个元素
      <div>
        // 通过加一条 标签来 存在多个路由
        <Route  path='/' component={Test} />
        <Route  path='/test' component={Test} />
      </div>
    </BrowserRouter>
    ```

  - `HashHistory` 哈希路由。形式 `example.com/#/some/path`

    ```javascript
    import { HashRouter, Route } from "react-router-dom";

    <HashRouter>
      <Route path='/test' component={Test} />
    </HashRouter>
    ```

## inclusive router 广义匹配

  - 示例 ：`/test` 同时匹配到了 `/test` 和 `/`

    ```javascript
    <BrowserRouter>
      <div>
        <Route  path='/' component={Test} />
        <Route  path='/test' component={Test} />
      </div>
    </BrowserRouter>
    ```

## exclusive router 精确陪匹配

  - 代码

    ```javascript
    import { BrowserRouter, Route, Switch } from "react-router-dom";

    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Test} />
        <Route exact path='/test' component={Test} />
      </Switch>
    </BrowserRouter>
    ```

## \<Route>

  - render 判断

    ```javascript
    const isLogin = false;

    // 表示 isLogo 为true时，显示<User /> 组件，负责重定向到 login 页面。
    <Route path="/user" render={ () => {  isLogin ? <User /> : <Redirect to="/login"> } } >
    ```

  - `getUserConfirmation` 函数

      - 参数1：阻塞消息

      - 参数2：回调函数。调用该函数，同时传递 `true` 则表示进入到新页面。传递 `false` 或者 不调用 则不做任何操作

    ```react&#x20;jsx
    // 子组件
    componentDidMount() {
      // 设置阻塞，同时向根组件传递的消息
      this.props.history.block('跳 跳 跳');
    }
    ```

    ```react&#x20;jsx
    // 根组件
    function App() {
      return (
        // 接收到阻塞 消息
        <Router getUserConfirmation={(msg, callback) => {
          console.log(msg);
          callback(true); // 可以跳转
          callback(false); // 不做任何处理，或者不调用 callback
        }}>

          <Link to="/">page1</Link>
          <Link replace to="/page2">page2</Link>

          <RouteGuard onChange={ jtFunc }>
          <p>{ addCal }</p>
            <Switch>
              <Route path="/" exact component={ Page1 }></Route>
              <Route path="/page2" exact component={ Page2 }></Route>
              <Redirect to='/'></Redirect>
            </Switch>
          </RouteGuard>
        </Router>
      );
    }

    export default App;
    ```
