# pnpm

## 安装

  - npm

    ```bash
    npm install -g pnpm@next-7
    ```

  - winget

## 升级pnpm

  - 一旦安装完 pnpm 之后，就无需使用其它软件包管理器来更新 pnpm 了。你可以让 pnpm 自己来更新自己，如下所示

    ```bash
    pnpm add -g pnpm
    ```

## CLI命令

  - 与npm对比

    | npm 命令          | pnpm 等价命令                                                                                                                        |
    | --------------- | -------------------------------------------------------------------------------------------------------------------------------- |
    | `npm install`   | [pnpm install](https://www.pnpm.cn/cli/install "pnpm install") 别名 `pnpm i`                                                       |
    | `npm i <pkg>`   | [pnpm add \<pkg>](https://www.pnpm.cn/cli/add "pnpm add <pkg>") 默认 -S                                                            |
    |                 | `pnpm add -D`                                                                                                                    |
    |                 | `pnpm add -g`  全局安装                                                                                                              |
    |                 | `pnpm add sax@3.0.0`安装指定版本                                                                                                       |
    |                 | `pnpm up` 更新                                                                                                                     |
    | `npm run <cmd>` | [pnpm remove \<cmd>](https://www.pnpm.cn/cli/run "pnpm remove <cmd>") 别名 `pnpm rm <cmd>` `pnpm uninstall <cmd>`  `pnpm un <cmd>` |

  - 帮助命令

    ```bash
    pnpm run lint

    pnpm lint

    ```

## 安装源

  - 查看

    ```bash
    pnpm config get registry  //查看源
    pnpm config set registry http://registry.npm.taobao.org  //切换淘宝源
    ```

  - 切换国内源

    ```bash
    pnpm config set registry https://registry.npmmirror.com
    ```
