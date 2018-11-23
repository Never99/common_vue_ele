import HttpUtils from '../../utils/http.utils';

const baseUrl = window.globalConfig.service;
// const baseUrl = "http://62.234.104.210:3389";

const urls = {
  storys: `${baseUrl}/my_website/story`
}

let cameraSrv = {
	getStorys: function (params={}) {
    return HttpUtils.post(urls.storys, params);
  }
};

export { cameraSrv };