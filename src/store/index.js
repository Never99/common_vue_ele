import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import lefts from './modules/left'

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    lefts
  }

})

export default store