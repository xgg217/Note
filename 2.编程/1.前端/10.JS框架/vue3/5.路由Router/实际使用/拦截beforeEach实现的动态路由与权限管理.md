# 拦截beforeEach实现的动态路由，权限管理

## 思路

+ 在 beforeEach 内函数处理逻辑

  + 情况1：未登录 --> 跳转到登录页

    ```js
    import { initDynamicRouter } from "@/routers/modules/dynamicRouter";

    const router = createRouter({
      history: routerMode[mode](),
      routes: [...staticRouter, ...errorRouter],
      strict: false,
      scrollBehavior: () => ({ left: 0, top: 0 })
    });

    router.beforeEach(async (to, from, next) => {

      // 1.NProgress 开始(动画)
      NProgress.start();

      // 2.动态设置标题
      let newStr = document.title.replace(/^.* - (.*?)/, "");
      const title = newStr || import.meta.env.VITE_GLOB_APP_TITLE;
      document.title = to.meta.title ? `${to.meta.title} - ${title}` : title;

      // 3.判断是访问登陆页，有 Token 就在当前页面，没有 Token 重置路由到登陆页
      if (to.path.toLocaleLowerCase() === "/login") {
        if (userStore.token) {
          return next(from.fullPath);
        }
        resetRouter(); // 重置路由
        return next();
      }

      // 4.判断访问页面是否在路由白名单地址(静态路由)中，如果存在直接放行
      if (["/500", "/test"].includes(to.path)) return next();

      // 5.判断是否有 Token，没有重定向到 login 页面
      if (!userStore.token) return next({ path: "/login", replace: true });

      // 6.如果没有菜单列表，就重新请求菜单列表并添加动态路由
      if (!authStore.authMenuListGet.length) {
        await initDynamicRouter();
        return next({ ...to, replace: true });
      }

      // 7.存储 routerName 做按钮权限筛选
      authStore.setRouteName(to.name as string);

      // 8.正常访问页面
      next();
    }

    /**
     * @description 路由跳转错误
     * */
    router.onError(error => {
      NProgress.done();
      console.warn("路由错误", error.message);
    });

    /**
     * @description 路由跳转结束
     * */
    router.afterEach(() => {
      NProgress.done();
    });

    // 重置路由
    export const resetRouter = () => {
      const authStore = useAuthStore();
      authStore.flatMenuListGet.forEach(route => {
        const { name } = route;
        if (name && router.hasRoute(name)) router.removeRoute(name);
      });
    };
    ```

    ```js
    // dynamicRouter.js
    import Page404 from "@/components/ErrorMessage/404.vue";

    // 引入 views 文件夹下所有 vue 文件
    const modules = import.meta.glob("@/views/**/*.vue");

    // 初始化路由
    const initDynamicRouter = async () => {
      const userStore = useUserStore();
      const authStore = useAuthStore();

      try {
        // 1.获取菜单列表 && 按钮权限列表
        await authStore.getAuthMenuList();

        // 2.判断当前用户有没有菜单权限
        if (!authStore.authMenuListGet.length) {
          ElNotification({
            title: "无权限访问",
            message: "当前账号无任何菜单权限，请联系系统管理员！",
            type: "warning",
            duration: 3000
          });

          userStore.setToken("");
          router.replace("/login");
          return Promise.reject("No permission");
        }

        // 3.添加动态路由
        authStore.flatMenuListGet.forEach(item => {
          item.children && delete item.children;
          if (item.component && typeof item.component == "string") {
            item.component = modules["/src/views" + item.component + ".vue"] || Page404;
          }

          // 是否全屏显示
          if (item.meta.isFull) {
            router.addRoute(item as unknown as RouteRecordRaw);
          } else {
            router.addRoute("layout", item as unknown as RouteRecordRaw);
          }
        }
      }catch (error) {
        // 当按钮 || 菜单请求出错时，重定向到登陆页
        userStore.setToken("");
        router.replace("/login");
        return Promise.reject(error);
      }
    }
    ```

    ```js
    import NProgress from "nprogress";
    import "nprogress/nprogress.css";

    NProgress.configure({
      easing: "ease", // 动画方式
      speed: 500, // 递增进度条的速度
      showSpinner: true, // 是否显示加载ico
      trickleSpeed: 200, // 自动递增间隔
      minimum: 0.3 // 初始化时的最小百分比
    });

    export default NProgress;
    ```


