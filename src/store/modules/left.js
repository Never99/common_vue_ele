const lefts = {
  state: {
    name: 'xxx'
  },
  mutations: {
    // 用来修改存储的默认数据
    SET_NAME(state, val) {
      state.name = val
    }
  },
  actions: {
    // 用来提交数据（对mutations进行提交）
    GET_NAME({ commit }, val){
      commit('SET_NAME', val)
    }
  },
  // 获取state里的数据
  getters: {
    // 此写法是直接return返回
    GET_STATE_NAME: state => state.name
  }
}

export default lefts;