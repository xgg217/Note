# render-props

## 场景

  - 有时候，某些组件的各种功能及处理逻辑几乎完全相同，只是显示界面不同，解决办法： `render props` 和 `HOC`

## render props

1.  某些组件需要某个属性

2.  该属性是一个函数，函数的返回值用于渲染

3.  函数的参数会传递为需要的数据

4.  注意村逐渐的属性（尽量避免每次传递的 `render props` 的地址不一致）

5.  通常该属性的名字叫做 render

## render props 示例

  - 示例代码： 提供 x y 坐标

    ```react&#x20;jsx
    // 父元素
    import React, { PureComponent } from 'react'

    import './DomeCon.css'

    export default class DomeCon extends PureComponent {

      constructor(props) {
        super(props);
        this.state = {
          x: 0,
          y: 0,
        }

        this.war = React.createRef();
      }

      render() {
        return (
          <div className="war" ref={ this.war } onMouseMove={ this.handerMov }>
            {/* 为子元素提供参数 */}
            { this.props.render(this.state) }
          </div>
        )
      }

      handerMov = (e) => {
        const war = this.war.current;
        const { left, top } = war.getBoundingClientRect();

        const x = e.clientX - left;
        const y = e.clientY - top;
        this.setState(() => {
          return {
            x,
            y
          }
        })
      }
    }
    ```

    ```react&#x20;jsx
    // 使用
    import DomeCon from './component/DomeCon.jsx' // 父元素

    // 子元素1
    const st = (mouse) => {
      return (
        <>
          横坐标{mouse.x} 纵坐标 {mouse.y}
        </>
      )
    };

    // 子元素2
    const divssss = (mouse) => {
      return (
        <>
          <div className="child" style={{ top: mouse.y, left: mouse.x }}></div>
        </>
      )
    }

    function App() {
      return (
        <div className="App">
          // 传入子元素1
          <DomeCon render={ st }></DomeCon>

          // 传入子元素2
          <DomeCon render={ divssss }></DomeCon>
        </div>
      );
    }
    ```
