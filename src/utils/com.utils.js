import qs from 'querystring';
export default {
	install(Vue, options) {
		Vue.prototype.Format = (dateParam, fmt) => {
			let o = {
				"M+": dateParam.getMonth() + 1, //月份
				"d+": dateParam.getDate(), //日
				"h+": dateParam.getHours(), //小时
				"m+": dateParam.getMinutes(), //分
				"s+": dateParam.getSeconds(), //秒
				"q+": Math.floor((dateParam.getMonth() + 3) / 3), //季度
				"S": dateParam.getMilliseconds() //毫秒
			};
			if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (dateParam.getFullYear() + "").substr(4 - RegExp.$1.length));
			for(var k in o)
				if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			return fmt;
		}
		//序列化url参数
		Vue.prototype.queryString = (url='') => {
			let params = {};
			let arr = url.split('?');
			if(arr[1]){
				params = qs.parse(arr[1]);
			}
			return params;
		}
		//check password
		Vue.prototype.checkPassword = (pwd) => {
			if (pwd.length < 6) return 'short'
			if (pwd.length > 12) return 'long'
			let count = 0
			count += pwd.length >= 8 ? 25 : 10
			count += !(/[a-z]/i.test(pwd)) ? 0 : (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd) ? 20 : 10)
			count += !(/[0-9]/.test(pwd)) ? 0:((/[0-9]/g).test(pwd).length >= 3 ? 20 : 10)
			count += !(/\W/.test(pwd)) ? 0:((/\W/g).test(pwd).length > 1 ? 25:10)
			count += !(/[0-9]/.test(pwd)) || !((/[a-z]/i).test(pwd)) ? 0:(!(/\W/.test(pwd)) ? 2:(!(/[a-z]/.test(pwd)) || !(/[A-Z]/.test(pwd)) ? 3:5))
			return count
		}
	}
}
