# 与ts搭配

## axios 使用

- axios 的安装使用和vue2上没有什么大的区别，如果需要做一些扩展属性，还是需要声明一个新的类型

    ```js
    type Config = AxiosRequestConfig & {successNotice? : boolean, errorNotice? : boolean}
    ```

    ```js
    import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
    import { ElMessage } from 'element-plus';
    const instance = axios.create({
      baseURL: process.env.VUE_APP_API_BASE_URL || '',
      timeout: 120 * 1000,
      withCredentials: true
    });

    // 错误处理
    const err = (error) => {
      if (error.message.includes('timeout')) {
        ElMessage({
          message: '请求超时，请刷新网页重试',
          type: 'error'
        });
      }
      if (error.response) {
        const data = error.response.data;
        if (error.response.status === 403) {
          ElMessage({
            message: 'Forbidden',
            type: 'error'
          });
        }
        if (error.response.status === 401) {
          ElMessage({
            message: 'Unauthorized',
            type: 'error'
          });
        }
      }
      return Promise.reject(error);
    };

    type Config = AxiosRequestConfig & {successNotice? : boolean, errorNotice? : boolean}

    // 请求拦截
    instance.interceptors.request.use((config: Config) => {
      config.headers['Access-Token'] = localStorage.getItem('token') || '';
      return config;
    }, err);

    // 响应拦截
    instance.interceptors.response.use((response: AxiosResponse) => {
      const config: Config = response.config;

      const code = Number(response.data.status);
      if (code === 200) {
        if (config && config.successNotice) {
          ElMessage({
            message: response.data.msg,
            type: 'success'
          });
        }
        return response.data;
      } else {
        let errCode = [402, 403];
        if (errCode.includes(response.data.code)) {
          ElMessage({
            message: response.data.msg,
            type: 'warning'
          });
        }
      }
    }, err);

    export default instance;
    ```
