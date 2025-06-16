# Routes 和 Route

## 概述

+ Routes 是 React Router v6 中新的路由声明方式，取代了 v5 中的 Switch
+ Routes 组件包含了多个 Route 组件，每个 Route 定义了一个路径和对应的组件

  ```js
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  }
  ```
