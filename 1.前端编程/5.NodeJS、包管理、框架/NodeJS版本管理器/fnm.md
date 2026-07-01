# fnm

## 参考文档

+ github https://github.com/Schniz/fnm/tree/master#shell-setup
+ 参考文档 https://mp.weixin.qq.com/s/gA3X2IBxjqb65vP4K99ZCA

## 安装 fnm

+ macOS 和 Linux 系统

  ```shell
  curl -fsSL https://fnm.vercel.app/install | bash
  ```

+ macOS 也可以直接 brew install fnm安装，但需要配置 Shell 环境：

  ```shell
  # 若自行安装，则需手动添加到 .zshrc 或 .bashrc
  eval "$(fnm env --use-on-cd)"
  ```

+ Windows 系统 `https://github.com/Schniz/fnm/tree/master#shell-setup`

  ```shell
  winget install Schniz.fnm
  ```

## Windows 配置

+ 设置环境变量

  ```shell
  fnm completions --shell <SHELL>
  ```

+ `<SHELL>`

  + bash
  + zsh
  + fish
  + powershell
