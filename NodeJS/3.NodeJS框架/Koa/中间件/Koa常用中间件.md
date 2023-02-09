# Koa常用中间件

## 概述

| 中间件                                                                                                                            | 功能                                                               |
| -----------------------------------------------------------------------------------------------------------------------------+ | ---------------------------------------------------------------+ |
| [@koa/router](https://github.com/koajs/router "@koa/router")                                                                   | 官方中间件。借鉴了`koa-router`\<br />用于处理路由的中间件，用法类似`express.Router`      |
| [koa-bodyparser](https://github.com/koajs/bodyparser "koa-bodyparser")                                                         | 解析请求体的中间件，支持\<br />x-www-form-urlencoded, application/json格式的请求体 |
| [koa-views](https://github.com/queckezz/koa-views "koa-views")                                                                 | 渲染模板引擎的中间件，一般用于传统的服务端渲染                                          |
| [koa-static](https://github.com/koajs/static "koa-static")                                                                     | 用于搭建静态资源服务器的中间件                                                  |
| [koa-static-cache](https://github.com/koajs/static-cache "koa-static-cache")                                                   | 实现了http缓存的静态资源中间件                                                |
| [koa-session](https://github.com/koajs/session "koa-session")                                                                  | session中间件                                                       |
| [koa-jwt](https://github.com/koajs/jwt "koa-jwt")                                                                              | 支持jwt的中间件                                                        |
| [koa-compress](https://github.com/koajs/compress "koa-compress")                                                               | 支持gzip动态压缩的中间件                                                   |
| [koa-logger](https://github.com/koajs/logger "koa-logger")                                                                     | 日志记录中间件                                                          |
| [@koa/cors](https://github.com/koajs/cors "@koa/cors")                                                                         | 官方中间件。支持CORS跨域的中间件                                               |
| [@koa/multer](https://github.com/koajs/multer "@koa/multer")                                                                   | 官方中间件，借鉴了`koa-multer`\<br />用户处理文件上传（`multipart/form-data`）的中间件  |
| [koa-connect](https://github.com/vkurchatkin/koa-connect#readme "koa-connect")                                                 | 将express或connect中间件转换为koa中间件                                     |
| [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware "http-proxy-middleware")                             | 代理中间件                                                            |
| [connect-history-api-fallback](https://github.com/bripkens/connect-history-api-fallback#readme "connect-history-api-fallback") | 单页应用支持                                                           |
| [koa-convert](https://github.com/gyson/koa-convert#readme "koa-convert")                                                       | 用于将旧版本的koa中间件转换为koa2中间件                                          |
|                                                                                                                                |                                                                  |
