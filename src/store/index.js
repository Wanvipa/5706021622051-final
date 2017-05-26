import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  strict: true,
  state: {
    storeGrades: []
  },
  getters: {
    storeGrades: (state) => state.storeGrades
  },
  mutations: {
    addGrade: (state, storeGrades) => {
      state.storeGrades.push(storeGrades)
    },
    calculateGrade: (state, storeGrades) => {}
  },
  actions: {
    addGrade ({commit}, storeGrades) {
      commit('addGrade', storeGrades)
    },
    calculateGrade ({commit}, storeGrades) {
      commit('calculateGrade', storeGrades)
    }
  }
})
