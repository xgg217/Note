# nvm

## 概述

- nvm并非包管理器，它是用于管理多个 node 版本的工具

- 在实际的开发中，可能会出现多个项目分别使用的是不同的node版本，在这种场景下，管理不同的node版本就显得尤为重要

- nvm就是用于切换版本的一个工具

## 下载和安装

- 最新版下载地址：[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases "https://github.com/coreybutler/nvm-windows/releases")

- 下载nvm-setup.zip后，直接安装

## 使用nvm

- nvm提供了CLI工具，用于管理node版本

- 在终端中输入nvm，以查看各种可用命令

  > 为了加快下载速度，建议设置淘宝镜像
  > node淘宝镜像：[https://npm.taobao.org/mirrors/node/](https://npm.taobao.org/mirrors/node/ "https://npm.taobao.org/mirrors/node/")
  > npm淘宝镜像：[https://npm.taobao.org/mirrors/npm/](https://npm.taobao.org/mirrors/npm/ "https://npm.taobao.org/mirrors/npm/")

  ```bash
  nvm node_mirror https://npm.taobao.org/mirrors/node/
  ```

  ```bash
  nvm npm_mirror [https://npm.taobao.org/mirrors/npm/](https://npm.taobao.org/mirrors/npm/)
  ```

## 命令

- 查看计算机信息

  ```bash
  nvm arch
  ```

- 安装指定 node 版本

  ```bash
  nvm install 8.5.4
  ```

- 查看当前电脑安装的 node 版本

  ```bash
  nvm list
  ```

- 查看 node 所有版本

  ```bash
  nvm list available
  ```

- 切换版本

  ```javascript
  nvm use 8.5.4
  ```

- 卸载 node

  ```javascript
  nvm uninstall 8.5.4
  ```
