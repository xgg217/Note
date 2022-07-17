# npm源设置

## npm源地址

*   查看npm源地址

    ```bash
    npm config list

    // 结果
    metrics-registry = "http://registry.npm.taobao.org/"

    // 或者 直接查看
    npm config get registry
    ```

*   修改registry地址，比如修改为淘宝镜像源。

    ```bash
    npm set registry https://registry.npm.taobao.org/

    // 或者 直接设置
    npm config set registry https://registry.npm.taobao.org/
    ```

*   删除淘宝镜像源

    ```bash
    npm config rm registry
    ```

## nrm

*   nrm 是专门用来管理和快速切换私人配置的registry

    ```bash
    npm install nrm -g
    ```

*   用 `nrm ls` 命令查看默认配置，带\*号即为当前使用的配置

    ```bash
    nrm ls

      npm ---- https://registry.npmjs.org/
      cnpm --- http://r.cnpmjs.org/
    * taobao - https://registry.npm.taobao.org/
      nj ----- https://registry.nodejitsu.com/
      rednpm - http://registry.mirror.cqupt.edu.cn/
      npmMirror  https://skimdb.npmjs.com/registry/
      edunpm - http://registry.enpmjs.org/
    ```

*   切换源

    ```bash
    nrm use cnpm
    ```

*   添加 公司私有 `npm` 源 如 `http://registry.npm.360.org` (随便写的)，起个别名叫 `qihoo`

    ```bash
    nrm add qihoo http://registry.npm.360.org
    ```

*   测试下速度

    ```bash
    nrm test npm

    //输出
    npm ---- 790ms
    ```

*   删除公司npm源配置

    ```bash
    nrm del qihoo
    ```
