import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lunch: null,
    intersssval: -1
  },
  mutations: {
    setLunch (state, lunch) {
      console.log(lunch)
      state.lunch = lunch
    },
    setInterval (state, time) {
      console.log(time)
      state.interval = time
    },
    setUser (state, user) {
      console.log(user)
      state.user = user
    }
  },
  actions: {

  }
})
