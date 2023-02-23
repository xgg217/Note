# keep-alive

## 注意

+ 注意：`<keep-alive>` 要求被切换到的组件都有自己的名字，不论是通过组件的 `name` 选项还是局部/全局注册

## 使用

+ `<keep-alive>` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们

    ```js
    <!-- 失活的组件将会被缓存！-->
    <keep-alive>
      <component is="pageCmp"></component>
    </keep-alive>
    ```

+ `<keep-alive>` 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中

+ 当组件在 `<keep-alive>` 内被切换，它的 `activated` 和 `deactivated` 这两个生命周期钩子函数将会被对应执行

## activated & deactivated

+ activated：keep-alive 组件激活时调用

+ deactivated: keep-alive 组件停用时调用
