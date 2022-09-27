# useMemo

## 作用

  - 针对一段函数是否重复执行

## 运行时间

  - 渲染期间完成的

## useMemo

  - 用于保持一些比较稳定的数据，通常用于性能优化

  - 示例

    ```javascript
    const callback = () => {
      doSomething(a, b);
    }

    const memoizedCallback = useCallback(() => {
      return 。。
    }, [a, b])
    ```

  - 实际代码

    ```javascript
    import React,{ useState, useMemo } from 'react';

    function Item(props) {
      console.log(11111)
      return <li>{ props.value }</li>
    }

    function App() {

      const [range, setRange] = useState({min:1, max: 1000});
      const [n, setN] = useState(0);

      const list = useMemo(() => {
        const list = [];
        for(let i = range.min; i < range.max; i++) {
          list.push(<Item key={ i } value={ i }></Item>)
        }
        return list
      }, [range.min, range.max])


      return (
        <div className="App">
          { list }
          <input
            type="number"
            value={ n }
            onChange={ e => {
              setN(parseInt(e.target.value))
            } } />
        </div>
      );
    }

    export default App;
    ```

## 重点

  - 如果 React 元素本身的引用没有发生变化，一定不会重新渲染
