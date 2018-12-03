// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './utils/router.utils';
import './utils/config.utils';
import store from './store/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

//Vue.use(Viewer) 默认配置写法
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999,
    navbar: false, //底部导航栏
    toolbar: false, //菜单栏
    title: false, // 文件名
    movable: false, //禁止拖动
    rotatable: false, //禁止旋转
    keyboard: false, //键盘支持
    loop: false, //循环查看
  }
})

import VueAreaLinkage from 'vue-area-linkage';
Vue.use(VueAreaLinkage)

Vue.use(ElementUI);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
