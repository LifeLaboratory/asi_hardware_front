import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lunch: null,
    user: null,
    events: null
  },
  mutations: {
    setLunch (state, lunch) {
      state.lunch = lunch
    },
    setUser (state, user) {
      state.user = user
    },
    setEvents (state, events) {
      console.log(events)
      state.events = events
    }
  },
  actions: {

  }
})
