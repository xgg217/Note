# 包时@charset 警告

## 概述

- 项目新安装的 element-plus 在开发阶段都是正常，没有提示任何警告，但是在打包过程中，控制台输出下面警告内容

    ![警告](image/警告.png)

## 解决办法

- vite.config.ts

    ```js
    // https://blog.csdn.net/u010059669/article/details/121808645
    css: {
      postcss: {
        plugins: [
          // 移除打包element时的@charset警告
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              }
            }
          }
        ],
      },
    }
    ```
