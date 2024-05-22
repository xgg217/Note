import router from './router'
import store from './store'
import axios from "axios"
import Cookies from 'js-cookie'
//根据id请求接口获取规则
let whiteList = ["/about", "/login"]
router.beforeEach(async (to, from, next) => {
    const token = Cookies.get("token");
    if (token) {
        if (to.path == "/login") {
            next("/");
        } else {
            //判断是不是已经请求拿了路由规则了
            if (store.state.asyncRoute.length == 0) {
                const _asyncRoutes = await store.dispatch("getRouter");
                _asyncRoutes.forEach((item) => {
                    router.addRoute(item);
                })
                //继续跳转
                next(to.path)
            } else {
                //没有page3 page4
                //user page1 page2 
                if (to.matched.length != 0) {
                    next();
                } else {
                    alert("无页面权限")
                    next(from.path);
                }
            }
        }
    } else {
        if (whiteList.indexOf(to.path) != -1) {
            next()
        } else {
            next("/login")
        }
    }
})


