# 导入@import

## 概述

- `@import`算是一个比较简易的模块系统

- `scss`拓展了`@import` 的功能，允许其导入 `scss`或 `sass`文件

- 被导入的文件将合并编译到同一个 `css`文件中，被导入的文件中所包含的变量或者混合指令 (`mixin`) 都可以在导入的文件中使用

    ```sass
    /* common.scss */
    $color:red;
    ```

    ```sass&
    /* index.scss */
    @import "common.scss";
    .container {
        border-color: $color;
    }

    ```

    ```css
    /* 编译成css */
    .container {
    border-color: red;
    }

    ```

## 导入规则

- 以下情况下，`@import` 仅作为普通的`css`语句，不会导入`scss`文件

    1. 文件拓展名是 `.css`；

    2. 文件名以 `http://` 开头；

    3. 文件名是 `url()`；

    4. `@import`包含媒体查询

        ```sass&#x20;(sass)&#x20;
        @import "common.css";
        @import url(common);
        @import "http://xxx.com/xxx";
        @import 'landscape' screen and (orientation:landscape);
        ```

## 不希望将其编译为 css

- 如果需要导入 `scss`或者 `sass`文件，但又不希望将其编译为 `css`，只需要在文件名前添加下划线，这样会告诉 `scss`不要编译这些文件

    1. 导入语句中却不需要添加下划线；

    2. 不可以同时存在添加下划线与未添加下划线的同名文件，添加下划线的文件将会被忽略

    ```sass
    /* _common.scss */
    $color:red;

    ```

    ```sass
    /* index.scss */
    @import "common.scss";
    .container {
        border-color: $color;
    }

    ```

    ```css
    /* 编译为 */
    .container {
      border-color: red;
    }

    ```

- `_common.scss`文件不会编译成`_common.css` 文件

    ![导入](image/导入.png)

- 作用：主要是用来定义公共样式的，专门用于被其他的 `scss`文件 `import`进行使用的
