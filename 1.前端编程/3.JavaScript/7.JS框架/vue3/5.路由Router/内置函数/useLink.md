# useLink

## 概述

+ useLink 主要用于自定义导航组件的时候使用

  ```js
  const {
    // 解析出来的路由对象
    route,
    // 用在链接里的 href
    href,
    // 布尔类型的 ref 标识链接是否匹配当前路由
    isActive,
    // 布尔类型的 ref 标识链接是否严格匹配当前路由
    isExactActive,
    // 导航至该链接的函数
    navigate
  } = useLink(props) // 这里接收的props类似于RouterLink所有props
  ```

