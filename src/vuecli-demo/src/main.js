import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import infiniteScroll from 'vue-infinite-scroll'

Vue.config.productionTip = false;

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.use(infiniteScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
