import Vue from 'vue'
import Vuex from 'vuex'
import GuestbookService from '@/services/GuestbookService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entries: []
  },
  // change the state of the app (must be synchronous)
  mutations: {
    SET_ENTRIES (state, entries) {
      state.entries = entries
    },
    ADD_ENTRY (state, entry) {
      state.entries.push(entry)
    }
  },
  // asynchronous operations (Such as API calls)
  actions: {
    loadEntries ({ commit }) {
      GuestbookService.getEntries()
        .then(res => {
          commit('SET_ENTRIES', res.data)
        })
    },
    addEntry ({ commit }, entry) {
      GuestbookService.addEntry(entry)
        .then(res => {
          commit('ADD_ENTRY', res.data)
        })
    }
  }
})
