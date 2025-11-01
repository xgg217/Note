# 第三方库

## 文档

+ http://m.wuhantxg.com/doc/web/API/Vue/mitt/

## mitt

+ 安装

  ```js
  npm install --save mitt
  ```

+ 引入

  ```js
  // using ES6 modules
  import mitt from 'mitt'

  // using CommonJS modules
  var mitt = require('mitt')
  ```

## mitt 类型定义

+ 方式1

  ```js
  import mitt from 'mitt';

  // 事件名称 使用语义化命名（如 USER:LOGIN），避免冲突
  type Events = {
    MESSAGE: string;
    'USER:LOGIN': {id:number, name: string};
  };

  const emitter = mitt<Events>();
  ```

+ 方式2 使用内置类型

  ```js
  import mitt, { Emitter } from 'mitt';

  type Events = {
    foo: string;
    bar?: number;
  };

  const emitter: Emitter<Events> = mitt<Events>();
  ```

## mitt 使用

+ 使用

  ```js
  import mitt from 'mitt'

  const emitter = mitt()

  // 添加事件
  // emitter.on('事件名', (接收到的值) => {逻辑处理}) )
  emitter.on('foo', e => console.log('foo', e) )

  // 监听所有事件
  emitter.on('*', (type, e) => console.log(type, e) )

  // 派发(通过事件总线对象发送一个事件，并传递需要改变的数据)
  // emitter.emit('事件名', 需要传的值)
  emitter.emit('foo', { a: 'b' })

  // 取消所有事件
  emitter.all.clear()

  // working with handler references:
  function onFoo() {}
  emitter.on('foo', onFoo)   // listen

  // 取消监听(off)
  emitter.off('foo', onFoo)  // unlisten
  ```

## 实际使用

+ 在项目中使用

  ```js
  // 项目中创建一个新的 mitt.js 文件，用于导出一个全局的事件总线实例：
  import mitt from "mitt";
  const emitter = mitt();
  export default emitter;
  ```

  ```html
  <!-- 需要的组件中导入全局的事件总线实例，并在需要的地方发布和订阅事件即可 -->
  <!-- ComponentA.vue -->
  <template>
    <div @click="toMessage">我是A组件</div>
  </template>

  <script setup lang="ts">
  import emitter from "@/tool/mitt";
  const toMessage = () => {
    emitter.emit("message", "A组件的数据");
  };
  ```

  ```html
  <!-- ComponentB.vue -->
  <template>
    <div>我是B组件</div>
  </template>
  <script setup lang="ts">
  import emitter from "@/tool/mitt";

  emitter.on("message", (data: any) => {
    console.log(data); //A组件的数据
  });
  </script>
  ```

## 在vue3中使用

+ 这种模式特别适用于需要根据路由变化执行某些逻辑（如更新UI组件、获取数据等）的场景，同时希望保持代码清晰和性能高效的Vue应用

+ 步骤1：创建一个事件总线

  ```js
  // 在你的项目中，你可以创建一个专门的文件来管理事件总线，比如eventBus.js。在这个文件中，你可以导入mitt并创建一个mitt实例：

  // eventBus.js
  import mitt from 'mitt';
  const emitter = mitt();
  export default emitter;
  ```

+ 步骤2：在组件中发射事件

  ```html
  // 现在，你可以在组件中通过事件总线来发射事件。比如，在一个子组件中，你可以这样发射一个自定义事件

  // ChildComponent.vue
  <template>
    <button @click="emitEvent">Emit Event</button>
  </template>

  <script>
  import emitter from './eventBus';

  export default {
    name: 'ChildComponent',
    methods: {
      emitEvent() {
        emitter.emit('customEvent', { message: 'Hello from ChildComponent!' });
      }
    }
  }
  </script>
  ```

+ 步骤3：在组件中监听事件

  ```html
  <!-- 同样地，你可以在另一个组件中通过事件总线来监听这个自定义事件。比如，在一个父组件中，你可以这样监听并处理这个事件： -->
  // ParentComponent.vue
  <template>
    <div>
      <ChildComponent />
      <p>{{ eventMessage }}</p>
    </div>
  </template>

  <script>
  import ChildComponent from './ChildComponent.vue';
  import emitter from './eventBus';

  export default {
    name: 'ParentComponent',
    components: {
      ChildComponent
    },
    data() {
      return {
        eventMessage: ''
      };
    },
    mounted() {
      emitter.on('customEvent', (payload) => {
        this.eventMessage = payload.message;
      });
    },
    beforeUnmount() {
      emitter.off('customEvent');
    }
  }
  </script>
  ```






