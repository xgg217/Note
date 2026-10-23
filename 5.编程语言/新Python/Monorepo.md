# Monorepo

## 什么是 Monorepo

**Monorepo**（单一仓库）是将多个相关的项目/包放在同一个代码仓库中管理的策略。

```
my-monorepo/
├── packages/
│   ├── utils/          # 公共工具库
│   ├── client-sdk/     # 客户端 SDK
│   └── web-app/        # Web 应用
├── pyproject.toml      # workspace 根配置
└── README.md
```

### Multirepo VS Monorepo

| 对比维度 | MultiRepo | Monorepo |
| :--- | :--- | :--- |
| **代码共享** | 需要发版、发布 pip 包才能共享 | 源码级别直接引用，即时生效 |
| **原子提交** | 跨仓库改动需要多个 PR 协同 | 一次提交完成所有关联改动 |
| **工具规范** | 各仓库独立配置工具 | 统一的工具与规范 |
| **重构成本** | 跨仓库重构代价极高 | 工具链覆盖整个仓库，安全重构 |
| **CI/CD** | 多个 Pipeline 各自独立 | 统一 CI，可增量检测受影响的包 |
| **适用场景** | 团队独立、版本节奏不一致的项目 | 紧密协作的微服务、SDK 集合、工具链 |



## 搭建 Workspace

> uv workspace文档：https://docs.astral.sh/uv/concepts/projects/workspaces/#using-workspaces

### 第一步：初始化根项目

```shell
mkdir my-monorepo && cd my-monorepo
uv init
```

根级 `pyproject.toml`：

```toml
# 添加 members
[tool.uv.workspace]
members = [
    "packages/*",
    "app/*",
]
```

`members` 支持 glob 模式：

| 模式 | 匹配范围 |
| :--- | :--- |
| `packages/*` | `packages/` 下的直接子目录 |
| `packages/**` | `packages/` 下的所有子目录（含嵌套） |
| `libs/*` | `libs/` 下的直接子目录 |
| `apps/*` | `apps/` 下的直接子目录 |

可以同时配置多个目录：

```toml
[tool.uv.workspace]
members = [
    "packages/*",
    "apps/*",
    "libs/*",
]
```

### 第二步：创建成员包

```shell
uv init --lib packages/agents
uv init --lib packages/shared
uv init app/web-service
```

### 第三步：成员包依赖

```toml
# packages/agents/pyproject.toml
dependencies = [
    "shared",
]

[tool.uv.sources]
shared = { workspace = true }

# app/web-service/pyproject.toml
dependencies = [
    "agents",
]

[tool.uv.sources]
agents = { workspace = true }
```

> **`[tool.uv.sources]`** 是 UV workspace 的**核心机制**。它告诉 UV：`utils` 依赖不从 PyPI 下载，而是从工作区内的同名成员包中链接。
>
> 如果某个包在 PyPI 和 workspace 中同名，workspace 优先。需要强制走 PyPI 时可以写成 `utils = { workspace = false }`。

### [可选]第四步：同步安装

```shell
uv sync --all-packages
```

执行后：

1. UV 读取所有成员包的 `pyproject.toml`
2. 解析完整的依赖树（包括成员间的依赖）
3. 在根目录生成统一的 `uv.lock`
4. 在根目录创建 `.venv`，安装所有依赖

### 第五步：运行

```shell
uv run --package web-service python app/web-service/main.py
```



### [可选]使用Makefile

```makefile
.PHONY: run-web

run-web:
	uv run --package web-service python app/web-service/main.py
```

### [可选]安装第三方依赖

```shell
# 给某个成员包添加依赖
uv add --package <成员包> <包名>

# 给项目根添加依赖
uv add --dev <包名>
```

### [可选]构建

```shell
# 构建全部
uv build

# 构建指定包
uv build --package utils
```

### [可选]查看依赖关系

```shell
# 查看 workspace 中某个包的依赖树
uv tree --package web-app

# 查看所有包的依赖树
uv tree
```

输出示例：

```
web-app v0.1.0
├── data-tools v0.1.0 (workspace)
│   └── pandas v2.1.0
│       ├── numpy v1.26.0
│       └── python-dateutil v2.8.2
└── utils v0.1.0 (workspace)
```

workspace 中的包会标记为 `(workspace)`，一目了然。

## 包间依赖的三种模式

### 源码链接（workspace 模式）

```toml
[tool.uv.sources]
utils = { workspace = true }
```

- 本地直接引用源码，修改即时生效
- 无需 `pip install -e .` 或 `uv add` 重新安装
- 适合日常开发

### 路径引用

```toml
[tool.uv.sources]
utils = { path = "../utils" }
```

- 引用工作区之外的本地包
- 路径可以是相对或绝对路径

### Git 引用

```toml
[tool.uv.sources]
utils = { git = "https://github.com/org/utils.git", rev = "v0.1.0" }
```

- 引用 Git 仓库中的某个版本
- 可用于引用未发布到 PyPI 的依赖

## 作业

手工复现本节课工程，并将`shared`、`agents`发布到阿里云制品仓库
