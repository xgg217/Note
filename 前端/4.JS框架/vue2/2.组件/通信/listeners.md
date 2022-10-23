# $listeners

## 概述

+ ` $listeners` 是 vue 的一个实例属性，它与获取父组件传过来的所有事件函数

  ```html
  <!-- 父组件 -->
  <Child @event1="handleEvent1" @event2="handleEvent2">
  ```

  ```js
  // 子组件
  this.$listeners // { event1: handleEvent1, event2: handleEvent2 }
  ```

## $listeners 与 $emit

+ 相同点

  + 均可实现子组件向父组件传递消息

+ 差异点

  + `$emit` 更加符合单向数据流，子组件仅发出通知，由父组件监听做出改变，而 `$listeners` 则是在子组件中直接使用了父组件的方法
  + 调试工具可以监听到子组件 `$emit` 的事件，但无法监听到 `$listeners` 中的方法调用
  + 由于 `$listeners` 中可以获得出的年底传递过来的方法，因此调用方法可以得到其返回值，但 `$emit` 仅仅是向父组件发出通知，无法知晓父组件处理结果

+ 对于上述中的第三点，可以在 `$emit` 中传递回调函数来解决

  ```html
  <!-- 父组件 -->
  <template>
    <Child @click="handleClick" />
  </template>

  <script>
    import Child from "./Child"
    export default {
      components:{
        Child
      },
      methods:{
        handleClick(data, callback){
          console.log(data); // 得到子组件事件中的数据
          setTimeout(()=>{
            callback(1); // 一段时间后，调用子组件传递的回调函数
          }, 3000)
        }
      }
    }
  </script>
  ```

  ```html
  <template>
    <button @click="handleClick">
      click
    </button>
  </template>

  <script>
    export default {
      methods:{
        handleClick(){
          this.$emit("click", 123, (data)=>{
            console.log(data); // data为父组件处理完成后得到的数据
          })
        }
      }
    }
  </script>
  ```

