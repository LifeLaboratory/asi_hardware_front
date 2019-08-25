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
    setInterval (state, time) {
      console.log(time)
      state.interval = time
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
