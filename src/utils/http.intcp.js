import axios from 'axios';
import qs from 'querystring';
import { Loading, Notification } from 'element-ui';
let reqnum = [],
  notion = {
    close: () => {}
  },
  loadinginstace;

function _closeLoading() {
  reqnum = [];
  loadinginstace ? loadinginstace.close() : {};
}

function _filterCode(data) {
  try {
    let code = data.code;
    //token失效，跳转到登录页面
    if (code === 1100) {
      window.localStorage.setItem('token', '');
      window.location.href = window.location.origin + '/#/login';
    } else if (code !== 0) {
      // Notification.error({
      // 	title: '请求出错',
      // 	duration: 800,
      // 	message: data.msg,
      // 	offset: 50
      // })
    }
  } catch (e) {}

}

//根据url设置头信息
function _setHeader(config) {
  let joinStr = '?r=';
  // let tokenStr = '?token=';  //添加到请求后边
  if (config.url.indexOf('&') > -1) {
    joinStr = '&r=';
  }
  joinStr = joinStr + new Date().getTime();
  //mock模式下不添加随机参数
  if (config.url.indexOf('http://') < 0) {
    joinStr = '';
  }
	config.url = config.url + joinStr; //请求头设置时间戳，避免缓存
	
	// if (config.url.indexOf('&') > -1) {
  //   tokenStr = '&token=';
	// }
	// config.url = config.url + joinStr + tokenStr; //请求头设置时间戳，避免缓存

  //config.headers.timetemp = new Date.getTime();
  config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('token');
  //获取token请求，需要设置content-type为application/x-www-form-urlencoded格式
  if (config.url.indexOf('auth/v1/token') > -1) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    config.transformRequest = [function (data) {
      // 对 data 进行任意转换处理
      data = qs.stringify(data)
      return data;
    }];
  }
}
// 拦截请求，添加header
function _interceptors() {
  //http请求拦截器
  axios.interceptors.request.use(config => {
    _setHeader(config); //头信息处理
    loadinginstace = Loading.service({
      fullscreen: true
    }); //调用加载组件
    //多个请求loadding监控
    reqnum.push('');
    return config;
  }, error => {
    _closeLoading();
    return Promise.reject(error);
  })
  // http响应拦截器
  axios.interceptors.response.use(res => {
    _filterCode(res.data);
    reqnum.splice(0, 1);
    //请求全部成功
    if (reqnum.length == 0) _closeLoading();
    return res;
  }, error => {
    _closeLoading();
    notion.close();
    notion = Notification.error({
      title: '',
      message: '客户端请求服务异常',
      offset: 50
    })

    return Promise.reject(error);
  })
}

export default {
  interceptors: _interceptors
}
