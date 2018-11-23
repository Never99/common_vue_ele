import HttpUtils from '../../utils/http.utils';

const urls = {
  login: 'http://62.234.104.210:3389/api/login'
}

let LoginSrv = {
	getLogin: function (params={}) {
    return HttpUtils.post(urls.login, params);
  }
};

export { LoginSrv };