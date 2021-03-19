import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: null
  },
  mutations: {
    login(state, user) {
      state.loggedIn = true
      state.user = user
      axios.post('http://localhost:3000/mail', user).then(res => {
        console.log(res)
      })
    }
  },
  actions: {
    login({ commit }, user) {
      if (user.email && user.email) commit('login', user)
    }
  },
  modules: {
  }
})
