# api 管理

## 概述

+ base.js:管理接口域

  + 通过base.js来管理我们的接口域名，不管有多少个都可以通过这里进行接口的定义
  + 即使修改起来，也是很方便的

  ```js
  /**
   * 接口域名的管理
   */
  const base = {
    sq: 'https://xxxx111111.com/api/v1',
    bd: 'http://xxxxx22222.com/api'
  }

  export default base;
  ```

+ article模块接口列表

  ```js
  import base from './base'; // 导入接口域名列表
  import axios from '@/utils/http'; // 导入http中创建的axios实例
  import qs from 'qs'; // 根据需求是否导入qs模块

  const article = {
    // 新闻列表
    articleList () {
      return axios.get(`${base.sq}/topics`);
    },
    // 新闻详情,演示
    articleDetail (id, params) {
      return axios.get(`${base.sq}/topic/${id}`, {
        params: params
      });
    },
    // post提交
    login (params) {
      return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));
    }
    // 其他接口…………
  }

  export default article;
  ```
