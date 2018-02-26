import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    title: 'News Reader'
  },
  mutations: {},
  plugins: [
    createPersistedState()
  ]
})

export default store
