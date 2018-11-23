// 接口地址
// const ROOT_PATH = `${window.location.origin.replace(/:\d+/, '')}`;
const ROOT_PATH = window.location.origin;

// 全局配置
const globalConfig = {
  service: "http://62.234.104.210:3389"
};

// 开发环境下
if (process.env.NODE_ENV === 'development') {
  // 代理地址
  globalConfig.service = `${ROOT_PATH}/api`;
}

// 集成发布模式下config配置不写入window全局下
if (process.env.NODE_ENV !== 'publish') {
  (function (window) { //eslint-disable-line
    window.globalConfig = globalConfig;
  }(window));
}

export default {
  globalConfig
};

