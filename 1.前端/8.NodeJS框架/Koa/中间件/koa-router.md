# koa-router

## 安装@koa/router

*   安装

    ```bash
    # npm .. 
    npm i @koa/router
    # yarn .. 
    yarn add @koa/router
    ```

    ```javascript
    // ts
    npm i --save-dev @types/koa__router
    ```

## 基础使用

*   使用

    ```javascript
    // index.ts
    import Koa from 'koa';
    import http from 'http';

    import adminRouter from './routers/admin';

    const app = new Koa();
    const server = http.createServer(app.callback());

    // 注册路由
    app.use(adminRouter);

    server.listen(8081, () => {
      console.log('启动');
    });

    ```

    ```javascript
    // adminRouter.ts
    import Router from '@koa/router';
    const router = new Router({
      prefix: '/admin'
    });

    // 完整路径 /admin/add
    router.get('/add', (ctx, next) => {
      console.log('测试');
      ctx.body = {
        name: '小哥哥',
        age: 18
      }
    });

    export default router.routes();
    ```
