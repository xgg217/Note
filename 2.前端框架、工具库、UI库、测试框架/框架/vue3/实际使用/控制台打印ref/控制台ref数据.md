# 控制台ref数据

## 概述

+ 当我们在控制台输出 `ref` 声明的变量时

  ```js
  const count = ref<numer>(0);

  console.log('[测试 ref]', count)
  ```

+ 会看到控制台输出了一个 `RefImpl` 对象

  ![RefImpl](image/RefImpl.png)

## 方式1

+ 通过 `.value` 来获取

  ```js
  console.log('[测试 ref]', count.value);
  ```

## 方法2之控制台设置

+ 控制台的设置面板中开启 「**Enable custom formatters**」选项

  + DevTools -> setting -> console -> Enable custom formatters
  + 开发者模板 -> 设置 -> 首选项 -> 控制台 -> 启用自定义格式化程序

  ![设置1](image/设置1.png)
  ![设置2](image/设置2.png)
  ![查看](image/查看.png)
