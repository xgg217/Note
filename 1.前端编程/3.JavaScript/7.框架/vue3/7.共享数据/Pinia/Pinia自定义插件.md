# Pinia自定义插件

## 概述

+ 在 Pinia 中，可以为仓库添加插件，通过插件可以扩展以下内容：

  + 为 `store` 添加新的属性
  + 定义 `store` 时增加新的选项
  + 为 `store` 增加新的方法
  + 包装现有的方法
  + 改变甚至取消 `action`
  + 实现副作用，如本地存储

## 实现

+ 首先建议插件单独放置于一个目录下，一个插件其实就是一个方法：

  ```js
  export function myPiniaPlugin1() {
    // 给所有的仓库添加了一条全局属性
    return {
      secret: "the cake is a lie",
    };
  }

  export function myPiniaPlugin2(context) {
    // console.log(context);
    const { store } = context;
    // 在仓库上扩展状态
    store.test = "this is a test";
  }

  /**
  * 给特定的仓库来扩展内容
  * @param {*} param0
  */
  export function myPiniaPlugin3({ store }) {
    if (store.$id === "counter") {
      // 为当前 id 为 counter 的仓库来扩展属性
      return {
        name: "my name is pinia",
      };
    }
  }

  /**
  * 重置仓库状态
  */
  export function myPiniaPlugin4({ store }) {
    // 我们首先可以将初始状态深拷贝一份
    const state = deepClone(store.$state);
    // 提供一个 reset 方法可以重置仓库状态
    store.reset = () => {
      store.$patch(deepClone(state));
    };
  }
  ```

+ 每个插件扩展内容，其实就是对仓库进行内容扩展。如果想要针对某一个仓库进行内容扩展，可以通过 context.store.$id 来指定某一个仓库来扩展内容。

+ 插件书写完毕后，需要通过 pinia 实例对插件进行一个注册操作:

  ```js
  // 引入自定义插件
  import { myPiniaPlugin1, myPiniaPlugin2, myPiniaPlugin3, myPiniaPlugin4} from './plugins';
  // 注册
  pinia.use(myPiniaPlugin1);
  pinia.use(myPiniaPlugin2);
  pinia.use(myPiniaPlugin3);
  pinia.use(myPiniaPlugin4);
  ```

+ 之后就可以在 store 上使用插件添加的状态或者方法，例如：

  ```js
  // main.js
  import { createApp } from 'vue';
  import { createPinia } from 'pinia';
  import App from './App.vue';

  // 自定义插件
  // 在该自定义插件中，扩展了一个数据和方法
  function myPlugin({ store }) {
    store.$state.pluginData = '这是插件添加的数据';

    store.pluginMethod = function () {
      console.log('这是插件添加的方法');
    };
  }

  const pinia = createPinia();
  // 注册自定义插件
  pinia.use(myPlugin);

  const app = createApp(App);
  app.use(pinia);
  app.mount('#app');
  ```

  ```js
  // store.js
  import { defineStore } from 'pinia';

  export const useMyStore = defineStore('myStore', {
    state: () => ({
      myData: '初始数据'
    }),
    actions: {
      usePluginMethod() {
        this.pluginMethod(); // 使用插件提供的方法
        console.log(this.pluginData); // 访问插件提供的数据
      }
    }
  });
  ```

## 第三方插件

+ 在 npm 官网搜索关键字 “pinia plugin”，之后根据文档使用
