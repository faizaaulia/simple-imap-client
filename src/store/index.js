import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: null,
    mails: null
  },
  mutations: {
    login(state, user) {
      axios.post('http://localhost:3000/mail', user).then(res => {
        state.loggedIn = true
        state.user = user
        state.mails = res.data
      })
    }
  },
  actions: {
    login({ commit }, user) {
      if (user.email && user.email) commit('login', user)
    }
  },
  getters: {
    getMails(state) {
      return state.mails
    }
  },
  modules: {
  }
})
