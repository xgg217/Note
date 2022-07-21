# install

## 命令

  - `winget install [[-q] <query>] [<options>]`

    ![](image/image_NAOx08Lk6k.png)

## 选项

  - 这些选项允许你根据自己的需求自定义安装体验

    | 选项                | 说明            |                                                                       |
    | ----------------- | ------------- | --------------------------------------------------------------------- |
    | `-l`、`--location` | 要安装到的位置（如果支持） | `winget install notepad++ -l d:\notepad++`  将该软件安装在“d:\notepad++”路径下面 |
    |                   |               |                                                                       |
    |                   |               |                                                                       |

## 安装示例

  - 安装特定版本的应用程序 `winget install powertoys --version 0.15.2`

## 多项匹配

  - 如果 搜索 找到了两项匹配的（因为软件的源不一样），想要安装其中某一项

    ![](image/image_PGR48BP-KT.png)

  - 可以执行命令：`winget install` +想要安装的package的`Name` 或者`ID` (如果有多项匹配的话)
