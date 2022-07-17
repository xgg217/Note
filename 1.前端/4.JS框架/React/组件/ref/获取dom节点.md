# 获取dom节点

## 获取方法1

*   代码

    ```javascript
    // 点击获取 ref
    butClick = () => {
      console.log(this.refs.test);
    }

    butClick
    render() {
      return (
        <>
          <h2 ref="test">这是h2标签</h2>
          <button onClick={this.butClick}>点击获取ref</button>
        </>
      )
    }
    ```
