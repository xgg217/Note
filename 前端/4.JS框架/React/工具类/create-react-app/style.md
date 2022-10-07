# style

## 清除浏览器默认样式

  - reset.css: 需要额外下载

  - normalize.css :无需下载，内置

    ```css
    index.css

    @import-normalize;
    ```

## 引入 css

  - css 文件

    ```js
    @import 'styles/_colors.css';

    .Button {
      padding: 20px;
    }
    ```

  - js/jsx 文件

    ```js
    import React, { Component } from 'react';
    import './Button.css';

    class Button extends Component {
      render() {
        return <div className="Button" />;
      }
    }
    ```

## CSS 模块化

  - 命名方式： `[name].module.css`

  - 引入

    ```js
    import React, { Component } from 'react';
    import styles from './Button.module.css';
    import './another-stylesheet.css';

    class Button extends Component {
      render() {
        // reference as a js object
        return <button className={ styles.error }>Error Button</button>;
      }
    }
    ```

    ```html
    <!-- 结果 -->
    <button class="Button_error_ax7yz">Error Button</button>
    ```

  - CSS模块允许您在不同的文件中使用相同的CSS类名，而无需担心命名冲突

## SCSS

  - 安装

    ```js
    npm install node-sass --save

    yarn add node-sass
    ```

  - 公用 `SCSS` 文件

    ```js
    @import 'styles/_colors.scss';
    @import '~nprogress/nprogress';
    ```

  - 命名方式： `[name].module.scss` 或 `[name].module.sass`
