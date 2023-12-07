# toRow

## 概述

+ 本应该使用 `reactive`、`readonly`、`shallowReactive`、`shallowReadonly` 代理的对象，使用 `toRow` api方法后，将会返回一个新的原始对象
+ 也就是返回的新对象不再有响应式，改变这个原始对象也不再会影响到页面的显示

  ```js
  const form = reactive({
    name: "iceCode",
  });
  const toRawForm = toRaw(form);
  console.log(form, toRawForm);
  ```

  ![toRaw](images/toRaw.jpg)

+ 使用 `reactive` 创建出的对象是由 `Proxy` 代理的对象，而 `toRaw` 得到的则是一个原始对象

## 使用场景

+ `structuredClone` 深拷贝

  ```js
  //在vite和webpack的vue3项目中分别写入这段代码，看一下最后结果
  const forms = reactive( {
    name:'iceCode'
  })
  const cloneForms = structuredClone( forms )
  console.log('cloneForms',cloneForms);
  ```

  ![区别](images/区别.png)


