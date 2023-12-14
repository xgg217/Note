# 设置属性、style和类

## 绑定属性

+ 代码

  ```jsx
  // class 是在 css 中定义好的
  render() {
    return (
      <>
        <p title={this.state.title} className="red">1</p>
      </>
    );
  }
  ```

## 绑定 类名

+ 基础

  ```jsx
  // 错误
  <div class="App"></div>

  // 正确
  <div className="App"></div>

  // 多个class
  <div className={ `${styles.my} ${styles.linka}` }></div>
  ```

+ 根据 `state` 设置 类名

  ```jsx
  class Home extends Component {
    constructor (props) {
      super(props);
      this.state = {
        color: 'red'
      };
    }

    render() {
      return (
        <>
          弄好 Home 组件
          <p className={this.state.color}>1</p>
        </>
      );
    }
  };
  ```

+ 动态设置类

  ```jsx
  // 根据 item.id 的数据带入 setBackgroundColor 函数中，求返回值
  const setBackgroundColor = (id) => {
    let color = '';
    switch (id) {
      case 0:
        color = 'one';
        break;
      case 1:
        color = 'two';
        break;
      case 2:
        color = 'three';
        break;
      default:
        color = '';
        break;
    }
    return color;
  }
  <span className={`${this.setBackgroundColor(1)}`}>{index + 1}</span>
  ```

+ 传递一个字符串作为 className 属性

  ```js
  // 传递一个字符串作为 className 属性
  render() {
    return <span className="menu navigation-menu">Menu</span>
  }
  ```

+ CSS 的 class 依赖组件的 `props` 或 `state`

  ```js
  render() {
    let className = 'menu';
    if (this.props.isActive) {
      className += ' menu-active';
    }
    return <span className={className}>Menu</span>
  }
  ```

+ 如果标签本身有其他class，又要动态添加一个.active的className，来显示内容是否被选中状态

  ```js
  <div className={`container tab ${index === this.state.currentIndex ? "active" : null}`}>此标签是否选中</div>
  ```

## 绑定 style

+ 自定义: `{{}}` : 表示在 js 代码中 写了一个 对象

  ```jsx
  render() {
    return (
      <>
        <i style={{backgroundColor: 'red', width: '400px'}}></i>
      </>
    );
  }
  ```

+ `this.state` 中定义的

  ```jsx
  class Home extends Component {
    constructor (props) {
      super(props);
      this.state = {
        style: {
          color: 'blue',
          fontSize: '40px'
        }
      };
    }

    render() {
      return (
        <>
          弄好 Home 组件
          <div style={this.state.style}>1322</div>
        </>
      );
    }
  };
  ```
