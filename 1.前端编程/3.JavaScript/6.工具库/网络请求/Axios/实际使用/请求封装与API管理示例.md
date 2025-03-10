# 请求封装示例

## 引入

+ 一般我会在项目的src目录中，新建一个request文件夹，然后在里面新建一个http.js和一个api.js文件。http.js文件用来封装我们的axios，api.js用来统一管理我们的接口

  ```js
  // 在http.js中引入axios
  import axios from 'axios'; // 引入axios
  import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
  // vant的toast提示框组件，大家可根据自己的ui组件更改。
  import { Toast } from 'vant';
  ```

## 环境的切换

+ 我们的项目环境可能有开发环境、测试环境和生产环境。我们通过node的环境变量来匹配我们的默认的接口url前缀
+ axios.defaults.baseURL可以设置axios的默认请求地址就不多说了

  ```js

  // 环境的切换
  if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'https://www.baidu.com';}
  else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = 'https://www.ceshi.com';
  }
  else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'https://www.production.com';
  }
  ```

## 设置请求超时

+ 通过axios.defaults.timeout设置默认的请求超时时间。例如超过了10s，就会告知用户当前请求超时，请刷新等

  ```js
  axios.defaults.timeout = 10000;
  ```

## post请求头的设置

+ post请求的时候，我们需要加上一个请求头，所以可以在这里进行一个默认的设置，即设置post的请求头为 `application/x-www-form-urlencoded;charset=UTF-8`

  ```js
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
  ```

## 请求拦截

+ 请求拦截

  ```js
  // 先导入vuex,因为我们要使用到里面的状态对象
  // vuex的路径根据自己的路径去写
  import store from '@/store/index';

  // 请求拦截器
  axios.interceptors.request.use(
    config => {
      // 每次发送请求之前判断vuex中是否存在token
      // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
      // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
      const token = store.state.token;
      token && (config.headers.Authorization = token);
      return config;
    },
    error => {
      return Promise.error(error);
  })
  ```

+ 这里说一下token，一般是在登录完成之后，将用户的token通过localStorage或者cookie存在本地，然后用户每次在进入页面的时候（即在main.js中），会首先从本地存储中读取token，如果token存在说明用户已经登陆过，则更新vuex中的token状态。然后，在每次请求接口的时候，都会在请求的header中携带token，后台人员就可以根据你携带的token来判断你的登录是否过期，如果没有携带，则说明没有登录过
+ 这时候或许有些小伙伴会有疑问了，就是每个请求都携带token，那么要是一个页面不需要用户登录就可以访问的怎么办呢？其实，你前端的请求可以携带token，但是后台可以选择不接收啊

## 响应的拦截

+ 响应的拦截

  ```js
  // 响应拦截器
  axios.interceptors.response.use(
    response => {
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
      // 否则的话抛出错误
      if (response.status === 200) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
      if (error.response.status) {
        switch (error.response.status) {
          // 401: 未登录
          // 未登录则跳转登录页面，并携带当前页面的路径
          // 在登录成功后返回当前页面，这一步需要在登录页操作。
          case 401:
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
            break;

          // 403 token过期
          // 登录过期对用户进行提示
          // 清除本地token和清空vuex中token对象
          // 跳转登录页面
          case 403:
            Toast({
              message: '登录过期，请重新登录',
              duration: 1000,
              forbidClick: true
            });
            // 清除token
            localStorage.removeItem('token');
            store.commit('loginSuccess', null);
            // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
            setTimeout(() => {
              router.replace({
                path: '/login',
                query: {
                  redirect: router.currentRoute.fullPath
                }
              });
            }, 1000);
            break;

          // 404请求不存在
          case 404:
              Toast({
                message: '网络请求不存在',
                duration: 1500,
                forbidClick: true
              });
              break;
          // 其他错误，直接抛出错误提示
          default:
            Toast({
              message: error.response.data.message,
              duration: 1500,
              forbidClick: true
            });
        }
        return Promise.reject(error.response);
      }
    }
  });
  ```

+ 响应拦截器很好理解，就是服务器返回给我们的数据，我们在拿到之前可以对他进行一些处理。例如上面的思想：如果后台返回的状态码是200，则正常返回数据，否则的根据错误的状态码类型进行一些我们需要的错误，其实这里主要就是进行了错误的统一处理和没登录或登录过期后调整登录页的一个操作。

+ 要注意的是，上面的Toast()方法，是我引入的vant库中的toast轻提示组件，你根据你的ui库，对应使用你的一个提示组件

## 详细代码

+ code

  ```js
  /**axios封装
   * 请求拦截、相应拦截、错误统一处理
   */
  import axios from 'axios';
  import router from '../router';
  import { Toast } from 'vant';
  import store from '../store/index'

  /**
   * 提示函数
   * 禁止点击蒙层、显示一秒后关闭
   */
  const tip = msg => {
    Toast({
      message: msg,
      duration: 1000,
      forbidClick: true
    });
  }

  /**
   * 跳转登录页
   * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
   */
  const toLogin = () => {
    router.replace({
      path: '/login',
      query: {
        redirect: router.currentRoute.fullPath
      }
    });
  }


  /**
  * 请求失败后的错误统一处理
  * @param {Number} status 请求失败的状态码
  */
  const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
      // 401: 未登录状态，跳转登录页
      case 401:
        toLogin();
        break;
      // 403 token过期
      // 清除token并跳转登录页
      case 403:
        tip('登录过期，请重新登录');
        localStorage.removeItem('token');
        store.commit('loginSuccess', null);
        setTimeout(() => {
            toLogin();
        }, 1000);
        break;
      // 404请求不存在
      case 404:
        tip('请求的资源不存在');
        break;
      default:
          console.log(other);
      }}


  // 创建axios实例
  const instance = axios.create({
    timeout: 1000 * 12
  });

  // post请求头
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

  // 请求拦截器
  axios.interceptors.request.use(
    config => {
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
        // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
        const token = store.state.token;
        token && (config.headers.Authorization = token);
        return config;
      },
      error => {
          return Promise.error(error);
      })

  // 响应拦截器
  axios.interceptors.response.use(
    response => {
      if (response.status === 200) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    },
    // 服务器状态码不是200的情况
    error => {
      const { response } = error;

      if (response) {
        // 请求已发出，但是不在2xx的范围
        errorHandle(response.status, response.data.message);
        return Promise.reject(response);
      } else {
        // 处理断网的情况
        // eg:请求超时或断网时，更新state的network状态
        // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
        // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
        if (!window.navigator.onLine) {
            store.commit('changeNetwork', false);
        } else {
            return Promise.reject(error);
        }
      }
    }
  );
  export default instance;
  ```

## api 管理

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

## 断网的处理

+ 断网的处理

  ```html
  <template>
    <div id="app">
        <div v-if="!network">
            <h3>我没网了</h3>
            <div @click="onRefresh">刷新</div>
        </div>
        <router-view/>
    </div>
  </template>

  <script>
    import { mapState } from 'vuex';
    export default {
      name: 'App',
      computed: {
        ...mapState(['network'])
      },
      methods: {
        // 通过跳转一个空页面再返回的方式来实现刷新当前页面数据的目的
        onRefresh () {
          this.$router.replace('/refresh')
        }
      }
    }
  </script>
  ```
