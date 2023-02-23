# React.Fragment

## \<React.Fragment>

+ `Fragments` 与 **Vue.js** 的 `<template>` 功能类似，可做不可见的包裹元素

    ```jsx
    class Columns extends React.Component {
      render() {
        return (
          <React.Fragment>
            <td>Hello</td>
            <td>World</td>
          </React.Fragment>
        );
      }
    }
    ```

## <>\</>

+ 简写形式 `<></>`

+ `<></>` 是 `<React.Fragment />` 的语法糖

    ```jsx
    export default function () {
      return (
        <>
          <div>一步 01</div>
          <div>一步 02</div>
          <div>一步 03</div>
          <div>一步 04</div>
        </>
      );
    }
    ```

+ `<></>` 语法不能接受键值或属性

## 带 key 的片段

+ 如果你需要一个带 key 的片段，你可以直接使用 `<React.Fragment />`

    ```jsx
    function Glossary(props) {
      return (
        <dl>
          {props.items.map(item => (
            // 没有`key`，将会触发一个key警告
            <React.Fragment key={item.id}>
              <dt>{item.term}</dt>
              <dd>{item.description}</dd>
            </React.Fragment>
          ))}
        </dl>
      );
    }
    ```
