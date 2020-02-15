export default {
  namespaced: true,
  state: {
    count: 0
  },
  getters: {
    countVal (state) {
      return state.count * 2
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
}
