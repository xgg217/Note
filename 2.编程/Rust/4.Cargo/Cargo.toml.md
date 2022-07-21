# Cargo.toml

## 概述

  - TOML 格式是 Cargo 的配置格式

![](image/Cargo.toml_JrNuJpri63.png)

## 含义

  - `[packge]` 是一个区域标题，表示下方内容是用来配置包（package）的

  - `name` 项目名称

  - `version` 项目版本

  - `authors` 项目作者

  - `edition` 使用 Rust 版本

  - `[dependencies]` 另外一个区域的开始，它会列出项目的依赖项

## 其他

  - 在 Rust 中，代码的包称作 `crate`
