# CSS

## 外部样式表

*   在此方法中，你可以将外部样式表导入到组件使用类中。

*   但是你应该使用 `className` 而不是 `class` 来为 `React` 元素应用样式, 这里有一个例子。

    ```javascript
    import React from 'react';
    import './App.css';
    import { Header } from './header/header';
    import { Footer } from './footer/footer';
    import { Dashboard } from './dashboard/dashboard';
    import { UserDisplay } from './userdisplay';

    function App() {
      return (
        <div className="App">
          <Header />
          <Dashboard />
          <UserDisplay />
          <Footer />
        </div>
      );
    }

    export default App;
    ```

## 内联样式

*   在这个方法中，我们可以直接将 `props` 传递给HTML元素，属性为 `style`。

*   这里有一个例子。这里需要注意的重要一点是，我们将 `javascript` 对象传递给 `style`，这就是为什么我们使用 `backgroundColor` 而不是CSS方法 `backbackground-color`。

    ```javascript
    import React from 'react';
    export const Header = () => {
      const heading = 'TODO App'
      return(
        <div style={{ backgroundColor: 'orange' }}>
          <h1>{heading}</h1>
        </div>
      )
    }
    ```

## 定义样式对象并使用它

*   因为我们将javascript对象传递给style属性，所以我们可以在组件中定义一个style对象并使用它。下面是一个示例，你也可以将此对象作为 props 传递到组件树中。

    ```javascript
    import React from 'react';

    const footerStyle = {
      width: '100%',
      backgroundColor: 'green',
      padding: '50px',
      font: '30px',
      color: 'white',
      fontWeight: 'bold'
    }

    export const Footer = () => {
      return(
        <div style={footerStyle}>
          All Rights Reserved 2019
        </div>
      )
    }
    ```
