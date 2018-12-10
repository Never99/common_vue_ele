import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// import lefts from './modules/left'

// const store = new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   getters: {},
//   modules: {
//     lefts
//   }
// })

// 自动化配置vuex文件
var filsJs = require.context("./modules", true, /\.js$/);
var modules = {};
filsJs.keys().forEach((fileName) => {
  modules[fileName.replace(/(\.\/|\.js)/g, '')] = filsJs(fileName).default
});

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: modules
})

export default store