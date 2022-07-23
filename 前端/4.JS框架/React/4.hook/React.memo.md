# React.memo

## 作用

  - `memo` 类似于 `PureCompoent` 作用是优化组件性能，防止组件触发重渲染

  - 针对 一个组件的渲染是否重复执行

## React.memo 基本使用

  - 基本使用

    ```javascript
    import React,{ useMemo } from "react";
    function Component(props) {
      /* 使用 props 渲染 */
    }
    const MyComponent = React.memo(Component);
    ```

  - 通过 `React.memo` 包裹的组件在 `props` 不变的情况下，这个被包裹的组件是不会重新渲染的，也就是说上面那个例子，在我点击改名字之后，仅仅是 `title` 会变，但是 `Child` 组件不会重新渲染（表现出来的效果就是 `Child` 里面的 `log` 不会在控制台打印出来），会直接复用最近一次渲染的结果。

    ```javascript
    import React from "react";

    function Child(props) {
      console.log(props.name)
      return <h1>{props.name}</h1>
    }

    export default React.memo(Child)
    ```

## React.memo 高级用法

  - 默认情况下其只会对 `props` 的复杂对象做浅层对比(浅层对比就是只会对比前后两次 `props` 对象引用是否相同，不会对比对象里面的内容是否相同)，

  - 如果你想要控制对比过程，那么请将自定义的比较函数通过第二个参数传入来实现。

    ```javascript
    function MyComponent(props) {
      /* 使用 props 渲染 */
    }
    function areEqual(prevProps, nextProps) {
      /*
      如果把 nextProps 传入 render 方法的返回结果与
      将 prevProps 传入 render 方法的返回结果一致则返回 true，
      否则返回 false
      */
    }
    export default React.memo(MyComponent, areEqual);
    ```

  - 如果 `props` 相等，`areEqual` 会返回 `true`；如果 `props` 不相等，则返回 `false`。这与 `shouldComponentUpdate` 方法的返回值相反。
