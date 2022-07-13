# isProxy

## 概述

*   检查一个对象是否是由 [reactive()](https://staging-cn.vuejs.org/api/reactivity-core.html#reactive "reactive()")、[readonly()](https://staging-cn.vuejs.org/api/reactivity-core.html#readonly "readonly()")、[shallowReactive()](https://staging-cn.vuejs.org/api/reactivity-advanced.html#shallowreactive "shallowReactive()") 或 [shallowReadonly()](https://staging-cn.vuejs.org/api/reactivity-advanced.html#shallowreadonly "shallowReadonly()") 创建的代理

## TS类型

*   类型

    ```typescript
    function isProxy(value: unknown): boolean
    ```

## 示例

*   示例

    ```javascript
    const count = ref(0);
    console.log(isProxy(count)); // false

    ```

    ```javascript
    const obj1 = reactive({ a:' 张三' });
    console.log(isProxy(obj1)); // true
    ```

    ```javascript
    const obj2 = readonly({ a:' 张三' });
    console.log(isProxy(obj2)); // true
    ```

    ```javascript
    const obj3 = { a:' 张三' };
    console.log(isProxy(obj3)); // false
    ```

    ```javascript
    const obj4 = new Proxy({
      name: 1,
    }, {});
    console.log(isProxy(obj4)); // false
    ```
