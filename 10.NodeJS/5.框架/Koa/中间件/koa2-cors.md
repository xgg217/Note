# koa2-cors

## 中间件

+ `@koa/cors`

## 跨域请求

+ 后台设置

  ```js
  app.use(Cors(corsHandler))
  ```

  ```js
  // corsHandler.ts
  import { Context } from 'koa'

  export const corsHandler = {
    origin: function (ctx: Context) {
      return '*'
    },
    exposeHeaders: ['Authorization'],
    maxAge: 5 * 24 * 60 * 60,
    // credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'],
  }
  ```

+ 浏览器：设置 `withCredentials: true` 时， `Access-Control-Allow-Origin` 不能设置为 `*`

  ```js
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  })
  ```
