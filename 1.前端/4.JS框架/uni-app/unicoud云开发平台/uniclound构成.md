# uniclound构成

## 云函数 与 云数据库

*   云函数

    ```javascript
    'use strict'
    exports.main = async (event, context) => {
      // event 为客户端上传的参数
      // 返回数据给客户端
      return event;
    }
    ```

*   云数据库

    ```javascript
    'use strict'

    // 获取数据库引用
    const db = uniCloud.database();
    const collection = db.collection('user');

    /**
     * 伪代码
    */
    exports.main = async (event, context) => {
      // event 为客户端上传的参数
      console.log(event);

      // 将 token写入数据库
      collection.where({
        name: event.data.name,
        password: event.data.password,
      })
      .updata({
        token: event.token,
        token_time: event.timestamp,
      });

      // 获取用户信息
      const user_info = await collection.where({
        name: event.data.name
      }).get();

      // 返回数据给客户端
      return {
        code: 200,
        msg: '登录成功',
        data: user_info
      }
    };
    ```

## 云存储及CDN

## 创建云函数工程

*   创建云函数工程

    ```javascript
    'use strict'
    exports.main = async (event, context) => {
      // event 为客户端上传的参数
      // context 包含了调用信息及运行状态，获取每次调用的上下文

      // 返回数据给客户端
      return event;
    }
    ```
