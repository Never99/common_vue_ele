import HttpUtils from '../../utils/http.utils';

const baseUrl = window.globalConfig.service;

const urls = {
  login: `${baseUrl}/api/login`
}

let LoginSrv = {
	getLogin: function (params={}) {
    return HttpUtils.post(urls.login, params);
  }
};

export { LoginSrv };