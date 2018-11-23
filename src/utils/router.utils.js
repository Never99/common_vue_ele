import Vue from 'vue';
import Router from 'vue-router';

const routes = [];

// require.context自动化注册所有路由配置
const requireComponent = require.context('@/modules', true, /\.router.js$/);

requireComponent.keys().forEach((fileName) => {
  const routerConfig = requireComponent(fileName);
  routes.push(...routerConfig.default);
});


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import(/* webpackChunkName: "layout" */'../modules/layout/layout'),
      children: routes
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */'../modules/login/login')
    }
  ]
});

//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');
  let paths = to.path;

  if (paths === '/login') {
    next()
    return
  }
  if (token) {
    if (paths === '/') {
      next({
        path: '/camera'
      })
    } else {
      next()
    }
    // localStorage.setItem("defaultActive", paths.slice(1));
  } else {
    // 没登录则跳转到登录界面
    next({
      path: '/login'
    })
    localStorage.removeItem('token');
    // localStorage.removeItem("defaultActive");
  }
})

export default router;
