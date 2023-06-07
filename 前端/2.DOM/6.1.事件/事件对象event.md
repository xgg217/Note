# 事件对象

## 概述

+ 事件对象封装了事件的相关信息

## 事件对象的通用成员

+ target & srcElement

+ currentTarget

+ type

+ preventDefault & returnValue

+ stopPropagetion

+ eventPhase

## target & srcElement

+ 事件源（事件目标）

  ```js
  dom.addEventListener('click', function(e) {
    console.log(e.elientX) // 打印鼠标的横坐标
  })
  ```

## currentTarget

+ 当前目标：获取绑定事件的元素，等效于 `this`

## type

+ 得到事件类型

## preventDefault & returnValue

+ DOM0 中阻止浏览器默认行为：再事件处理程序中返回 `false`

+ `Event.preventDefault` 方法取消浏览器对当前事件的 **默认行为**

+ 注意，该方法只是取消事件对当前元素的默认影响，不会阻止事件的传播

  ```js
  // HTML 代码为
  // <input type="checkbox" id="my-checkbox" />
  var cb = document.getElementById('my-checkbox');

  cb.addEventListener('click', function (e){
    e.preventDefault();
  }, false);
  ```

## stopPropagetion

+ 阻止事件冒泡

+ `stopPropagation()`

## eventPhase

+ `Event.eventPhase` 属性返回一个整数常量，表示事件目前所处的阶段。该属性只读

+ `Event.eventPhase` 的返回值有四种可能

  + 0：事件目前没有发生

  + 1：事件目前处于捕获阶段，即处于从祖先节点向目标节点的传播过程中

  + 2：事件到达目标节点，即 `Event.target` 属性指向的那个节点

  + 3：事件处于冒泡阶段，即处于从目标节点向祖先节点的反向传播过程中

## evt.target 与 evt.currentTarget 区别

+ `evt.target` : 当前触发事件的 dom

+ `evt.currentTarget` : 绑定事件的元素，而不是当前触发事件的元素

  ```html
  <div id="parentDom">
    父节点
    <div id="childDom">子节点</div>
  </div>

  <script>
    const parentDom = document.getElementById('parentDom')
    parentDom.addEventListener('click', e => {
      /*
      当点击`子节点`三个字时，此时的target为 childDom,
      当点击`父节点`三个字时，此时的target为 parentDom
       */
      console.log(e.target)
      // 无论是点击`子节点`还是`父节点`, 这个值一直都是 parentDom
      console.log(e.currentTarget)
    })
  </script>
  ```
