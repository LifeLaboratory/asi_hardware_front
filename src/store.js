import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: ''
  },
  getters: {
    GetSearchState : state => {
      return state.search;
    }
  },
  mutations: {
    SearchState : (state,payload) => {
      state.search = payload
    },
  },
  actions: {
    SearchState : (context, payload) => {
      context.commit("SearchState", payload)
    }

  }
})
