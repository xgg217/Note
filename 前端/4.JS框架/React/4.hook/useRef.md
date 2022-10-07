# useRef

## useRef 函数

1.  一个参数：默认值

2.  返回一个固定的对象

    \`\`\`js

    {

    current: '值'

    }

    \`\`\`

## 实际应用

  - 未使用之前

    ```js
    import React,{ useState } from 'react';

    function App() {
      const inpRef = React.createRef();
      return (
        <div className="App">
          <input
            type="number" ref={ inpRef } />
          <button onClick={ () => {
            console.log(inpRef.current.value)
          } }>得到Input 的值</button>
        </div>
      );
    }

    export default App;
    ```

  - 使用 useRef

    ```js
    import React,{ useState, useRef } from 'react';

    function App() {
      // const inpRef = React.createRef();
      const inpRef = useRef();
      return (
        <div className="App">
          <input
            type="number" ref={ inpRef } />
          <button onClick={ () => {
            console.log(inpRef.current.value)
          } }>得到Input 的值</button>
        </div>
      );
    }

    export default App;
    ```
