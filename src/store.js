import Vue from 'vue'
import Vuex from 'vuex'
import GuestbookService from '@/services/GuestbookService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entries: []
  },
  mutations: {
    setEntries (state, entries) {
      state.entries = entries
    },
    addEntry (state, entry) {
      GuestbookService.addEntry(entry)
        .then(res => {
          state.entries.push(res.data)
        })
    }
  },
  actions: {
    loadEntries ({ commit }) {
      GuestbookService.getEntries()
        .then(res => {
          commit('setEntries', res.data)
        })
    }
  }
})
