# token无感刷新

## 概述

+ 解决方案1

  + 登录成功后，接口返回两个token（请求的token-过期时间短、用于更换token-过期时间长）
  + 当请求接口出现过期后，使用更换的token去请求

## 解决方案1：示例

+ code

  ```js
  // request.js
  import axios from "axios";
  import {setToken, setRefreshToken, getToken} from "./token.js"
  import {refreshToken,isRefreshToken} from "./refreshToken.js"

  const ins = axios.create({
    baseURL: "http://localhose:9527",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    }
  });

  ins.interceptors.response.use(async (res) => {
    // 设置请求token
    if(res.headers.authorization) {
      const token = res.headers.authorization.replace("Bearer", '');

      setToken(token);

      ins.defaults.headers.Authorization = `Bearer ${token}`;
    }

    // 设置刷新token
    if(res.headers.refreshtoken) {
      const refreshtoken = res.headers.refreshtoken.replace("Bearer", "");
      setRefreshToken(refreshtoken)
    }

    // 如果无权限
    if(res.data.code === 401 && isRefreshToken(res.config)) {
      // 刷新token
      const isBool = await refreshToken();

      // 是否刷新到了token
      if(isBool) {
        // 重新请求
        res.config.headers.Authorization = `Bearer ${getToken()}`; // 更换新的token
        const res = await ins.request(res.config)
        return res;
      } else {
        // 无权限-退出登录
        cosnole.error('退出登录到登录页')
        return res.data;
      }
    }

    return res.data;
  })

  export default ins;
  ```

+ 刷新token

  ```js
  // refreshToken.js
  import {getRefreshToken} from "./token.js"

  let promise;

  // 刷新token
  export async function refreshToken() {
    if(promise) {
      return promise
    }

    promise = new Promise((res) => {
      const resp = await request.get("/refresh_token", {
        headers: {
          Authorization: `Bearer ${getRefreshToken()}`,
        },
        __isRefreshToken: true
      });

      // 是否拿到了token
      res(resp.code === 200);
    })

    promise.finally(() => {
      promise = null;
    })

    return promise

  }

  // 查看是否针对刷新的token
  export function isRefreshToken(config) {
    return !!config.__isRefreshToken
  }
  ```
