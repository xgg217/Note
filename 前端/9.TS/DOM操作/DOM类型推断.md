# DOM类型推断

## 类型推断

+ 示例

    ```ts
    const a = document.querySelector('body') as HTMLBodyElement; // 断言成 body 元素
    const b = document.querySelector('body') as HTMLDivElement; // 断言成 div 元素

    ```

+ 在控制台中查看元素类型

    ```js
    const a = document.createElement('div')
    console.dir(a); // 查看 [[Prototype]]: HTMLElement

    ```
