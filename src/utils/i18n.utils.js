import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

let lang = navigator.language || navigator.browserLanguage,
	loc = lang.split('-')[1];


import EN_US from '../i18n/en-US.js';
import ZH_CN from '../i18n/zh-CN.js';

const messages = {
	us: EN_US,
	cn: ZH_CN
};

console.log(this);

const i18n = new VueI18n({
	locale: loc.toLowerCase(),
	messages
});

export {i18n};
