# getAttribute

## 基本使用

+ html

    ```html
    <button id="button" data-author="zhangxinxu">作者是谁？</button>
    ```

+ 使用 `getAttribute` 和 `dataset` 对象都能获取 `data-author` 属性值

    ```js
    button.getAttribute('data-author'); // 结果是：zhangxinxu
    ```

    ```js
    button.dataset.author; // 结果也是：zhangxinxu
    ```

## 区别

+ 大小写敏感，`getAttribute` 方法是无视大小写的

    ```html
    <button id="button" data-AUTHOR="zhangxinxu">作者是谁？</button>
    ```

    ```js
    button.getAttribute('DATA-author'); // 结果是：zhangxinxu
    ```

    ```js
    button.dataset.AUTHOR; // 结果是：undefined

    // 要想dataset对象正确获取data-AUTHOR属性值，需要使用小写
    button.dataset.author; // 结果是：zhangxinxu
    ```

+ 如果自定义属性包含多个词组，则 `dataset` 对象属性值需要使用驼峰命名获取

    ```html
    <button id="button" data-article-author="zhangxinxu">感谢阅读！</button>
    ```

    ```js
    // 结果都是：zhangxinxu
    button.getAttribute('data-article-author');
    button.dataset.articleAuthor;
    ```

+ 且只能使用驼峰命名方法，例如下面的语句还是返回 `undefined`

    ```js
    button.dataset['article-author']; // 结果是：undefined
    ```
