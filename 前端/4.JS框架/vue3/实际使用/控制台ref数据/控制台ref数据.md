# 控制台ref数据

## 概述

- 当我们在控制台输出 `ref`声明的变量时

    ```typescript
    const count = ref<numer>(0);

    console.log('[测试 ref]', count)
    ```

- 会看到控制台输出了一个 `RefImpl`对象

    ![](image/image__5YJQKeSpM.png)

## 解决办法

1. 方法1:通过 `.value`来获取

    ```typescript
    console.log('[测试 ref]', count.value);
    ```

2. 方法2:就是在控制台的设置面板中开启 「**Enable custom formatters**」选项

      - 设置

        ![](image/image_AMkBJNOsbK.png)

        ![](image/image_jQnDwk-ij7.png)

      - 查看

        ![](image/image_71f6JSlKkN.png)
