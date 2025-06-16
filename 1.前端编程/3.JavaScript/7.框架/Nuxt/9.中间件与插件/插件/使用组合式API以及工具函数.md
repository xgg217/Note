# 使用组合式API以及工具函数

## 概述

+ 在插件中，可以使用内置的或者自定义的组合式 API 以及工具函数。例如：

  ```js
  // composables/useFoo.ts
  export const useFoo = () => {
    return useState("foo", () => "bar");
  };
  ```

  ```js
  // plugins/hello.ts
  export default defineNuxtPlugin((nuxtApp) => {
    const foo = useFoo();
    console.log(foo.value);
  });
  ```

+ 启动应用后，会自动执行该插件代码
