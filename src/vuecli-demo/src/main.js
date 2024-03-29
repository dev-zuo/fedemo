import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import infiniteScroll from "vue-infinite-scroll";

Vue.config.productionTip = false;

import ElementUI from "element-ui";
Vue.use(ElementUI);
// import {
//   Input,
//   Button,
//   Dialog,
//   Radio,
//   RadioGroup,
//   Select,
//   Option,
//   Tabs,
//   TabPane,
//   Loading,
//   Table,
//   TableColumn
// } from "element-ui";
// // import "element-ui/lib/theme-chalk/index.css";
// Vue.use(Input);
// Vue.use(Button);
// Vue.use(Dialog);
// Vue.use(Radio);
// Vue.use(RadioGroup);
// Vue.use(Select);
// Vue.use(Option);
// Vue.use(Tabs);
// Vue.use(TabPane);
// Vue.use(Loading);
// Vue.use(Table);
// Vue.use(TableColumn);

Vue.use(infiniteScroll);

// import VConsole from "vconsole";
// new VConsole();

import Echarts from "echarts";
Vue.use(Echarts);
Vue.prototype.$echarts = Echarts;

function mountDom(el) {
  el.style.position = "relative";

  let div = document.createElement("div");
  div.style.position = "absolute";
  div.style.top = "0";
  div.style.left = "0";
  div.style.right = "0";
  div.style.bottom = "0";
  div.style.backgroundColor = "white";
  div.classList.add("zloading");

  let htmlStr = `
    <div style="positon:absolute;top:0;left:0;z-index:999;width: 100%;margin: 10 auto;">
      <div class="fast-loading"></div>
      <div class="fast-loading w40"></div>
      <div class="fast-loading w80"></div>
    </div>
  `;
  div.innerHTML = htmlStr;
  el.appendChild(div);
}

Vue.directive("zloading", {
  bind: (el, binding) => {
    // console.log("v-zloading bind");
    // console.log(binding, vnode);
    if (binding.value) {
      mountDom(el);
    }
  },
  update: (el, binding) => {
    // console.log("v-zloading update");
    // console.log(el, binding, vnode);
    let zloadingDom = el.querySelector(".zloading");
    // console.log("zloading dom", zloadingDom);
    if (zloadingDom) {
      zloadingDom.style.display = binding.value ? "block" : "none";
    } else {
      binding.value && mountDom(el);
    }
  }
});

import MessageInfo from "./components/message-info/index.js";
Vue.use(MessageInfo);

import i18n from "./i18n/index";

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
