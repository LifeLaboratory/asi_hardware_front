import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lunch: null
  },
  mutations: {
    setLunch (state, lunch) {
      state.lunch = lunch
    }
  },
  actions: {

  }
})
