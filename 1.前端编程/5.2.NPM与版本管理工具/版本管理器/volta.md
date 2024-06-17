# volta

## 命令

volta list //查看存在的版本
volta install node //安装最新版的nodejs
volta install node@12.2.0 //安装指定版本
volta install node@12 //volta将选择合适的版本安装
volta pin node@10.15 //将更新项目的package.json文件以使用工具的选定版本
volta pin yarn@1.14 //将更新项目的package.json文件以使用工具的选定版本

## 切换至当前项目指定的node版本

+ 进入项目的根目录, 并执行

  ```shell
  volta pin node@14.15.5
  ```

+ 此时, 项目的package.json就会多出(值得注意是, 如果项目中没有package.json文件时, 指定版本会直接报错)

  ```js
  {
    "volta": {
      "node": "14.15.5"
    }

  }
  ```
