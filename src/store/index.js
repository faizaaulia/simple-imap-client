import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: null,
    mails: null,
    loader: false
  },
  mutations: {
    login(state, user) {
      state.loader = true
      axios.post('http://localhost:3000/mail', user).then(res => {
        state.loggedIn = true
        state.user = user
        state.mails = res.data
        state.loader = false
      })
    },
    logout(state) {
      state.loggedIn = false,
      state.user = null,
      state.mails = null
      state.loginLoader = false
    },
    refresh(state, user) {
      state.loader = true
      axios.post('http://localhost:3000/mail', user).then(res => {
        state.loader = false
        state.mails = res.data
      })
    }
  },
  actions: {
    login({ commit }, user) {
      if (user.email && user.email) commit('login', user)
    },
    logout({ commit }) {
      commit('logout')
    },
    refresh({ commit }, user) {
      commit('refresh', user)
    }
  },
  getters: {
    getMails(state) {
      return state.mails
    },
    getLog(state) {
      return state.loggedIn
    },
    getUser(state) {
      return state.user
    },
    getLoader(state) {
      return state.loader
    }
  },
  modules: {
  }
})
