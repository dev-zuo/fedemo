import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    obj: {
      message: "hello"
    }
  },
  mutations: {
    updateObj(state, value) {
      Object.assign(state.obj, value);
    }
  },
  actions: {},
  modules: {}
});
