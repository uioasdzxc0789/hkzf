import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    communityName: '',
    defaultCityInfo: {
      // 名称
      label: '北京',
      // 全拼
      pinyin: 'beijing',
      // 短拼
      short: 'bj',
      // 城市id
      value: 'AREA|88cff55c-aaa4-e2e0'
    }
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setName (state, payload) {
      state.communityName = payload
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
