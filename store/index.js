import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import LRU from 'lru-cache'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    title: 'News Reader',
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15 // 15min
    })
  },
  mutations: {},
  plugins: [
    createPersistedState()
  ]
})

export default store
